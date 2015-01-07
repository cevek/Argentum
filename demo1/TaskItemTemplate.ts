module wrike {
	export function TaskItemTemplate(vm:TaskItem){ return (
		Arg.dom('div', {'class': 'task',
		                'arg-style-top': ()=>vm.task.get().top,
		                'arg-class-active': ()=>vm.activeTask.get() === vm.task.get().task,
		                'arg-class-completed': ()=>vm.task.get().task.completed,
		                'onclick': ()=>vm.clickTask()}, [
			Arg.dom('div', {'class': 'summary'}, [
				()=>vm.task.get().task.summary,
				Arg.dom('span', {}, [
					'hello'])])])
	)}
}
