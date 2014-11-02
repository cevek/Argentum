/// <reference path="all.ts"/>
/// <reference path="TaskItemTemplate.ts"/>

module wrike {
    export class TaskItem extends Component {
        constructor(public attrs:any, public task:ATaskVM, public activeTask:ATask) {
            super(attrs);
        }

        clickTask() {
            this.activeTask.set(this.task.get().task);
        }

        template() {
            return TaskItemTemplate(this);
        }
    }
}





