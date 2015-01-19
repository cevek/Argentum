module ag {

    function timeZoneGetter(date:Date) {
        var zone = -1 * date.getTimezoneOffset();
        var paddedZone = (zone >= 0) ? "+" : "";
        paddedZone += padNumber(zone > 0 ? Math.floor(zone / 60) : Math.ceil(zone / 60), 2) + padNumber(Math.abs(zone % 60), 2);
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

    function weekGetter(date:Date) {
        var firstThurs = getFirstThursdayOfYear(date.getFullYear()),
            thisThurs = getThursdayThisWeek(date);

        var diff = +thisThurs - +firstThurs; // 6.048e8 ms per week
        return 1 + Math.round(diff / 6.048e8);
    }

    function ampmGetter(date:Date) {
        return date.getHours() < 12 ? lang.DATETIME_FORMATS.AMPMS[0] : lang.DATETIME_FORMATS.AMPMS[1];
    }

    function ampm(value:number) {
        return value === 12 ? 12 : value - 12;
    }

    var DATE_FORMATS:any = {
        y: {
            4: (date:Date)=>padNumber(date.getFullYear(), 4),
            2: (date:Date)=>padNumber(date.getFullYear(), 2, true),
            1: (date:Date)=>date.getFullYear()
        },
        M: {
            4: (date:Date)=>lang.DATETIME_FORMATS.MONTH[date.getMonth()],
            3: (date:Date)=>lang.DATETIME_FORMATS.SHORTMONTH[date.getMonth()],
            2: (date:Date)=>padNumber(date.getMonth() + 1, 2),
            1: (date:Date)=>date.getMonth() + 1
        },
        d: {
            2: (date:Date)=>padNumber(date.getDate(), 2),
            1: (date:Date)=>date.getDate()
        },
        H: {
            2: (date:Date)=>padNumber(date.getHours(), 2),
            1: (date:Date)=>date.getHours()
        },
        h: {
            2: (date:Date)=>padNumber(ampm(date.getHours()), 2),
            1: (date:Date)=>ampm(date.getHours())
        },
        m: {
            2: (date:Date)=>padNumber(date.getMinutes(), 2),
            1: (date:Date)=>date.getMinutes()
        },
        s: {
            3: (date:Date)=>padNumber(date.getMilliseconds(), 3),
            2: (date:Date)=>padNumber(date.getSeconds(), 2),
            1: (date:Date)=>date.getSeconds()
        },
        E: {
            4: (date:Date)=>lang.DATETIME_FORMATS.DAY[date.getDay()],
            3: (date:Date)=>lang.DATETIME_FORMATS.SHORTDAY[date.getDay()]
        },
        a: {
            1: ampmGetter
        },
        Z: {
            1: timeZoneGetter
        },
        w: {
            2: (date:Date)=>padNumber(weekGetter(date), 2),
            1: weekGetter
        }
    };

    export function dateFilter(date:Date, format?:string, timezone?:string) {
        format = format || 'mediumDate';
        format = (<any>lang.DATETIME_FORMATS)[format] || format;
        var text = '';
        var start = -1;
        var stringState = false;
        var sym = '';

        if (timezone && timezone === 'UTC') {
            date = new Date(date.getTime());
            date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
        }

        for (var i = 0, len = format.length; i < len; i++) {
            var s = format[i];
            if (s === "'") {
                stringState = !stringState;
                continue;
            }
            if (!stringState && (s == 'y' || s == 'M' || s == 'd' || s == 'H' || s == 'h' || s == 'm' || s == 's' || s == 'a' || s == 'Z' || s == 'E' || s == 'w')) {
                if (start > -1 && s !== sym){
                    var fn = DATE_FORMATS[sym][i - start];
                    text += fn ? fn(date) : '?';
                    start = i;
                    sym = s;
                }
                if (start === -1) {
                    start = i;
                    sym = s;
                }
            }
            else {
                if (start > -1) {
                    var fn = DATE_FORMATS[sym][i - start];
                    text += fn ? fn(date) : '?';
                    start = -1;
                    sym = '';
                }
                text += s;
            }
        }
        if (start > -1) {
            var fn = DATE_FORMATS[sym][i - start];
            text += fn ? fn(date) : '?';
        }
        return text;
    }
}