module Arg {
    export interface IWhenCallback {
        (): ITreeItem;
    }

    export interface ITreeItem {
        whenCondition?:Atom<any[]>;
        whenCallback?: IWhenCallback;
    }

    export function wheeen(condition:any, callback:()=>any, negative?:()=>any):ITreeItem {
        if (condition.constructor !== Atom) {
            condition = new Atom<any>(null, null, condition);
        }
/*        var _callback = ()=>convertToTree(callback());
        if (negative) {
            var _negative = ()=>convertToTree(negative());
        }*/
        return convertToTree(new Atom(()=>condition.get() ? callback() : negative && negative()));
    }
}