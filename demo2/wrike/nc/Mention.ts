/// <reference path="nc.ts"/>
module wrike {
    export module nc {
        export class Mention extends NCItem {
            task:Task = new Task();
            from:User = new User();
        }
    }
}
