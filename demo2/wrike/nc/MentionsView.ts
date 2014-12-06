/// <reference path="nc.ts"/>
module wrike {
    export module nc {
        export class MentionsView {
            items = new Atom<Mention[]>();
            message = new Atom<boolean>(null, null, true);

            constructor() {
                glob.mentions = this.items;
                console.log(glob);
                var items:Mention[] = [];
                for (var i = 0; i < 2000; i++) {
                    items[i] = new Mention();
                }
                this.items.set(items);
/*                setInterval(() => {
                    this.items.get().sort(()=>Math.random() - 0.5);
                    this.message.set(Math.random() > 0.5);
                }, 1000);*/
            }

            render() {
                return MentionsViewTemplate(this);

            }
        }
    }
}