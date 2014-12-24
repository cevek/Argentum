module Arg {
    export interface IDatePicker {

    }
    export class DatePicker implements Component {
        value = new Atom<Date>(this, {name: 'value'});
        inputTree:TreeItem;
        formatter = new Atom<string>(this, {
            name: 'formatter',

            //value: 'whowhow',
            getter: (oldVal)=> {
                var val = this.value.get();
                console.log("formatter", val);
                if (val && isFinite(val.getTime())) {
                    if (this.inputTree) {
                        (<HTMLInputElement>this.inputTree.node).setCustomValidity('');
                    }
                    return ('0' + val.getDate()).substr(-2) + '.' + ('0' + (val.getMonth() + 1)).substr(-2) + '.' + val.getFullYear();
                }
                if (this.inputTree) {
                    (<HTMLInputElement>this.inputTree.node).setCustomValidity('Invalid date');
                }
                return oldVal;
            }
        });

        constructor(private params:IDatePicker, private attrs:Attrs = {}) {

        }

        onChange(e:Event) {
            var input = <HTMLInputElement>e.target;
            var value = input.value.trim().replace(/[^\d]+/g, '/');
            value = value.replace(/^(\d{1,2})\/(\d{1,2})\//, '$2/$1/');
            var date = new Date(value);
            console.log("onchange", value, date);

            this.formatter.set(input.value);
            if (value.length > 5 && isFinite(date.getTime()) && date.getFullYear() > 999 && date.getFullYear() < 3000) {
                this.value.set(date);
            }
            else {
                this.value.setNull();
            }
        }

        render() {
            return root('',
                new DatePickerCalendar(),
                this.inputTree = dom('input', {
                    type: 'text',
                    value: this.formatter,
                    required: true,
                    oninput: (e:Event)=>this.onChange(e)
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