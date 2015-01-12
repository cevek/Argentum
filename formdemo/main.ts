/// <reference path="../lib/Argentum.ts"/>
//Atom.debugMode = false;
var glob:any = {};

class TestForm implements ag.Component {
    input = Atom.source(this, 'input');
    checkbox = Atom.source(this, 'yes');
    required = Atom.source(this, true);
    multiple = Atom.source(this, true);

    options = [{name: 'No1'}, {name: 'No2'}, {name: 'No3'}, {name: 'No4'}];
    //select = new Atom<User[]>(this, {name: 'select', value: []});
    select = Atom.source(this, [this.options[2]]);
    date = Atom.source(this, new Date());

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
                        ag.when(this.checkbox, ()=>
                            ag.dom('option', {argValue: condItem}, condItem.name)),

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

    constructor() {
        for (var i = 0; i < 10000; i++) {
            this.atoms[i] = Atom.source(this, 0);
        }
    }

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
        return ag.root('',
            ag.dom('button', {onclick: ()=>this.click()}, 'click'),
            ag.dom('ul', {style: {display: 'none'}},
                ag.mapRaw(this.atoms, (atom, i)=>ag.dom('li', 'item ' + i + ' ', atom))))
    }
}

Atom.debugMode = false;
var testForm = new TestForm();
var dom = ag.publicRender(document.body, testForm);

ag.Rout.listen();
module R {
    export var index = new ag.Rout('/');
    export var about = new ag.Rout('/about');
    export var company = new ag.Rout('/company');
    export var users = new ag.Rout('/users');
    export var userInfo = new ag.Rout<{user: any}>('/users/:user');
    export var userProfile = new ag.Rout<{user: any}>('/users/:user/profile');
    export var userProfileContacts = new ag.Rout<{user: any}>('/users/:user/profile/contacts');
    export var userProfileFriends = new ag.Rout<{user: any}>('/users/:user/profile/friends');
    export var userProfileOffers = new ag.Rout<{user: any}>('/users/:user/profile/offers');
    export var userProfileOffersItem = new ag.Rout<{user: any; offer: any}>('/users/:user/profile/offers/:offer');
}

class Index implements ag.Component {
    render() {

    }
}

class User implements ag.Component {
    render() {

    }
}
class UserProfile implements ag.Component {
    render() {

    }
}
class Users {
    page = new Atom<ag.Component>(this);

    constructor() {
        ag.Rout.activeRoute.addListener(route => {
            switch (route) {
                case R.userInfo:
                    this.page.set(new User());
                    break;

                case R.userProfileOffersItem:
                    R.userProfileOffersItem.getParams();
                    this.page.set(new UserProfile());
                    break;
            }
        }, this);
    }

    render() {
        return ag.dom('div',
            new ag.Link({href: R.userProfileOffersItem.toURL({user: 123, offer: 435})}, 'MyOffer 1'),
            this.page);
    }
}

ag.publicRender(document.body, new ag.Link({href: R.company.toURL({})}, 'Company'));
ag.publicRender(document.body, new Users());

/*
 var bench = new Bench();
 console.time('perf');
 var dom = ag.publicRender(document.body, bench);
 console.timeEnd('perf');
 */
