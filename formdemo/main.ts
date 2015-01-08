/// <reference path="../lib/Argentum.ts"/>
//Atom.debugMode = false;
class User {
    name:string;
}
var glob:any = {};
class TestForm implements Arg.Component {
    input = new Atom(this, {value: 'input'});
    checkbox = new Atom(this, {value: 'yes'});
    required = new Atom(this, {value: true});
    multiple = new Atom(this, {value: true});

    options = [{name: 'No1'}, {name: 'No2'}, {name: 'No3'}, {name: 'No4'}];
    //select = new Atom<User[]>(this, {name: 'select', value: []});
    select = new Atom<User[]>(this, {value: [this.options[2]]});
    date = new Atom<Date>(this, {value: new Date()});

    picker = new Atom<Arg.TreeItem>(this);

    componentDidMount() {
        glob.picker = this.picker.get().component;
    }

    render() {
        var condItem = {name: "Condition"};
        //this.select.set(options);
        return Arg.root('',
            d('form', {onsubmit: ()=>false},
                new Arg.DatePicker({model: this.date}, {self: this.picker}),
                new Arg.Checkbox({label: "Click me", value: 'yes', model: this.checkbox}),
                new Arg.Checkbox({label: "Multiple", value: true, model: this.multiple}),
                new Arg.Checkbox({label: "Required", value: true, model: this.required}),
                new Arg.InputGroup({label: "My Text", model: this.input, required: true}),
                new Arg.SelectGroup({
                        label: 'select',
                        modelMultiple: this.select,
                        multiple: this.multiple,
                        required: this.required
                    },
                    null,
                    d('option', {argDefault: true}, 'None'),
                    d('optgroup', {label: 'Lbl'},
                        ()=>this.checkbox.get() ?
                            d('option', {argValue: condItem}, condItem.name) : null,

                        Arg.mapRaw(this.options, option =>
                            d('option', {argValue: option}, option.name))
                    )
                ),
                Arg.map(this.select, item=>d('div', item.name)),
                this.input,
                d('button', {type: 'button', onclick: ()=>this.select.set([])}, 'clear'),
                d('button', 'Send')
            )
            /*
             this.checkbox,
             ()=>this.checkbox.get() ? d('div', 'Fuck') : d('div', 'Man'),
             this.input
             */
        );
    }
}

class Bench implements Arg.Component {

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
        return Arg.root('',
            Arg.dom('button', {onclick: ()=>this.click()}, 'click'),
            Arg.dom('ul', {style: {display: 'none'}},
                Arg.mapRaw(rows, (row, i)=>Arg.dom('li', 'item ' + row + ' ', this.atoms[i]))))
    }
}

Atom.debugMode = false;
var testForm = new TestForm();
var dom = Arg.publicRender(document.body, testForm);

/*
var bench = new Bench();
console.time('perf');
var dom = Arg.publicRender(document.body, bench);
console.timeEnd('perf');*/
