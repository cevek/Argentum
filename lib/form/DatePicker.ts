module Arg {
    export interface IDatePicker {
        model: Atom<Date>;
    }
    export class DatePicker implements Component {
        inputTree:TreeItem;
        inputNode:HTMLInputElement;

        constructor(private params:IDatePicker, private attrs:Attrs = {}) {}

        parser() {
            var value = this.inputNode.value.trim().replace(/[^\d]+/g, '/');
            value = value.replace(/^(\d{1,2})\/(\d{1,2})\//, '$2/$1/');
            var has3digitBlocks = value.match(/(\d{1,4})\/(\d{1,2})\/(\d{1,4})/);
            var date = new Date(value);
            console.log("onchange", value, date);

            if (value.length > 5 && has3digitBlocks && isFinite(date.getTime()) && date.getFullYear() > 999 && date.getFullYear() < 3000) {
                this.inputNode.setCustomValidity('');
                this.params.model.set(date);
            }
            else {
                this.params.model.setNull();
                this.inputNode.setCustomValidity('Invalid date');
            }
        }

        formatter() {
            var val = this.params.model.get();
            console.log("formatter", val);
            if (val && isFinite(val.getTime())) {
                this.inputNode.value = ('0' + val.getDate()).substr(-2) + '.' + ('0' + (val.getMonth() + 1)).substr(-2) + '.' + val.getFullYear();
            }
        }

        updateInput() {
            if (this.inputNode !== document.activeElement) {
                this.formatter();
            }
        }

        componentDidMount() {
            this.inputNode = <HTMLInputElement>this.inputTree.node;
            this.updateInput();
            this.params.model.addListener(this.updateInput, null, null, null, this);
        }

        render() {
            return root('',
                new DatePickerCalendar(),
                this.inputTree = dom('input', {
                    type: 'text',
                    required: true,
                    oninput: ()=>this.parser(),
                    onblur: ()=>this.updateInput()
                })
            );
        }
    }

    class DayItem {

    }

    class DatePickerCalendar implements Component {
        $weeks:any[] = [];
        $days:Date[][] = [];
        activeMonth = new Date().getMonth();
        activeYear = new Date().getFullYear();

        getMonday() {
            var d = new Date(this.activeYear, this.activeMonth, 1);
            var day = d.getDay(), diff = d.getDate() - day + (day == 0 ? -6 : 1);
            return new Date(d.setDate(diff));
        }

        calc() {
            var start = this.getMonday();
            for (var j = 0; j < 42; j++) {
                var week = j / 7 | 0;
                this.$days[week] = this.$days[week] || [];
                this.$days[week].push(new Date(start.getTime() + j * (24 * 60 * 60 * 1000)));
            }
        }

        constructor() {
            this.calc();
        }

        move(pos:number) {

        }

        render() {
            return dom('div.calendar',
                dom('.controls',
                    dom('a.left', {onclick: ()=>this.move(-1)}, '<'),
                    dom('a.current', {onclick: ()=>this.move(0)}, '.'),
                    dom('a.right', {onclick: ()=>this.move(1)}, '>')),
                mapRaw(this.$days, (week)=>
                    dom('div.week',
                        mapRaw(week, day=>
                            dom('span.day', day.getDate()))))
            );
        }
    }
}