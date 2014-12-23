/// <reference path="../lib/Argentum.ts"/>

class User {
    name:string;
}
class TestForm implements Arg.Component {
    input = new Atom(this, {name: 'input', value: 'hey'});
    checkbox = new Atom(this, {name: 'checkbox', value: 'yes'});
    required = new Atom(this, {name: 'required', value: true});
    multiple = new Atom(this, {name: 'multiple', value: true});

    options = [{name: 'No1'}, {name: 'No2'}, {name: 'No3'}, {name: 'No4'}];
    //select = new Atom<User[]>(this, {name: 'select', value: []});
    select = new Atom<User[]>(this, {name: 'select', value: [this.options[2]]});

    render() {
        var condItem = {name: "Condition"};
        //this.select.set(options);
        return Arg.root('',
            d('form', {onsubmit: ()=>false},
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

var testForm = new TestForm();
Arg.publicRender(document.body, testForm);