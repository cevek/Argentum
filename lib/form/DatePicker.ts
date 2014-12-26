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
                this.inputNode.setCustomValidity(value.length ? 'Invalid date' : '');
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

    export class DatePickerCalendar implements Component {
        private days = new Atom<Date[][]>(this, this.calc);
        private activeMonth = new Atom<number>(this, new Date().getMonth());
        private activeYear = new Atom<number>(this, new Date().getFullYear());
        private currentDay = DatePickerCalendar.getDayInt(new Date());
        private firstDayOfMonth = new Atom<Date>(this, DatePickerCalendar.getMonday(new Date()));


        static getDayInt(date:Date) {
            return date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate();
        }

        static getMonday(date:Date) {
            var weekDay = date.getDay();
            var diff = date.getDate() - weekDay + (weekDay == 0 ? -6 : 1);
            return new Date(date.setDate(diff));
        }

        calc() {
            var days:Date[][] = [];
            var start = DatePickerCalendar.getMonday(new Date(this.activeYear.get(), this.activeMonth.get(), 1));
            for (var j = 0; j < 42; j++) {
                var week = j / 7 | 0;
                days[week] = days[week] || [];
                days[week].push(new Date(start.getTime() + j * (24 * 60 * 60 * 1000)));
            }
            return days;
        }

        constructor() {
        }

        move(pos:number) {
            if (pos === 1 || pos === -1) {
                this.activeMonth.set(this.activeMonth.get() + pos);
            }
            if (pos === 0) {
                this.activeMonth.set(new Date().getMonth());
            }
            this.firstDayOfMonth.set(new Date(this.activeYear.get(), this.activeMonth.get(), 1));
            //this.calc();
        }

        render() {
            return dom('div.calendar',
                dom('.controls',
                    dom('a.left', {onclick: ()=>this.move(-1)}, '<'),
                    dom('a.current', {onclick: ()=>this.move(0)}, '.'),
                    dom('a.right', {onclick: ()=>this.move(1)}, '>')),
                map(this.days, (week)=>
                    dom('div.week',
                        mapRaw(week, day=>
                            dom('span.day', {
                                    classSet: {
                                        'current': this.currentDay === DatePickerCalendar.getDayInt(day),
                                        'current-month': ()=>this.firstDayOfMonth.get().getMonth() === day.getMonth()
                                    }
                                },
                                day.getDate()))))
            );
        }
    }
}