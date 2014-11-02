var fs = require("fs");
var htmlparser = require("htmlparser");
var util = require('util');


var fileName = 'TaskItemTemplate.html';
var fileNameTS = fileName.replace('.html', '.ts');
var _deep = 0;
function deep(d) {
    var s = "";
    if (!d)
        d = 0;
    _deep += d;
    for (var i = 0; i < _deep; i++) {
        s += '\t';
    }
    return s;
}

var content = '';
function parseNameSpace(data) {
    var namespace = data.attribs.name.split(".");
    var vmName = data.attribs.vm;
    var fnName = namespace.pop();
    deep(-1);
    for (var i = 0; i < namespace.length; i++) {
        var m = namespace[i];
        content += deep(1) + 'module ' + m + ' {\n';
    }
    content += deep(1) + 'export function ' + fnName + '(vm:' + vmName + '){ return (';
    //deep(1);
    parseHTML(data.children);
    content += "\n" + deep() + ')}\n';
    for (var i = 0; i < namespace.length; i++) {
        content += deep(-1) + '}\n';
    }
}

function repeat(s, times) {
    var res = '';
    for (var i = 0; i < times; i++) {
        res += s;
    }
    return res;
}

function toCamelCase(s) {
    var words = s.split('-');
    var res = '';
    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        if (i == 0)
            res += word;
        else
            res += word[0].toUpperCase() + word.slice(1);
    }
    return res;
}
function parseTag(data) {

    var startS = "Arg.dom('" + data.name + "', ";
    var attrs = '{';
    var len = 0;
    for (var i in data.attribs) {
        len++;
        var attr = data.attribs[i];
        //i = toCamelCase(i);
        /*if (i == 'class') {
         i = 'class-name';
         }*/

        if (!(i.substr(0, 4) != 'arg-' && attr.substr(0, 2) != '{{')) {
            attr = 'v=>' + attr.replace(/(\{\{|\}\})/g, '') + '';
        } else {
            attr = "'" + attr + "'";
        }
        if (len > 1) {
            attrs += deep() + repeat(' ', startS.length + 1);
        }
        attrs += "'" + i + "': " + attr + ',\n';
    }
    if (len > 0) {
        attrs = attrs.substr(0, attrs.length - 2);
    }
    attrs += '}';
    content += "\n" + deep() + startS + attrs + ", [";
    //deep(1);
    parseHTML(data.children);
    //deep(-1);
    if (content.substr(-1) == ',')
        content = content.substr(0, content.length-1)
    content += "])";
}

function parseText(data) {
    if (data.data.trim()) {
        var d = data.data.trim();
        if (d.indexOf('{{') > -1) {
            d = d.replace('{{', 'v=>');
            d = d.replace('}}', '');
        }
        else {
            d = "'" + d + "'";
        }
        content += "\n" + deep() + d + ",";
    }
}

function parseHTML(data) {
    if (data.constructor == Array) {
        for (var i = 0; i < data.length; i++) {
            parseHTML(data[i]);
        }
        return;
    }
    if (data.type == 'text') {
        deep(1);
        parseText(data);
        deep(-1);
    }
    if (data.type == "tag") {
        if (data.name == 'template') {
            parseNameSpace(data);
        }
        else if (true) {
            deep(1);
            parseTag(data);
            deep(-1);
        }

        console.log("tag", data.name);
        if (data.attribs) {
            for (var i in  data.attribs) {
                console.log("Attr", i, data.attribs[i]);

            }
        }
    }
}

var handler = new htmlparser.DefaultHandler(function (error, dom) {
    console.log(util.inspect(dom, {showHidden: true, depth: null}));
    parseHTML(dom);
    console.log(content);
    fs.writeFileSync(fileNameTS, content);

});
var parser = new htmlparser.Parser(handler);
parser.parseComplete(fs.readFileSync(fileName));