module ag {
    function d(tag:string, args:any) {
        var start = 0;
        if (typeof args[start] === 'string') {
            tag += args[start];
            start++;
        }
        if (args[start].constructor === Object) {
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

    export function a(...args:any[]) {return d('a', args)}

    export function abbr(...args:any[]) {return d('abbr', args)}

    export function address(...args:any[]) {return d('address', args)}

    export function area(...args:any[]) {return d('area', args)}

    export function article(...args:any[]) {return d('article', args)}

    export function aside(...args:any[]) {return d('aside', args)}

    export function audio(...args:any[]) {return d('audio', args)}

    export function b(...args:any[]) {return d('b', args)}

    export function base(...args:any[]) {return d('base', args)}

    export function bdi(...args:any[]) {return d('bdi', args)}

    export function bdo(...args:any[]) {return d('bdo', args)}

    export function big(...args:any[]) {return d('big', args)}

    export function blockquote(...args:any[]) {return d('blockquote', args)}

    export function body(...args:any[]) {return d('body', args)}

    export function br(...args:any[]) {return d('br', args)}

    export function button(...args:any[]) {return d('button', args)}

    export function canvas(...args:any[]) {return d('canvas', args)}

    export function caption(...args:any[]) {return d('caption', args)}

    export function cite(...args:any[]) {return d('cite', args)}

    export function code(...args:any[]) {return d('code', args)}

    export function col(...args:any[]) {return d('col', args)}

    export function colgroup(...args:any[]) {return d('colgroup', args)}

    export function data(...args:any[]) {return d('data', args)}

    export function datalist(...args:any[]) {return d('datalist', args)}

    export function dd(...args:any[]) {return d('dd', args)}

    export function del(...args:any[]) {return d('del', args)}

    export function details(...args:any[]) {return d('details', args)}

    export function dfn(...args:any[]) {return d('dfn', args)}

    export function dialog(...args:any[]) {return d('dialog', args)}

    export function div(...args:any[]) {return d('div', args)}

    export function dl(...args:any[]) {return d('dl', args)}

    export function dt(...args:any[]) {return d('dt', args)}

    export function em(...args:any[]) {return d('em', args)}

    export function embed(...args:any[]) {return d('embed', args)}

    export function fieldset(...args:any[]) {return d('fieldset', args)}

    export function figcaption(...args:any[]) {return d('figcaption', args)}

    export function figure(...args:any[]) {return d('figure', args)}

    export function footer(...args:any[]) {return d('footer', args)}

    export function form(...args:any[]) {return d('form', args)}

    export function h1(...args:any[]) {return d('h1', args)}

    export function h2(...args:any[]) {return d('h2', args)}

    export function h3(...args:any[]) {return d('h3', args)}

    export function h4(...args:any[]) {return d('h4', args)}

    export function h5(...args:any[]) {return d('h5', args)}

    export function h6(...args:any[]) {return d('h6', args)}

    export function head(...args:any[]) {return d('head', args)}

    export function header(...args:any[]) {return d('header', args)}

    export function hr(...args:any[]) {return d('hr', args)}

    export function html(...args:any[]) {return d('html', args)}

    export function i(...args:any[]) {return d('i', args)}

    export function iframe(...args:any[]) {return d('iframe', args)}

    export function img(...args:any[]) {return d('img', args)}

    export function input(...args:any[]) {return d('input', args)}

    export function ins(...args:any[]) {return d('ins', args)}

    export function kbd(...args:any[]) {return d('kbd', args)}

    export function keygen(...args:any[]) {return d('keygen', args)}

    export function label(...args:any[]) {return d('label', args)}

    export function legend(...args:any[]) {return d('legend', args)}

    export function li(...args:any[]) {return d('li', args)}

    export function link(...args:any[]) {return d('link', args)}

    export function main(...args:any[]) {return d('main', args)}

    export function mark(...args:any[]) {return d('mark', args)}

    export function menu(...args:any[]) {return d('menu', args)}

    export function menuitem(...args:any[]) {return d('menuitem', args)}

    export function meta(...args:any[]) {return d('meta', args)}

    export function meter(...args:any[]) {return d('meter', args)}

    export function nav(...args:any[]) {return d('nav', args)}

    export function noscript(...args:any[]) {return d('noscript', args)}

    export function object(...args:any[]) {return d('object', args)}

    export function ol(...args:any[]) {return d('ol', args)}

    export function optgroup(...args:any[]) {return d('optgroup', args)}

    export function option(...args:any[]) {return d('option', args)}

    export function output(...args:any[]) {return d('output', args)}

    export function p(...args:any[]) {return d('p', args)}

    export function param(...args:any[]) {return d('param', args)}

    export function picture(...args:any[]) {return d('picture', args)}

    export function pre(...args:any[]) {return d('pre', args)}

    export function progress(...args:any[]) {return d('progress', args)}

    export function q(...args:any[]) {return d('q', args)}

    export function rp(...args:any[]) {return d('rp', args)}

    export function rt(...args:any[]) {return d('rt', args)}

    export function ruby(...args:any[]) {return d('ruby', args)}

    export function s(...args:any[]) {return d('s', args)}

    export function samp(...args:any[]) {return d('samp', args)}

    export function script(...args:any[]) {return d('script', args)}

    export function section(...args:any[]) {return d('section', args)}

    export function select(...args:any[]) {return d('select', args)}

    export function small(...args:any[]) {return d('small', args)}

    export function source(...args:any[]) {return d('source', args)}

    export function span(...args:any[]) {return d('span', args)}

    export function strong(...args:any[]) {return d('strong', args)}

    export function style(...args:any[]) {return d('style', args)}

    export function sub(...args:any[]) {return d('sub', args)}

    export function summary(...args:any[]) {return d('summary', args)}

    export function sup(...args:any[]) {return d('sup', args)}

    export function table(...args:any[]) {return d('table', args)}

    export function tbody(...args:any[]) {return d('tbody', args)}

    export function td(...args:any[]) {return d('td', args)}

    export function textarea(...args:any[]) {return d('textarea', args)}

    export function tfoot(...args:any[]) {return d('tfoot', args)}

    export function th(...args:any[]) {return d('th', args)}

    export function thead(...args:any[]) {return d('thead', args)}

    export function time(...args:any[]) {return d('time', args)}

    export function title(...args:any[]) {return d('title', args)}

    export function tr(...args:any[]) {return d('tr', args)}

    export function track(...args:any[]) {return d('track', args)}

    export function u(...args:any[]) {return d('u', args)}

    export function ul(...args:any[]) {return d('ul', args)}

    export function video(...args:any[]) {return d('video', args)}

    export function wbr(...args:any[]) {return d('wbr', args)}
}