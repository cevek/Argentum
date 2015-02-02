module ag {
    export interface IDatePicker {
        model: Atom<Date>;
        attrs?: Attrs;
    }

    export function datepicker(params:IDatePicker) {return new DatePicker(params)}
    class DatePicker implements Component {
        inputTree = new Atom<TreeItem>();
        calendar = new Atom<TreeItem>();
        focused = new Atom(false);

        constructor(private params:IDatePicker) {}

        parser() {
            var node = <HTMLInputElement>this.inputTree.get().node;
            var value = node.value.trim().replace(/[^\d]+/g, '/');
            value = value.replace(/^(\d{1,2})\/(\d{1,2})\//, '$2/$1/');
            var has3DigitBlocks = value.match(/(\d{1,4})\/(\d{1,2})\/(\d{1,4})/);
            //var year4Digit = has3DigitBlocks && (has3DigitBlocks[1].length == 2 || has3DigitBlocks[1].length == 4);
            var date = new Date(value);
            //console.log("parser", value, date, has3DigitBlocks);

            if (value.length > 5 && has3DigitBlocks && isFinite(date.getTime()) && date.getFullYear() >= 1000 && date.getFullYear() < 3000) {
                this.params.model.set(date);
            }
            else {
                this.params.model.set(new Date("invalid"));
            }
        }

        formatter(setEmptyIfInvalid = false) {
            var node = <HTMLInputElement>this.inputTree.get().node;

            var val = this.params.model.get();
            //console.log("formatter", val);
            if (val && isFinite(val.getTime())) {
                node.value = ('0' + val.getDate()).substr(-2) + '/' + ('0' + (val.getMonth() + 1)).substr(-2) + '/' + val.getFullYear();
            }
            else if (setEmptyIfInvalid) {
                node.value = '';
            }
        }

        closeCallback = (e:Event)=> {
            var calendar = this.calendar.get();
            if (calendar && calendar.node && e.target !== this.inputTree.get().node && !DOM.hasInParents(<Node>e.target, calendar.node)) {
                this.focused.set(false);
            }
        };

        componentDidMount() {
            this.modelChanged(this.params.model.get());
            this.params.model.addListener(this.modelChanged, this);
            document.addEventListener('mousedown', this.closeCallback);
        }

        componentWillUnmount() {
            document.removeEventListener('mousedown', this.closeCallback);
        }

        modelChanged(dt:Date, isBlurEvent = false) {
            var node = <HTMLInputElement>this.inputTree.get().node;
            //console.log("model changed");

            if (dt) {
                if (isFinite(dt.getTime())) {
                    node.setCustomValidity('');
                }
                else {
                    node.setCustomValidity('Invalid date');
                }
            }
            else {
                node.setCustomValidity('');
            }

            if (node !== document.activeElement) {
                this.formatter(!isBlurEvent);
            }
        }

        render() {
            return root('', this.params.attrs,
                d('input', {
                    self: this.inputTree,
                    type: 'text',
                    required: true,
                    oninput: ()=>this.parser(),
                    onfocus: ()=>this.focused.set(true),
                    onblur: ()=>this.modelChanged(this.params.model.get(), true)
                }),
                //new DatePickerCalendar(this.params.model),

                when(this.focused,
                    ()=>new DatePickerCalendar(this.params.model, {self: this.calendar, animation: 'animation'}))
            );
        }
    }

    export class DatePickerCalendar implements Component {
        domNode:HTMLElement;
        static id = 0;
        id = ++DatePickerCalendar.id;

        static months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        static weeks = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
        static weekOrder = new List([1, 2, 3, 4, 5, 6, 0]);

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

        private firstDayOfMonth = new Atom<Date>();
        private days = new ListFormula<Date[]>(this, this.calcDays);

        calcDays() {
            var days = new List<Date[]>();
            var start = DatePickerCalendar.getMonday(this.firstDayOfMonth.get());
            //console.log("calc", start);

            for (var j = 0; j < 42; j++) {
                var week = j / 7 | 0;
                days.put(week, days[week] || []);
                days[week].push(new Date(start.getTime() + j * (24 * 60 * 60 * 1000)));
            }
            return days;
        }

        constructor(private model:Atom<Date>, private attrs:Attrs = {}) {
            //console.log("DateCalendar created", this);
            //this.model = model.proxy(this);

            this.modelChanged();
            //this.model.addListener2(this, this.modelChanged);
            this.model.addListener(this.modelChanged, this);
        }

        modelChanged() {
            var dt = this.model.get();
            if (dt && isFinite(dt.getTime())) {
                var dd = new Date(dt.getFullYear(), dt.getMonth(), 1);
            }
            else {
                dd = new Date(new Date().getFullYear(), new Date().getMonth(), 1)
            }
            this.firstDayOfMonth.set(dd);
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
            this.firstDayOfMonth.set(nDt);
        }

        click(day:Date) {
            console.log("click", day, this);

            this.model.set(day);
        }

        render() {
            return root(this.attrs,
                div('.header',
                    div('.month-year',
                        ()=>DatePickerCalendar.months[this.firstDayOfMonth.get().getMonth()],
                        " ",
                        ()=>this.firstDayOfMonth.get().getFullYear()),

                    dom('.controls',
                        dom('a.left', {onclick: ()=>this.move(-1)}, '<'),
                        dom('a.current', {onclick: ()=>this.move(0)}, '.'),
                        dom('a.right', {onclick: ()=>this.move(1)}, '>'))
                ),
                dom('div.week-names',
                    map(DatePickerCalendar.weekOrder, (p)=>
                        dom('.day.week-name', DatePickerCalendar.weeks[p]))),

                map(this.days, (week)=>
                    div('.week',
                        map(week, day=>
                            span('.day', {
                                    classSet: {
                                        'current': this.currentDay === DatePickerCalendar.getDayInt(day),
                                        'current-month': this.firstDayOfMonth.get().getMonth() === day.getMonth(),
                                        'active': this.model.get() && DatePickerCalendar.getDayInt(this.model.get()) == DatePickerCalendar.getDayInt(day)
                                    },
                                    onclick: ()=>this.click(day)

                                },
                                day.getDate()))))
            );
        }
    }
}
