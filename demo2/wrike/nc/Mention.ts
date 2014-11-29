/// <reference path="nc.ts"/>
module wrike {
    export module nc {
        export class Mention extends NCItem {
            task:Task;
            from:User;
        }
    }
}
