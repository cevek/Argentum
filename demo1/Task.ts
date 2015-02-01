module wrike {

    export class TaskVM {
        height = 0;
        top = 0;

        constructor(public task:Task) {}
    }
    export class Task {
        id:number;
        summary:string;
        description:string;
        assignee:User = null;
        subtasks = new List<Task>();
        comments:Comment[] = [];
        completed:boolean = false;

        constructor(obj:any = {}) {
            this.id = obj.id;
            this.summary = obj.summary;
            this.description = obj.description;
        }
    }
}



