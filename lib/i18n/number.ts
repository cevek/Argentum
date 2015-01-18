module ag {

    export function numberFilter(num:number, fractionSize?:number) {
        var formats = lang.NUMBER_FORMATS;

        // if null or undefined pass it through
        return (num == null)
            ? num
            : locale.formatNumber(num, formats.PATTERNS[0], formats.GROUP_SEP, formats.DECIMAL_SEP,
            fractionSize);
    }

    export module locale {

        export function formatNumber(num:number,
                                     pattern:locale.IPATTERNS,
                                     groupSep:string,
                                     decimalSep:string,
                                     fractionSize:number) {
            var isNegative = num < 0;
            num = Math.abs(num);

            var isInfinity = num === Infinity;
            if (!isInfinity && !isFinite(num)) {
                return '';
            }

            var numStr = num + '',
                formatedText = '',
                hasExponent = false,
                parts:string[] = [];

            if (isInfinity) {
                formatedText = '\u221e';
            }

            if (!isInfinity && numStr.indexOf('e') !== -1) {
                var match = numStr.match(/([\d\.]+)e(-?)(\d+)/);
                if (match && match[2] == '-' && +match[3] > fractionSize + 1) {
                    num = 0;
                } else {
                    formatedText = numStr;
                    hasExponent = true;
                }
            }

            if (!isInfinity && !hasExponent) {
                var fractionLen = (numStr.split(lang.NUMBER_FORMATS.DECIMAL_SEP)[1] || '').length;

                // determine fractionSize if it is not specified
                if (fractionSize === void 0) {
                    fractionSize = Math.min(Math.max(pattern.minFrac, fractionLen), pattern.maxFrac);
                }

                // safely round numbers in JS without hitting imprecisions of floating-point arithmetics
                // inspired by:
                // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
                num = +(Math.round(+(num.toString() + 'e' + fractionSize)).toString() + 'e' + -fractionSize);

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

                if (fractionSize && fractionSize !== 0) {
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

            parts.push(isNegative ? pattern.negPre : pattern.posPre,
                formatedText,
                isNegative ? pattern.negSuf : pattern.posSuf);
            return parts.join('');
        }

        export function padNumber(num:number, digits?:number, trim?:boolean) {
            var neg = '';
            if (num < 0) {
                neg = '-';
                num = -num;
            }
            var nums = '' + num;
            while (nums.length < digits) nums = '0' + nums;
            if (trim) {
                nums = nums.substr(nums.length - digits);
            }
            return neg + nums;
        }
    }
}
