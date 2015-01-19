module ag {
    export function formatNumber(num:number, fractionSize?:number, patternIndex = 0) {
        var formats = lang.NUMBER_FORMATS;
        var pattern = formats.PATTERNS[patternIndex],
            groupSep = formats.GROUP_SEP,
            decimalSep = formats.DECIMAL_SEP;

        var isNegative = num < 0;
        num = Math.abs(num);

        var isInfinity = num === Infinity;
        if (!isInfinity && !isFinite(num)) {
            return '';
        }

        var numStr = num + '',
            formatedText = '',
            hasExponent = false;

        if (isInfinity) {
            formatedText = '\u221e';
        }

        if (!isInfinity && !hasExponent) {
            var fractionLen = (numStr.split(lang.NUMBER_FORMATS.DECIMAL_SEP)[1] || '').length;

            if (fractionSize === void 0) {
                fractionSize = Math.min(Math.max(pattern.minFrac, fractionLen), pattern.maxFrac);
            }
            var d = Math.pow(10, fractionSize);
            num = Math.floor(num * d) / d;
            var fractions = ('' + num).split(lang.NUMBER_FORMATS.DECIMAL_SEP);
            var whole = fractions[0];
            var fraction = fractions[1] || '';

            var i = 0, pos = 0,
                lgroup = pattern.lgSize,
                group = pattern.gSize;

            if (whole.length >= (lgroup + group)) {
                pos = whole.length - lgroup;
                for (i = 0; i < pos; i++) {
                    if ((pos - i) % group === 0 && i !== 0) {
                        formatedText += groupSep;
                    }
                    formatedText += whole.charAt(i);
                }
            }

            for (i = pos; i < whole.length; i++) {
                if ((whole.length - i) % lgroup === 0 && i !== 0) {
                    formatedText += groupSep;
                }
                formatedText += whole.charAt(i);
            }

            // format fraction part.
            while (fraction.length < fractionSize) {
                fraction += '0';
            }

            if (fractionSize) {
                formatedText += decimalSep + fraction.substr(0, fractionSize);
            }
        } else {
            if (fractionSize > 0 && num < 1) {
                formatedText = num.toFixed(fractionSize);
                num = parseFloat(formatedText);
            }
        }

        if (num === 0) {
            isNegative = false;
        }

        return (isNegative ? pattern.negPre : pattern.posPre) +
            formatedText + (isNegative ? pattern.negSuf : pattern.posSuf);
    }
}
