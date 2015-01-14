module ag {
    export function d(...args:any[]) {
        return _d('', args);
    }

    function _d(tag:string, args:any) {
        var start = 0;
        if (typeof args[start] === 'string') {
            tag += args[start];
            start++;
        }
        if (args[start] && args[start].constructor === Object) {
            var attrs = args[start];
            start++;
        }

        var children = flattenArray(args, start);

        var treeItem = new TreeItem({
            type: TreeType.TAG,
            children: children
        });

        treeItem.attrs = attrs || {};
        parseTagExpr(tag, treeItem);
        return treeItem;
    }

    export function root(...args:any[]) {return _d('root', args)}

    export function a(...args:any[]) {return _d('a', args)}

    export function abbr(...args:any[]) {return _d('abbr', args)}

    export function address(...args:any[]) {return _d('address', args)}

    export function area(...args:any[]) {return _d('area', args)}

    export function article(...args:any[]) {return _d('article', args)}

    export function aside(...args:any[]) {return _d('aside', args)}

    export function audio(...args:any[]) {return _d('audio', args)}

    export function b(...args:any[]) {return _d('b', args)}

    export function base(...args:any[]) {return _d('base', args)}

    export function bdi(...args:any[]) {return _d('bdi', args)}

    export function bdo(...args:any[]) {return _d('bdo', args)}

    export function big(...args:any[]) {return _d('big', args)}

    export function blockquote(...args:any[]) {return _d('blockquote', args)}

    export function body(...args:any[]) {return _d('body', args)}

    export function br(...args:any[]) {return _d('br', args)}

    export function button(...args:any[]) {return _d('button', args)}

    export function canvas(...args:any[]) {return _d('canvas', args)}

    export function caption(...args:any[]) {return _d('caption', args)}

    export function cite(...args:any[]) {return _d('cite', args)}

    export function code(...args:any[]) {return _d('code', args)}

    export function col(...args:any[]) {return _d('col', args)}

    export function colgroup(...args:any[]) {return _d('colgroup', args)}

    export function data(...args:any[]) {return _d('data', args)}

    export function datalist(...args:any[]) {return _d('datalist', args)}

    export function dd(...args:any[]) {return _d('dd', args)}

    export function del(...args:any[]) {return _d('del', args)}

    export function details(...args:any[]) {return _d('details', args)}

    export function dfn(...args:any[]) {return _d('dfn', args)}

    export function dialog(...args:any[]) {return _d('dialog', args)}

    export function div(...args:any[]) {return _d('div', args)}

    export function dl(...args:any[]) {return _d('dl', args)}

    export function dt(...args:any[]) {return _d('dt', args)}

    export function em(...args:any[]) {return _d('em', args)}

    export function embed(...args:any[]) {return _d('embed', args)}

    export function fieldset(...args:any[]) {return _d('fieldset', args)}

    export function figcaption(...args:any[]) {return _d('figcaption', args)}

    export function figure(...args:any[]) {return _d('figure', args)}

    export function footer(...args:any[]) {return _d('footer', args)}

    export function form(...args:any[]) {return _d('form', args)}

    export function h1(...args:any[]) {return _d('h1', args)}

    export function h2(...args:any[]) {return _d('h2', args)}

    export function h3(...args:any[]) {return _d('h3', args)}

    export function h4(...args:any[]) {return _d('h4', args)}

    export function h5(...args:any[]) {return _d('h5', args)}

    export function h6(...args:any[]) {return _d('h6', args)}

    export function head(...args:any[]) {return _d('head', args)}

    export function header(...args:any[]) {return _d('header', args)}

    export function hr(...args:any[]) {return _d('hr', args)}

    export function html(...args:any[]) {return _d('html', args)}

    export function i(...args:any[]) {return _d('i', args)}

    export function iframe(...args:any[]) {return _d('iframe', args)}

    export function img(...args:any[]) {return _d('img', args)}

    export function input(...args:any[]) {return _d('input', args)}

    export function ins(...args:any[]) {return _d('ins', args)}

    export function kbd(...args:any[]) {return _d('kbd', args)}

    export function keygen(...args:any[]) {return _d('keygen', args)}

    export function label(...args:any[]) {return _d('label', args)}

    export function legend(...args:any[]) {return _d('legend', args)}

    export function li(...args:any[]) {return _d('li', args)}

    export function link(...args:any[]) {return _d('link', args)}

    export function main(...args:any[]) {return _d('main', args)}

    export function mark(...args:any[]) {return _d('mark', args)}

    export function menu(...args:any[]) {return _d('menu', args)}

    export function menuitem(...args:any[]) {return _d('menuitem', args)}

    export function meta(...args:any[]) {return _d('meta', args)}

    export function meter(...args:any[]) {return _d('meter', args)}

    export function nav(...args:any[]) {return _d('nav', args)}

    export function noscript(...args:any[]) {return _d('noscript', args)}

    export function object(...args:any[]) {return _d('object', args)}

    export function ol(...args:any[]) {return _d('ol', args)}

    export function optgroup(...args:any[]) {return _d('optgroup', args)}

    export function option(...args:any[]) {return _d('option', args)}

    export function output(...args:any[]) {return _d('output', args)}

    export function p(...args:any[]) {return _d('p', args)}

    export function param(...args:any[]) {return _d('param', args)}

    export function picture(...args:any[]) {return _d('picture', args)}

    export function pre(...args:any[]) {return _d('pre', args)}

    export function progress(...args:any[]) {return _d('progress', args)}

    export function q(...args:any[]) {return _d('q', args)}

    export function rp(...args:any[]) {return _d('rp', args)}

    export function rt(...args:any[]) {return _d('rt', args)}

    export function ruby(...args:any[]) {return _d('ruby', args)}

    export function s(...args:any[]) {return _d('s', args)}

    export function samp(...args:any[]) {return _d('samp', args)}

    export function script(...args:any[]) {return _d('script', args)}

    export function section(...args:any[]) {return _d('section', args)}

    export function small(...args:any[]) {return _d('small', args)}

    export function source(...args:any[]) {return _d('source', args)}

    export function span(...args:any[]) {return _d('span', args)}

    export function strong(...args:any[]) {return _d('strong', args)}

    export function style(...args:any[]) {return _d('style', args)}

    export function sub(...args:any[]) {return _d('sub', args)}

    export function summary(...args:any[]) {return _d('summary', args)}

    export function sup(...args:any[]) {return _d('sup', args)}

    export function table(...args:any[]) {return _d('table', args)}

    export function tbody(...args:any[]) {return _d('tbody', args)}

    export function td(...args:any[]) {return _d('td', args)}

    export function textarea(...args:any[]) {return _d('textarea', args)}

    export function tfoot(...args:any[]) {return _d('tfoot', args)}

    export function th(...args:any[]) {return _d('th', args)}

    export function thead(...args:any[]) {return _d('thead', args)}

    export function time(...args:any[]) {return _d('time', args)}

    export function title(...args:any[]) {return _d('title', args)}

    export function tr(...args:any[]) {return _d('tr', args)}

    export function track(...args:any[]) {return _d('track', args)}

    export function u(...args:any[]) {return _d('u', args)}

    export function ul(...args:any[]) {return _d('ul', args)}

    export function video(...args:any[]) {return _d('video', args)}

    export function wbr(...args:any[]) {return _d('wbr', args)}
}