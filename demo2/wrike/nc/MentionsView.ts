/// <reference path="nc.ts"/>
module wrike {
    export module nc {
        export class MentionsView {
            items = new Atom<Mention[]>();
            message = new Atom<boolean>(null, null, true);

            constructor() {
                glob.mentions = this.items;
                console.log(glob);

                this.items.set([new Mention(), new Mention()]);
                setInterval(() => {
                    this.items.get().sort(()=>Math.random() - 0.5);
                    this.message.set(Math.random() > 0.5);
                }, 1000);
            }

            render() {
                return MentionsViewTemplate(this);

            }
        }
    }
}