/// <reference path="nc.ts"/>
module wrike {
    export module nc {
        export class NCItem {
            id:number = 1;
            isRead = new Atom<boolean>(null, null, true);
            isPinned = new Atom<boolean>(null, null, true);

            constructor() {
/*                setInterval(()=> {
                    this.isRead.set(Math.random() > 0.5);
                }, 800);
                setInterval(()=> {
                    this.isPinned.set(Math.random() > 0.5);
                }, 900);*/
            }
        }
    }
}
