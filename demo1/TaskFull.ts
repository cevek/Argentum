module wrike {
    export class TaskFull implements Arg.Component {
        constructor(attrs:Arg.Attrs, private task:Atom<Task>) {
        }

        setComplete() {
            this.task.get().completed = !this.task.get().completed;
        }

        render() {

            return Arg.dom('div.full-task', null, [
                Arg.dom('div.id', null, 'ID: ', ()=>this.task.get().id),
                Arg.dom('div.summary', null, 'Summary: ', ()=>this.task.get().summary),
                Arg.dom('div.description', null, 'Description: ', ()=>this.task.get().description),
                Arg.dom('label', null,
                    Arg.dom('input', {
                        type: "checkbox",
                        checked: new Atom(()=>this.task.get().completed),
                        onclick: ()=>this.setComplete()
                    }),
                    ()=>this.task.get().completed ? 'Completed' : 'Complete'
                ),
                Arg.mapRaw(this.task.get().subtasks, subtask=>
                    new TaskItem(null, new Atom(this, {value: new TaskVM(subtask)}), this.task))
            ])
        }

    }
}



