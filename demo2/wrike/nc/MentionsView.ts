/// <reference path="nc.ts"/>
module wrike {
    export module nc {
        export class MentionsView {
            items: Mention[] = [new Mention(), new Mention()];
            render(){
                return MentionsViewTemplate(this);
            }
        }
    }
}