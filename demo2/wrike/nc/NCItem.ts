/// <reference path="nc.ts"/>
module wrike {
    export module nc {
        export class NCItem {
            id:number = 1;
            isRead = new Atom<boolean>(null, null, true);
            isPinned = new Atom<boolean>(null, null, true);

            constructor() {
                setInterval(()=> {
                    this.isRead.val = Math.random() > 0.5;
                }, Math.random() * 1000);
                setInterval(()=> {
                    this.isPinned.val = Math.random() > 0.5;
                }, Math.random() * 1000);
            }
        }
    }
}
