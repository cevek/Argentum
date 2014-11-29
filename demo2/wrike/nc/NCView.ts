/// <reference path="nc.ts"/>
module wrike {
    export module nc {
        export enum NCTabs{
            Marketing,
            Inbox
        }
        export class NCView {
            static activeType:NCTabs;
        }
    }
}