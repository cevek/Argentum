/// <reference path="../lib/Argentum.ts"/>

class TestForm implements Arg.Component {
    input = new Atom(this, {name: 'input', value: 'hey'});
    checkbox = new Atom(this, {name: 'checkbox', value: ''});
    select = new Atom(this, {name: 'select', value: 'hey'});

    render() {
        return Arg.root('',
            new Arg.Checkbox({label: "Click me", value: 'yes', model: this.checkbox}),
            new Arg.FormInput({label: "My Text", model: this.input}),
            new Arg.FormSelect({label: 'select', model: this.select}, {multiple: true},
                d('optgroup', {label: 'Lbl'},
                    ()=>this.checkbox.get() ?
                        d('option', {argValue: {name: "No1"}}, 'No1') : null,
                    d('option', {argValue: {name: "No2"}}, 'No2')
                )
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