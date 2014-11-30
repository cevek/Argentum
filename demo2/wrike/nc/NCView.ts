/// <reference path="nc.ts"/>
module wrike {
    export module nc {
        export enum NCTabs{
            Marketing,
            Inbox
        }
        export class NCView implements Arg.Component {
            static activeType = new Atom<NCTabs>();

            render() {
                return NCViewTemplate(this);
            }
        }
    }
}