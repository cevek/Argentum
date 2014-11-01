/// <reference path="all.ts"/>
module wrike {

    export class ATaskVM extends Arg.Atomic<TaskVM> {}
    export class TaskVM {
        height = 0;
        top = 0;

        constructor(public task:Task) {}
    }
    export class ATask extends Arg.Atomic<Task> {}
    export class Task {
        id:number;
        summary:string;
        description:string;
        assignee:User = null;
        subtasks:Task[] = [];
        comments:Comment[] = [];
        completed:boolean = Arg.observable;

        constructor(obj:any = {}) {
            this.id = obj.id;
            this.summary = obj.summary;
            this.description = obj.description;
        }
        static atomized = Arg.Atomizer(Task);
    }
}



