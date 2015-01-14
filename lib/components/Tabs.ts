module ag {
    export class Tabs implements Component {
        items:Atom<Tab[]> = new Atom(this, null, {value: []});
        tree:TreeItem;
        activeTab = new Atom<Tab>(this);
        activeContent = new Atom(this, () => {
            if (this.activeTab.get()) {
                return this.activeTab.get().params.content();
            }
        });

        constructor(private params:{model: Atom<any>}, private attrs?:Attrs, private children?:any) {
            /*
             this.activeTab.set(this.items[0]);
             for (var i = 0; i < this.items.length; i++) {
             var item = this.items[i];
             if (item.params.active) {
             this.activeTab.set(item)
             }
             }
             */
            this.activeTab.addListener(this.activeTabChanged, this);
            this.params.model.addListener(this.modelChanged, this);
        }

        activeTabChanged() {
            this.params.model.set(this.activeTab.get().params.value);
        }

        modelChanged() {
            var items = this.items.get();
            var value = this.params.model.get();
            for (var i = 0; i < items.length; i++) {
                var tab = items[i];
                if (tab.params.value === value) {
                    this.activeTab.set(tab);
                    break;
                }
            }
        }

        componentWillMount() {
            //todo: callback for subtree modification
            var items:Tab[] = [];
            traverseTree(this.tree, item => {
                if (item.component instanceof Tab) {
                    var tab = <Tab>item.component;
                    tab.parent = this;
                    if (this.activeTab.isEmpty() || tab.params.active) {
                        this.activeTab.set(tab)
                    }
                    items.push(tab);
                }
            });
            /*
             for (var i = 0; i < items.length; i++) {
             var tab = items[i];

             }
             */
            this.items.set(items);
        }

        render() {
            return root('', this.attrs,
                dom('ul.nav', this.children),
                this.activeContent
            );
        }
    }
    export class Tab implements Component {
        constructor(public params:{title: any; content: ()=>any; active?: any; value?: any; disabled?: any},
                    public attrs?:Attrs,
                    public children?:any) {
        }

        parent:Tabs;
        tree:TreeItem;
        /*
         componentWillMount() {
         //todo: traverseToParents()
         this.parent = <Tabs>this.tree.parentTree.parentTree.component;
         if (!this.parent.activeTab.get() || this.params.active) {
         this.parent.activeTab.set(this);
         }
         }

         componentWillUnmount(){
         //todo: set first tab
         if (this.parent.activeTab.isEqual(this)) {
         this.parent.activeTab.set(null);
         }
         }*/

        render() {
            return dom('li', this.attrs,
                dom('a', {
                    onclick: ()=>this.parent.activeTab.set(this),
                    classSet: {
                        active: ()=>
                            this.parent.activeTab.isEqual(this)
                    }
                }, this.params.title)
            )
        }
    }
}