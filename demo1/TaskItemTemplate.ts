module wrike {
	export function TaskItemTemplate(vm:TaskItem){ return (
		Arg.dom('div', {'class': 'task',
		                'arg-style-top': v=>vm.task.get().top,
		                'arg-class-active': v=>vm.activeTask.get() === vm.task.get().task,
		                'arg-class-completed': v=>vm.task.get().task.completed,
		                'onclick': v=>vm.clickTask()}, [
			Arg.dom('div', {'class': 'summary'}, [
				v=>vm.task.get().task.summary,
				Arg.dom('span', {}, [
					'hello'])])])
	)}
}
