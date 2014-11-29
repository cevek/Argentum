/// <reference path="nc.ts"/>
module wrike {
    export module nc {
        export class InboxView {
            items:Inbox[] = [new Inbox()];

            render() {
                return InboxViewTemplate(this);
            }

        }
    }
}