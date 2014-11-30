/// <reference path="nc.ts"/>
module wrike {
    export module nc {
        export class NCTabs{
            static Mentions = 'mentions';
            static Inbox = 'inbox';
        }
        export class NCView implements Arg.Component {
            static activeType = new Atom<NCTabs>(null, null, NCTabs.Inbox);

            render() {
                return NCViewTemplate(this);
            }
        }
    }
}