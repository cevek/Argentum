module ag {
    enum PLURAL_CATEGORY {ZERO, ONE, TWO, FEW, MANY, OTHER}
    interface Lang {
        plural(n:number, opt_precision:number): PLURAL_CATEGORY;
    }
    class EN implements Lang {
        name = "en";
        plurals = [PLURAL_CATEGORY.ONE, PLURAL_CATEGORY.OTHER];

        getDecimals(nn:number) {
            var n = nn + '';
            var i = n.indexOf('.');
            return (i == -1) ? 0 : n.length - i - 1;
        }

        getVF(n:number, opt_precision?:number) {
            var v = opt_precision;

            if (undefined === v) {
                v = Math.min(this.getDecimals(n), 3);
            }

            var base = Math.pow(10, v);
            var f = ((n * base) | 0) % base;
            return {v: v, f: f};
        }

        plural(n:number, opt_precision?:number) {
            var i = n | 0;
            var vf = this.getVF(n, opt_precision);
            if (i == 1 && vf.v == 0) {
                return PLURAL_CATEGORY.ONE;
            }
            return PLURAL_CATEGORY.OTHER;
        }
    }
    var lang = new EN();

    export function i18n(str:string, ...args:any[]) {
        if (str) {
            var children:any[] = [];
            var splits = str.split('{}');
            for (var i = 0; i < splits.length; i++) {
                children.push(splits[i]);
                if (args[i] !== void 0) {
                    children.push(args[i]);
                }
            }
            console.log("plural", children);
            return d('i18n', children);
        }
    }

    export interface IPlural {
        one?: string;
        two?: string;
        few?: string;
        many?: string;
        other?: string;
        zero?: string;
        [type: string]: string;
    }

    export function plural(obj:IPlural, count:any, ...args:any[]):any {
        if (count instanceof Atom) {
            var atom:Atom<number> = count;
            return new Atom(atom.owner, () => {
                return plural.apply(null, [obj, atom.get()].concat(args))
            }, {name: 'plural'});
        }

        var doestExistsCats:string[] = [];
        for (var i = 0; i < lang.plurals.length; i++) {
            var pluralCat = PLURAL_CATEGORY[lang.plurals[i]].toLowerCase();
            if (obj[pluralCat] === void 0) {
                doestExistsCats.push(pluralCat);
            }
        }
        if (doestExistsCats.length) {
            console.error("Plural categories doesn't exists:", doestExistsCats.join());
        }

        if (obj[count]) {
            return i18n.apply(null, [obj[count]].concat(args));
        }
        else {
            switch (lang.plural(count)) {
                case PLURAL_CATEGORY.ONE:
                    return i18n.apply(null, [obj.one].concat(args));
                case PLURAL_CATEGORY.TWO:
                    return i18n.apply(null, [obj.two].concat(args));
                case PLURAL_CATEGORY.FEW:
                    return i18n.apply(null, [obj.few].concat(args));
                case PLURAL_CATEGORY.MANY:
                    return i18n.apply(null, [obj.many].concat(args));
                case PLURAL_CATEGORY.OTHER:
                    return i18n.apply(null, [obj.other].concat(args));
                case PLURAL_CATEGORY.ZERO:
                    return i18n.apply(null, [obj.zero].concat(args));
            }
        }
    }
}
