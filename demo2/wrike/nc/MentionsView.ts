/// <reference path="nc.ts"/>
module wrike {
    export module nc {
        export class MentionsView {
            items = new Atom<Mention[]>();

            constructor() {
                glob.mentions = this.items;
                console.log(glob);

                this.items.val = [new Mention(), new Mention()];
                setInterval(() => {
                    this.items.val.sort(()=>Math.random() - 0.5);
                }, 15000);
            }

            render() {
                return MentionsViewTemplate(this);

            }
        }
    }
}