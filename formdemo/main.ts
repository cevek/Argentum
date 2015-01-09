/// <reference path="../lib/Argentum.ts"/>
//Atom.debugMode = false;
class User {
    name:string;
}
var glob:any = {};
class TestForm implements ag.Component {
    input = new Atom(this, {value: 'input'});
    checkbox = new Atom(this, {value: 'yes'});
    required = new Atom(this, {value: true});
    multiple = new Atom(this, {value: true});

    options = [{name: 'No1'}, {name: 'No2'}, {name: 'No3'}, {name: 'No4'}];
    //select = new Atom<User[]>(this, {name: 'select', value: []});
    select = new Atom<User[]>(this, {value: [this.options[2]]});
    date = new Atom<Date>(this, {value: new Date()});

    picker = new Atom<ag.TreeItem>(this);

    componentDidMount() {
        glob.picker = this.picker.get().component;
    }

    render() {
        var condItem = {name: "Condition"};
        //this.select.set(options);
        return ag.root('',
            ag.dom('form', {onsubmit: ()=>false},
                new ag.DatePicker({model: this.date}, {self: this.picker}),
                new ag.Checkbox({label: "Click me", value: 'yes', model: this.checkbox}),
                new ag.Checkbox({label: "Multiple", value: true, model: this.multiple}),
                new ag.Checkbox({label: "Required", value: true, model: this.required}),
                new ag.InputGroup({label: "My Text", model: this.input, required: true}),
                new ag.SelectGroup({
                        label: 'select',
                        modelMultiple: this.select,
                        multiple: this.multiple,
                        required: this.required
                    },
                    null,
                    ag.dom('option', {argDefault: true}, 'None'),
                    ag.dom('optgroup', {label: 'Lbl'},
                        ()=>this.checkbox.get() ?
                            ag.dom('option', {argValue: condItem}, condItem.name) : null,

                        ag.mapRaw(this.options, option =>
                            ag.dom('option', {argValue: option}, option.name))
                    )
                ),
                ag.map(this.select, item=>ag.dom('div', item.name)),
                this.input,
                ag.dom('button', {type: 'button', onclick: ()=>this.select.set([])}, 'clear'),
                ag.dom('button', 'Send')
            )
            /*
             this.checkbox,
             ()=>this.checkbox.get() ? d('div', 'Fuck') : d('div', 'Man'),
             this.input
             */
        );
    }
}

class Bench implements ag.Component {

    atoms:Atom<number>[] = [];

    click() {
        var start = Math.random() * 1000 | 0;
        for (var i = 0; i < 10000; i++) {
            this.atoms[i].set(start + i);
        }
        //console.profile('click');
        console.time('click');
        setTimeout(function () {
            console.timeEnd('click');
            //console.profileEnd('click');
        });
    }

    render() {
        var rows:number[] = [];
        for (var i = 0; i < 10000; i++) {
            rows[i] = i;
            this.atoms[i] = new Atom<number>(this);
        }
        return ag.root('',
            ag.dom('button', {onclick: ()=>this.click()}, 'click'),
            ag.dom('ul', {style: {display: 'none'}},
                ag.mapRaw(rows, (row, i)=>ag.dom('li', 'item ' + row + ' ', this.atoms[i]))))
    }
}

Atom.debugMode = false;
var testForm = new TestForm();
var dom = ag.publicRender(document.body, testForm);

/*
var bench = new Bench();
console.time('perf');
var dom = ag.publicRender(document.body, bench);
console.timeEnd('perf');*/
