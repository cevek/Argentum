module ag {

    export interface IAutocomplete {
        attrs?: Attrs;
        users: Atom<User[]>;
        selectedUsers: Atom<User[]>;
    }

    export function autocomplete(params:IAutocomplete, ...children:any[]) {return new Autocomplete(params, children)}

    export class Autocomplete implements Component {
        constructor(public params:IAutocomplete, public children?:any) {}

        private opened = new AtomSource(false);
        private inputTree = new AtomSource<TreeItem>();
        private input = new AtomSource('');
        private autocompleteUsers = new Atom(this, () =>
            this.params.users.get()
                .filter(u => u.name.indexOf(this.input.get()) > -1)
                .filter(u => this.params.selectedUsers.get().indexOf(u) === -1));

        select(user:User) {
            var u = this.params.selectedUsers.get().slice();
            u.push(user);
            this.params.selectedUsers.set(u);
            (<HTMLInputElement>this.inputTree.get().node).focus()
        }

        remove(user:User) {
            var users = this.params.selectedUsers.get().slice();
            var pos = users.indexOf(user);
            if (pos > -1) {
                users.splice(pos, 1);
            }
            this.params.selectedUsers.set(users);
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
                        onblur: (e)=> this.opened.set(false),
                        onfocus: ()=>this.opened.set(true),
                        self: this.inputTree
                    }
                }),
                when(this.opened, ()=>
                    div('.wraplist',
                        div('.list',
                            when(()=>this.autocompleteUsers.get().length === 0, ()=>
                                div('Empty list')),
                            map(this.autocompleteUsers, u=>
                                div({onmousedown: ()=>this.select(u)}, u.name)))))
            )
        }
    }
}
