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
            var has3DigitBlocks = value.match(/(\d{1,4})\/(\d{1,2})\/(\d{1,4})/);
            var date = new Date(value);
            console.log("onchange", value, date);

            if (value.length > 5 && has3DigitBlocks && isFinite(date.getTime()) && date.getFullYear() > 999 && date.getFullYear() < 3000) {
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
                this.inputNode.setCustomValidity('');
            }
        }

        componentDidMount() {
            this.inputNode = <HTMLInputElement>this.inputTree.node;
            this.updateInput();
            this.params.model.addListener(this.updateInput, null, null, null, this);
        }

        render() {
            return root('',
                new DatePickerCalendar(this.params.model),
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
        private firstDayOfMonth = new Atom<Date>(this, new Date(new Date().getFullYear(), new Date().getMonth(), 1));

        private currentDay = DatePickerCalendar.getDayInt(new Date());

        static getDayInt(date:Date) {
            return date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate();
        }

        static getMonday(dt:Date) {
            var date = new Date(dt.getTime());
            var weekDay = date.getDay();
            var diff = date.getDate() - weekDay + (weekDay == 0 ? -6 : 1);
            return new Date(date.setDate(diff));
        }

        private days = new Atom<Date[][]>(this, this.calc);

        calc() {
            var days:Date[][] = [];
            var start = DatePickerCalendar.getMonday(this.firstDayOfMonth.get());
            console.log(start);

            for (var j = 0; j < 42; j++) {
                var week = j / 7 | 0;
                days[week] = days[week] || [];
                days[week].push(new Date(start.getTime() + j * (24 * 60 * 60 * 1000)));
            }
            return days;
        }

        constructor(private model:Atom<Date>) {
        }

        move(pos:number) {
            var dt = this.firstDayOfMonth.get();
            var nDt = new Date(dt.getTime());
            if (pos === 1 || pos === -1) {
                nDt.setMonth(dt.getMonth() + pos);
            }
            if (pos === 0) {
                nDt = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
            }
            console.log("move", dt, nDt);
            this.firstDayOfMonth.set(nDt);
        }

        click(day: Date){
            this.model.set(day);
        }

        render() {
            return root('',
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
                                        'current-month': ()=>this.firstDayOfMonth.get().getMonth() === day.getMonth(),
                                        'active': ()=>this.model.get() && DatePickerCalendar.getDayInt(this.model.get()) == DatePickerCalendar.getDayInt(day)
                                    },
                                    onclick: ()=>this.click(day)

                                },
                                day.getDate()))))
            );
        }
    }
}