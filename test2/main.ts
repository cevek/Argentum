interface Function {
    displayName:string;
}

interface BoxListener {
    ():void;
}
class Box<T> {
    constructor(private value:T, private owner?:any, private name?:string) {
        if (!owner || !name){
            throw "owner or name is not defined";
        }
    }

    listen(listener:BoxListener) {
        this.owner.listeners__ = this.owner.listeners__ || [];
        this.owner.listeners__.push({callback: listener, name: this.name});
    }
}

class Folder {
    id:number;
    title:string;
    color:string;
}

class Task {
    id:number;
    title:string;

    constructor() {

    }

    parentFolders:Folder[];
}

class Collection<T> {

}



var a = new Task;

new Box(a.title).listen(()=> {
    console.log("title changed");
});

var Tasks = new Collection<Task>();

function __observableGet(value:any, owner:Object, name:string, symbol:number) {
    return value;
}

var __observableMessages:{owner: any; name: string; oldValue: any;}[];
function __observableSet(oldValue:any, owner:Object, name:string, symbol:number, newValue:any) {
    if (!__observableMessages) {
        __observableMessages = [];
        postMessage('digestbox', '*');
    }
    __observableMessages.push({owner: owner, name: name, oldValue: oldValue});
    return newValue;
}
__observableSet.displayName = 'setter';
function digest(e:{data: string}) {
    if (!e || e.data === 'digestbox') {
        var messages = __observableMessages.slice();
        __observableMessages = null;
        for (var i = 0; i < messages.length; i++) {
            var message = messages[i];
            var listeners = message.owner.listeners__;
            if (listeners) {
                var newVal = message.owner[message.name];
                if (message.oldValue !== newVal) {
                    for (var j = 0; j < listeners.length; j++) {
                        var listener = listeners[j];
                        if (listener.name === message.name) {
                            listener.callback(newVal);
                        }
                    }
                }
            }

        }
    }
}
window.addEventListener('message', digest);

console.time('perf');
for (var i = 0; i < 100000; i++) {
    //a.title = 'Hey';
}
console.timeEnd('perf');




