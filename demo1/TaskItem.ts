/// <reference path="TaskItemTemplate.ts"/>

module wrike {
    export class TaskItem implements ag.Component {
        constructor(public attrs:ag.Attrs, public task:Atom<TaskVM>, public activeTask:Atom<Task>) {
        }

        clickTask() {
            this.activeTask.set(this.task.get().task);
        }

        render() {
            return TaskItemTemplate(this);
        }
    }
}





