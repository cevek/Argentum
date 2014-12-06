/// <reference path="nc.ts"/>
module wrike {
    export module nc {
        export class NCTabs {
            static Mentions = 'mentions';
            static Inbox = 'inbox';
        }
        export class NCView implements Arg.Component {
            static activeType = new Atom<NCTabs>(null, null, NCTabs.Mentions);
            interval: number;
            start(){
                this.interval = setInterval(function () {
                    NCView.activeType.isEqual(NCTabs.Inbox)
                        ? NCView.activeType.set(NCTabs.Mentions)
                        : NCView.activeType.set(NCTabs.Inbox);
                }, 300);
            }

            stop(){
                clearInterval(this.interval);
            }

            constructor() {
            }

            render() {
                return NCViewTemplate(this);
            }
        }
    }
}