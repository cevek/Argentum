module wrike {
    export class TaskList implements ag.Component {
        private visibleTaskAtoms:Atom<TaskVM>[] = [];
        private reUseItemsCount = 20;
        private allDur = 0;
        private allDurLen = 0;
        allHeight = new Atom(0);

        constructor(attrs:ag.Attrs, private tasks:TaskVM[], private activeTask?:Atom<Task>) {
            for (var i = 0; i < this.reUseItemsCount; i++) {
                this.visibleTaskAtoms[i] = new Atom<TaskVM>(this);
            }

            var h = 0;
            for (var i = 0; i < tasks.length; i++) {
                h += 40;
            }
            this.allHeight.set(h);

            this.onScroll(null);
        }

        onScroll(e:UIEvent) {
            var scrollTop = 0;
            if (e) {
                scrollTop = e.srcElement.scrollTop;
            }

            var k = scrollTop / 40 | 0;

            var start = performance.now();
            for (var i = 0; i < this.reUseItemsCount; i++) {
                var task = this.tasks[k + i];
                //task.height = Math.random() * 100 | 0;
                task.top = (k + i) * 40;
                this.visibleTaskAtoms[i].set(task);
            }
            console.log(performance.now() - start);
        }

        render() {
            return ag.dom('div.tasklist', {onscroll: this.onScroll.bind(this)},
                ag.dom('div.wrapper', {style: {height: ()=>this.allHeight.get()}},
                    ag.mapRaw(this.visibleTaskAtoms, taskAtom=>
                        new TaskItem(null, taskAtom, this.activeTask))))
        }
    }
}





