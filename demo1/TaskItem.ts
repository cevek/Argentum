/// <reference path="all.ts"/>
module wrike {
    export class TaskItem extends Component {

        constructor(private attrs:any, private task:ATaskVM, private activeTask:ATask) {
            super(attrs);
        }

        clickTask() {
            this.activeTask.set(this.task.get().task);
        }

        template() {
            return Arg.dom('div.task', {
                    onclick: this.clickTask.bind(this),
                    classSet: {
                        active: ()=>this.activeTask.get() === this.task.get().task,
                        completed: ()=>{console.dir(arguments.callee); return this.task.get().task.completed}
                    },
                    style: {
                        //height: ()=>this.task.get().height,
                        top: ()=>this.task.get().top
                    }
                },
                //Arg.$('div.id', null, ()=>this.task.get().id),
                Arg.dom('div.summary', null, ()=>this.task.get().task.summary)
                //Arg.$('div.description', null, ()=>this.task.get().description),
                /*
                 Arg.$('div.subtasks', null,
                 Arg.map<Task>(this.task.get().subtasks, task=>
                 new TaskItemView(null, new Arg.Atomic<Task>(task)))),
                 */

                /*
                 Arg.$('div.comments', null,
                 Arg.map<Comment>(this.task.get().comments, comment=>
                 Arg.$('div.comment', null, comment.author)))
                 */
            );
        }
    }
}





