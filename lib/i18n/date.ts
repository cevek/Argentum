module ag {
    function dateGetter(name:string, size:number, offset?:number, trim?:boolean) {
        offset = offset || 0;
        return function (date:Date) {
            var value = (<any>date)['get' + name]();
            if (offset > 0 || value > -offset) {
                value += offset;
            }
            if (value === 0 && offset == -12) {
                value = 12;
            }
            return locale.padNumber(value, size, trim);
        };
    }

    function dateStrGetter(name:string, shortForm?:boolean) {
        return function (date:any) {
            var value = date['get' + name]();
            var get = (shortForm ? ('SHORT' + name) : name).toUpperCase();

            return (<any>lang.DATETIME_FORMATS)[get][value];
        };
    }

    function timeZoneGetter(date:Date) {
        var zone = -1 * date.getTimezoneOffset();
        var paddedZone = (zone >= 0) ? "+" : "";

        paddedZone += locale.padNumber(zone > 0 ? Math.floor(zone / 60) : Math.ceil(zone / 60), 2) + locale.padNumber(Math.abs(zone % 60), 2);

        return paddedZone;
    }

    function getFirstThursdayOfYear(year:number) {
        // 0 = index of January
        var dayOfWeekOnFirst = (new Date(year, 0, 1)).getDay();
        // 4 = index of Thursday (+1 to account for 1st = 5)
        // 11 = index of *next* Thursday (+1 account for 1st = 12)
        return new Date(year, 0, ((dayOfWeekOnFirst <= 4) ? 5 : 12) - dayOfWeekOnFirst);
    }

    function getThursdayThisWeek(datetime:Date) {
        return new Date(datetime.getFullYear(), datetime.getMonth(),
            // 4 = index of Thursday
            datetime.getDate() + (4 - datetime.getDay()));
    }

    function weekGetter(size:number) {
        return function (date:Date) {
            var firstThurs = getFirstThursdayOfYear(date.getFullYear()),
                thisThurs = getThursdayThisWeek(date);

            var diff = +thisThurs - +firstThurs,
                result = 1 + Math.round(diff / 6.048e8); // 6.048e8 ms per week

            return locale.padNumber(result, size);
        };
    }

    function ampmGetter(date:Date) {
        return date.getHours() < 12 ? lang.DATETIME_FORMATS.AMPMS[0] : lang.DATETIME_FORMATS.AMPMS[1];
    }

    var DATE_FORMATS:any = {
        yyyy: dateGetter('FullYear', 4),
        yy: dateGetter('FullYear', 2, 0, true),
        y: dateGetter('FullYear', 1),
        MMMM: dateStrGetter('Month'),
        MMM: dateStrGetter('Month', true),
        MM: dateGetter('Month', 2, 1),
        M: dateGetter('Month', 1, 1),
        dd: dateGetter('Date', 2),
        d: dateGetter('Date', 1),
        HH: dateGetter('Hours', 2),
        H: dateGetter('Hours', 1),
        hh: dateGetter('Hours', 2, -12),
        h: dateGetter('Hours', 1, -12),
        mm: dateGetter('Minutes', 2),
        m: dateGetter('Minutes', 1),
        ss: dateGetter('Seconds', 2),
        s: dateGetter('Seconds', 1),
        // while ISO 8601 requires fractions to be prefixed with `.` or `,`
        // we can be just safely rely on using `sss` since we currently don't support single or two digit fractions
        sss: dateGetter('Milliseconds', 3),
        EEEE: dateStrGetter('Day'),
        EEE: dateStrGetter('Day', true),
        a: ampmGetter,
        Z: timeZoneGetter,
        ww: weekGetter(2),
        w: weekGetter(1)
    };

    var DATE_FORMATS_SPLIT = /((?:[^yMdHhmsaZEw']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|w+))(.*)/,
        NUMBER_STRING = /^\-?\d+$/;

    //                      1        2       3         4          5          6          7          8  9     10      11
    var R_ISO8601_STR = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;

    export function dateFilter(date:Date, format?:string, timezone?:string) {

        var text = '',
            parts:string[] = [];

        format = format || 'mediumDate';
        format = (<any>lang.DATETIME_FORMATS)[format] || format;

        if (!date || !isFinite(date.getTime())) {
            return 'Invalid Date';
        }

        while (format) {
            var match = DATE_FORMATS_SPLIT.exec(format);
            if (match) {
                parts = parts.concat([].slice.call(match, 1));
                format = parts.pop();
            } else {
                parts.push(format);
                format = null;
            }
        }

        if (timezone && timezone === 'UTC') {
            date = new Date(date.getTime());
            date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
        }
        parts.forEach((value) => {
            var fn = DATE_FORMATS[value];
            text += fn ? fn(date, lang.DATETIME_FORMATS)
                : value.replace(/(^'|'$)/g, '').replace(/''/g, "'");
        });

        return text;
    }
}