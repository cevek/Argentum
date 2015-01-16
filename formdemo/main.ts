/// <reference path="../lib/Argentum.ts"/>
//Atom.debugMode = false;
var glob:any = {};
module ag.test {

    class TestForm implements Component {
        input = Atom.source(this, 'input');
        checkbox = Atom.source(this, 'yes');
        required = Atom.source(this, true);
        multiple = Atom.source(this, true);

        options = [{name: 'No1'}, {name: 'No2'}, {name: 'No3'}, {name: 'No4'}];
        //select = new Atom<User[]>(this, {name: 'select', value: []});
        select = Atom.source(this, [this.options[2]]);
        date = Atom.source(this, new Date());

        picker = new Atom<TreeItem>(this);

        componentDidMount() {
            glob.picker = this.picker.get().component;
        }

        activeTab = new Atom(this, null, {value: 2});

        radio = new Atom(this);

        dialog() {
            var dialog:Dialog = new Dialog({}, [
                dialogheader({}, 'header'),
                dialogbody({}, 'body'),
                dialogfooter({},
                    btn({onclick: ()=>dialog.close()}, 'Cancel'),
                    btnsuccess({}, 'Save')
                ),
            ])
        }

        render() {
            var condItem = {name: "Condition"};
            //this.select.set(options);
            return root(
                alertcontainer(),
                form({onsubmit: ()=>false},
                    datepicker({model: this.date, attrs: {self: this.picker}}),
                    checkbox({value: 'yes', model: this.checkbox}, 'Click me'),
                    checkbox({value: true, model: this.multiple}, 'Multiple'),
                    checkbox({value: true, model: this.required}, 'Required'),
                    inputgroup({label: "My Text", model: this.input, required: this.required}),
                    selectgroup({
                            label: 'select',
                            modelMultiple: this.select,
                            multiple: this.multiple,
                            required: this.required
                        },
                        null,
                        option({argDefault: true}, 'None'),
                        optgroup({label: 'Lbl'},
                            when(this.checkbox, ()=>
                                option({argValue: condItem}, condItem.name)),

                            mapRaw(this.options, opt =>
                                option({argValue: opt}, opt.name))
                        )
                    ),
                    map(this.select, item=>div(item.name)),
                    this.input,
                    btndanger({onclick: ()=>this.select.set([])}, 'clear'),
                    btninfo({onclick: ()=> {this.dialog()}}, 'dialog'),
                    submitsuccess({}, 'Send'),
                    btn({onclick: ()=>this.activeTab.set(1)}, 'Tab1'),
                    btn({onclick: ()=>this.activeTab.set(2)}, 'Tab2'),
                    btn({onclick: ()=>this.activeTab.set(3)}, 'Tab3'),
                    this.activeTab,
                    tabs({model: this.activeTab},
                        tab({title: "Tab 1", value: 1}, 'Content1'),
                        tab({title: "Tab 2", value: 2, disabled: true}, 'Content2'),
                        tab({title: "Tab 3", value: 3}, 'Content3')
                    ),
                    radiogroup({model: this.radio},
                        radio({value: 11, default: true}, 'hey'),
                        radio({value: 2}, 'hey boy'),
                        radio({value: 3}, 'hey girl')
                    ),
                    btn({onclick: ()=>this.radio.set(2)}, 'set 2'),
                    this.radio,
                    btninfo({onclick: ()=>new Alert({type: Alert.types.INFO}, 'hello')}, 'alert')
                )
                /*
                 this.checkbox,
                 ()=>this.checkbox.get() ? d('div', 'Fuck') : d('div', 'Man'),
                 this.input
                 */
            );
        }
    }

    class Bench implements Component {

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
            return root('',
                button({onclick: ()=>this.click()}, 'click'),
                ul({style: {display: 'none'}},
                    mapRaw(this.atoms, (atom, i)=>li('item ' + i + ' ', atom))))
        }
    }

    Atom.debugMode = false;
    var testForm = new TestForm();
    var dom = publicRender(document.body, testForm);

    Route.listen();
    module R {
        export var index = new Route('/');
        export var about = new Route('/about');
        export var company = new Route('/company');
        export var users = new Route('/users');
        export var userInfo = new Route<{user: any}>('/users/:user');
        export var userProfile = new Route<{user: any}>('/users/:user/profile');
        export var userProfileContacts = new Route<{user: any}>('/users/:user/profile/contacts');
        export var userProfileFriends = new Route<{user: any}>('/users/:user/profile/friends');
        export var userProfileOffers = new Route<{user: any}>('/users/:user/profile/offers');
        export var userProfileOffersItem = new Route<{user: any; offer: any}>('/users/:user/profile/offers/:offer');
    }

    class Index implements Component {
        render() {

        }
    }

    class User implements Component {
        render() {

        }
    }
    class UserProfile implements Component {
        render() {

        }
    }
    class Users {
        page = new Atom<Component>(this);

        constructor() {
            Route.activeRoute.addListener(route => {
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
            return div(
                new Link({href: R.userProfileOffersItem.toURL({user: 123, offer: 435})}, 'MyOffer 1'),
                this.page);
        }
    }

    publicRender(document.body, new Link({href: R.company.toURL({})}, 'Company'));
    publicRender(document.body, new Users());
}

/*
 var bench = new Bench();
 console.time('perf');
 var dom = publicRender(document.body, bench);
 console.timeEnd('perf');
 */
