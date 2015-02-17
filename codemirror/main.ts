///<reference path="codemirror.d.ts"/>

// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

interface State {
    cur: any;
    newLine: boolean;
}

interface Stream extends CodeMirror.StringStream {
    started: boolean;
}

CodeMirror.defineMode("diff", function () {
    function failFirstLine(stream:CodeMirror.StringStream, state:State) {
        stream.skipToEnd();
        state.cur = header;
        return "error";
    }

    function start(stream:CodeMirror.StringStream, state:State) {
        if (stream.match(/^HTTP\/\d\.\d/)) {
            state.cur = responseStatusCode;
            return "keyword";
        } else if (stream.match(/^[A-Z]+/) && /[ \t]/.test(stream.peek())) {
            state.cur = requestPath;
            return "keyword";
        } else {
            return failFirstLine(stream, state);
        }
    }

    function responseStatusCode(stream:CodeMirror.StringStream, state:State) {
        var code = stream.match(/^\d+/);
        if (!code) {
            return failFirstLine(stream, state);
        }

        state.cur = responseStatusText;
        var status = Number(code[0]);
        if (status >= 100 && status < 200) {
            return "positive informational";
        } else if (status >= 200 && status < 300) {
            return "positive success";
        } else if (status >= 300 && status < 400) {
            return "positive redirect";
        } else if (status >= 400 && status < 500) {
            return "negative client-error";
        } else if (status >= 500 && status < 600) {
            return "negative server-error";
        } else {
            return "error";
        }
    }

    function responseStatusText(stream:CodeMirror.StringStream, state:State):any {
        stream.skipToEnd();
        state.cur = header;
        return null;
    }

    function requestPath(stream:CodeMirror.StringStream, state:State) {
        stream.eatWhile(/\S/);
        state.cur = requestProtocol;
        return "string-2";
    }

    function requestProtocol(stream:CodeMirror.StringStream, state:State) {
        if (stream.match(/^HTTP\/\d\.\d$/)) {
            state.cur = header;
            return "keyword";
        } else {
            return failFirstLine(stream, state);
        }
    }

    function header(stream:CodeMirror.StringStream) {
        //console.log(stream);
        stream.skipToEnd();
        return 'string';

        if (stream.sol() && !stream.eat(/[ \t]/)) {
            if (stream.match(/^.*?:/)) {
                return "atom";
            } else {
                stream.skipToEnd();
                return "error";
            }
        } else {
            stream.skipToEnd();
            return "string";
        }
    }

    function body(stream:CodeMirror.StringStream):any {
        stream.skipToEnd();
        return null;
    }

    return {
        token: function (stream:Stream, state:State) {
            if (stream.sol() && state.newLine) {
                stream.started = true;
                state.newLine = false;
            }
            if (stream.sol() && stream.match(/^~?\d+:\d+:/)) {
                return 'hr';
            }

            if (stream.sol() && stream.match(/[=\-#]+/)) {
                stream.skipToEnd();
                return 'string-2';
            }

            if (stream.sol() && stream.match(/\/\//)) {
                console.log("comment");

                stream.skipToEnd();
                return 'comment';
            }

            if (stream.started && stream.match(/@/)) {
                //console.log("SDFASFDSSDAF");

                stream.skipToEnd();
                return 'string';
            }

            //console.log(stream, state);
            //stream.skipToEnd();
            stream.next();
            return "";

            var cur = state.cur;
            if (cur != header && cur != body && stream.eatSpace()) {
                return null;
            }
            return cur(stream, state);
        },

        blankLine: function (state:State) {
            state.newLine = true;
            state.cur = header;
        },

        startState: function () {
            console.log("Start State");

            return {cur: start};
        }
    };
});

CodeMirror.defineMIME("text/x-diff", "diff");
