module ag.test {

    export interface IAutocomplete {
        attrs?: Attrs;
        users: List<User>;
        selectedUsers: List<User>;
    }

    export function autocomplete(params:IAutocomplete, ...children:any[]) {return new Autocomplete(params, children)}

    export class Autocomplete implements Component {
        constructor(public params:IAutocomplete, public children?:any) {}

        private opened = new Atom(false);
        private inputTree = new Atom<TreeItem>();
        private input = new Atom('');
        private autocompleteUsers = new ListFormula<User>(this, () => {
            this.params.selectedUsers.subscribeCaller();
            var ret = this.params.users.subscribeCaller()
                .filter(u => u.name.indexOf(this.input.get()) > -1)
                .filter(u => this.params.selectedUsers.indexOf(u) === -1);
            console.log("autocompleteUsers", ret);
            return ret;
        });

        documentClick = (e:Event)=> {
            if (document.activeElement !== this.inputTree.get().node) {
                this.opened.set(false);
            }
        };

        componentDidMount() {
            document.addEventListener('click', this.documentClick);
        }

        componentWillUnmount() {
            document.removeEventListener('click', this.documentClick);
        }

        select(user:User) {
            this.params.selectedUsers.push(user);
            this.opened.set(false);
        }

        remove(user:User) {
            this.params.selectedUsers.remove(user);
        }

        render() {
            return root(copy(this.params.attrs, {}),
                div(
                    map(this.params.selectedUsers, u=>
                        div('',
                            u.name,
                            span('.remove', {onclick: ()=>this.remove(u)}, 'x')
                        ))),
                inputtext({
                    model: this.input, attrs: {
                        //onblur: (e)=> this.opened.set(false),
                        onfocus: ()=>this.opened.set(true),
                        self: this.inputTree
                    }
                }),
                when(this.opened, ()=>
                    div('.wraplist',
                        div('.list',
                            when(()=>this.autocompleteUsers.isEmpty(), ()=>
                                div('Empty list')),
                            map(this.autocompleteUsers, u=>
                                div({onclick: ()=>this.select(u)}, u.name)))))
            )
        }
    }
}
