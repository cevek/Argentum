/// <reference path="nc.ts"/>
module wrike {
    export module nc {
        export class Inbox {
            marketing = new Atom<Marketing>();
            assigment:Assigment = new Assigment();
            priority:number = 1;

            constructor() {
                setInterval(()=> {
                    this.marketing.set(Math.random() > 0.5 ? new Marketing() : null);
                }, 1000)
            }
        }
    }
}
