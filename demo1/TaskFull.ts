module wrike {
    export class TaskFull implements ag.Component {
        constructor(attrs:ag.Attrs, private task:Atom<Task>) {
        }

        setComplete() {
            this.task.get().completed = !this.task.get().completed;
        }

        render() {

            return ag.dom('div.full-task', null, [
                ag.dom('div.id', null, 'ID: ', ()=>this.task.get().id),
                ag.dom('div.summary', null, 'Summary: ', ()=>this.task.get().summary),
                ag.dom('div.description', null, 'Description: ', ()=>this.task.get().description),
                ag.dom('label', null,
                    ag.dom('input', {
                        type: "checkbox",
                        checked: new Atom(()=>this.task.get().completed),
                        onclick: ()=>this.setComplete()
                    }),
                    ()=>this.task.get().completed ? 'Completed' : 'Complete'
                ),
                ag.map(this.task.get().subtasks, subtask=>
                    new TaskItem(null, new Atom(new TaskVM(subtask)), this.task))
            ])
        }

    }
}



