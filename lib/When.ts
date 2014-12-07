module Arg {
    export interface IWhenCallback {
        (): TreeItem;
    }


    export function wheeen(condition:any, callback:()=>any, negative?:()=>any):TreeItem {
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