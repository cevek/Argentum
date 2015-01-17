module ag {
    export module locale {
        export enum PLURAL_CATEGORY {ZERO, ONE, TWO, FEW, MANY, OTHER}
        export interface ILocale {
            id: string;
            DATETIME_FORMATS: IDATETIME_FORMATS;
            NUMBER_FORMATS: INUMBER_FORMATS;
            texts?: any;
            plural(n:number, opt_precision:number):PLURAL_CATEGORY;
        }

        export function getDecimals(nn:number) {
            var n = nn + '';
            var i = n.indexOf('.');
            return (i == -1) ? 0 : n.length - i - 1;
        }

        export function getVF(n:number, opt_precision?:number) {
            var v = opt_precision;

            if (undefined === v) {
                v = Math.min(getDecimals(n), 3);
            }

            var base = Math.pow(10, v);
            var f = ((n * base) | 0) % base;
            return {v: v, f: f};
        }

        interface IDATETIME_FORMATS {
            AMPMS: string[];
            DAY: string[];
            MONTH: string[];
            SHORTDAY: string[];
            SHORTMONTH: string[];
            fullDate: string;
            longDate: string;
            medium: string;
            mediumDate: string;
            mediumTime: string;
            short: string;
            shortDate: string;
            shortTime: string;
        }

        interface INUMBER_FORMATS {
            CURRENCY_SYM: string;
            DECIMAL_SEP: string;
            GROUP_SEP: string;
            PATTERNS: IPATTERNS[];
        }

        interface IPATTERNS {
            "gSize": number;
            "lgSize": number;
            "maxFrac": number;
            "minFrac": number;
            "minInt": number;
            "negPre": string;
            "negSuf": string;
            "posPre": string;
            "posSuf": string;
        }

    }

    /*
        // ru version
        export interface IPlural {
            one: string;
            few: string;
            many: string;
            other: string;
        }
    */
    export interface IPlural {
        //one?: string;
        //two?: string;
        //few?: string;
        //many?: string;
        //other?: string;
        //zero?: string;
        [type: string]: string;
    }

    export var defaultLang = new locale.EN();
    export interface IPlural {
        one: string;
        other: string;
    }

    export var lang = defaultLang;

    export var texts:any = {
        'Friend': 'Друг',
        'Hello, my dear {}! Yeah {} man!': 'Привет, мой дорогой {}! Да {} чувак!',
        'one {} layer': {
            ru: {
                0: 'Никого из игроков',
                one: '{} игрок',
                few: '{} игрока',
                many: '{} игроков',
                other: '{} игроков'
            }
        }
    };

    export function i18n(str:string, ...args:any[]) {
        var sttr = str;
        if (defaultLang !== lang) {
            if (texts && texts[str]) {
                sttr = texts[str];
            }
            else {
                console.error('i18n:', str);
            }
        }
        var children:any[] = [];
        var splits = sttr.split('{}');
        for (var i = 0; i < splits.length; i++) {
            children.push(splits[i]);
            if (args[i] !== void 0) {
                children.push(args[i]);
            }
        }
        return d('i18n', children);
    }

    export function plural(obj:IPlural, count:any):any {
        if (count instanceof Atom) {
            var atom:Atom<number> = count;
            return new Atom(atom.owner, () => plural(obj, atom.get()), {name: 'plural'});
        }

        var pluralCat:string;
        if (obj[count]) {
            pluralCat = count;
        }
        else {
            pluralCat = locale.PLURAL_CATEGORY[lang.plural(count)].toLowerCase();
        }

        var str = obj[pluralCat];
        if (defaultLang !== lang) {
            if (texts && texts[obj.one] && texts[obj.one][lang.id] && texts[obj.one][lang.id][pluralCat]) {
                str = texts[obj.one][lang.id][pluralCat];
            }
            else {
                console.error('plural:', obj, pluralCat);
            }
        }
        var children:any[] = [];
        var splits = str.split('{}');
        for (var i = 0; i < splits.length; i++) {
            children.push(splits[i]);
            if (i < splits.length - 1) {
                children.push(count);
            }
        }
        return d('i18nplural', children);
    }

}
