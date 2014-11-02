module wrike {
    export function TaskItemTemplate(vm:TaskItem) {
        return Arg.dom('div.task', {
                onclick: ()=>vm.clickTask(),
                classSet: {
                    active: ()=>vm.activeTask.get() === vm.task.get().task,
                    completed: ()=> vm.task.get().task.completed
                },
                style: {
                    //height: ()=>this.task.get().height,
                    top: ()=>vm.task.get().top
                }
            },
            Arg.dom('div.summary', null, v=>vm.task.get().task.summary)
        );
    }
}
