/// <reference path="all.ts"/>
module wrike {
    export class TaskList extends Component {
        private visibleTaskAtoms:ATaskVM[] = [];
        private reUseItemsCount = 20;
        private allDur = 0;
        private allDurLen = 0;
        allHeight = new Arg.Atomic(0);

        constructor(attrs:IAttrs, private tasks:TaskVM[], private activeTask?:ATask) {
            super(attrs);
            for (var i = 0; i < this.reUseItemsCount; i++) {
                this.visibleTaskAtoms[i] = new ATaskVM();
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

        template() {
            return Arg.dom('div.tasklist', {onscroll: this.onScroll.bind(this)},
                Arg.dom('div.wrapper', {style: {height: ()=>this.allHeight.get()}},
                    Arg.map(this.visibleTaskAtoms, taskAtom=>
                        new TaskItem(null, taskAtom, this.activeTask))))
        }
    }
}





