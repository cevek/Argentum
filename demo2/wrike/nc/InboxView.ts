/// <reference path="nc.ts"/>
module wrike {
    export module nc {
        export class InboxView implements Arg.Component{
            items:Inbox[] = [new Inbox()];


            componentWillUnmount(){
                //console.log("InboxView unmount");
            }

            render() {
                return InboxViewTemplate(this);
            }

        }
    }
}