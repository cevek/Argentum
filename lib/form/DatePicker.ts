module Arg {
    export interface IDatePicker {

    }
    export class DatePicker implements Component {
        constructor(private params:IDatePicker, private attrs:Attrs = {}) {

        }

        render() {
            return root('',
                new DatePickerCalendar(),
                dom('input', {type: 'text'})
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

        move(pos: number) {

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