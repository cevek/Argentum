module ag {
    export class Tabs implements Component {
        //items:Atom<TreeItem[]> = new Atom(this, null, {value: []});
        tree:TreeItem;
        activeTab = new Atom<Tab>(this);

        constructor(private params:{model: Atom<any>}, private items:Tab[], private attrs?:Attrs) {
            this.activeTab.set(this.items[0]);
            for (var i = 0; i < this.items.length; i++) {
                var item = this.items[i];
                if (item.params.active) {
                    this.activeTab.set(item)
                }
            }
        }

        componentDidMount() {
            /* //todo: callback for subtree modification
             this.children
             traverseTree(this.tree, item => {
             if (item.component instanceof Tab) {
             this.items.get().push(item);
             }
             }, 1);*/
        }

        render() {
            return root('', this.attrs,
                dom('ul.nav',
                    mapRaw(this.items, item=>
                        dom('li',
                            dom('a', {
                                    onclick: ()=>this.activeTab.set(item),
                                    classSet: {active: ()=>this.activeTab.isEqual(item)}
                                },
                                item.params.title)
                        ))
                ),
                ()=>this.activeTab.get() ? this.activeTab.get().children : null
            );
        }
    }
    export class Tab implements Component {
        constructor(public params:{title: any; active?: any; value?: any; disabled?: any},
                    public attrs?:Attrs,
                    public children?:any) {
        }

        render() {
            return root('', this.attrs, this.children);
        }
    }
}