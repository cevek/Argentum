module ag{
    export function currencyFilter(amount:number, currencySymbol?:string, fractionSize?:number) {
        var formats = lang.NUMBER_FORMATS;
        if (currencySymbol === void 0) {
            currencySymbol = formats.CURRENCY_SYM;
        }

        if (fractionSize === void 0) {
            fractionSize = formats.PATTERNS[1].maxFrac;
        }

        // if null or undefined pass it through
        return (amount == null)
            ? amount
            : locale.formatNumber(amount, formats.PATTERNS[1], formats.GROUP_SEP, formats.DECIMAL_SEP, fractionSize).
            replace(/\u00A4/g, currencySymbol);
    }
}