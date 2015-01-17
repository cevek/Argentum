module ag.locale {
    export class RU implements ILocale {
        "DATETIME_FORMATS" = {
            "AMPMS": ["AM", "PM"],
            "DAY": ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
            "MONTH": ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"],
            "SHORTDAY": ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
            "SHORTMONTH": ["янв.", "февр.", "марта", "апр.", "мая", "июня", "июля", "авг.", "сент.", "окт.", "нояб.", "дек."],
            "fullDate": "EEEE, d MMMM y 'г'.",
            "longDate": "d MMMM y 'г'.",
            "medium": "d MMM y 'г'. H:mm:ss",
            "mediumDate": "d MMM y 'г'.",
            "mediumTime": "H:mm:ss",
            "short": "dd.MM.yy H:mm",
            "shortDate": "dd.MM.yy",
            "shortTime": "H:mm"
        };
        "NUMBER_FORMATS" = {
            "CURRENCY_SYM": "руб.",
            "DECIMAL_SEP": ",",
            "GROUP_SEP": " ",
            "PATTERNS": [{
                "gSize": 3,
                "lgSize": 3,
                "maxFrac": 3,
                "minFrac": 0,
                "minInt": 1,
                "negPre": "-",
                "negSuf": "",
                "posPre": "",
                "posSuf": ""
            }, {
                "gSize": 3,
                "lgSize": 3,
                "maxFrac": 2,
                "minFrac": 2,
                "minInt": 1,
                "negPre": "-",
                "negSuf": " ¤",
                "posPre": "",
                "posSuf": " ¤"
            }]
        };
        "id" = "ru";

        plural(n:number, opt_precision?:number) {
            var i = n | 0;
            var vf = getVF(n, opt_precision);
            if (vf.v == 0 && i % 10 == 1 && i % 100 != 11) { return PLURAL_CATEGORY.ONE; }
            if (vf.v == 0 && i % 10 >= 2 && i % 10 <= 4 && (i % 100 < 12 || i % 100 > 14)) { return PLURAL_CATEGORY.FEW; }
            if (vf.v == 0 && i % 10 == 0 || vf.v == 0 && i % 10 >= 5 && i % 10 <= 9 || vf.v == 0 && i % 100 >= 11 && i % 100 <= 14) { return PLURAL_CATEGORY.MANY; }
            return PLURAL_CATEGORY.OTHER;
        }
    }
}