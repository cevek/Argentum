//todo: traverseToParents()
module ag {
    interface ITabs {
        model: Atom<any>;
        attrs?: Attrs;
    }

    export function tabs(attrs:ITabs, ...children:any[]) {return new Tabs(attrs, children)}

    export class Tabs implements Component {
        items:Atom<Tab[]> = new Atom(this, null, {value: []});
        tree:TreeItem;
        activeTab = new Atom<Tab>(this);
        activeContent = new Atom(this, () => {
            if (this.activeTab.get()) {
                return this.activeTab.get().children;
            }
        });

        constructor(private params:ITabs, private children?:any) {
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
                    if (this.activeTab.isEmpty() || tab.params.default) {
                        this.activeTab.set(tab)
                    }
                    items.push(tab);
                }
            });
            this.items.set(items);
        }

        render() {
            return root(this.params.attrs,
                ul('.nav', this.children),
                this.activeContent
            )
        }
    }

    interface ITab {
        title: any;
        default?: boolean;
        value?: any;
        disabled?: any;
        attrs?: Attrs;
    }

    export function tab(attrs:ITab, ...children:any[]) {return new Tab(attrs, children)}

    class Tab implements Component {
        constructor(public params:ITab, public children:any) {
            params.disabled = Atom.createIfNot(this, params.disabled);
        }

        parent:Tabs;
        tree:TreeItem;

        render() {
            return li(this.params.attrs,
                a({
                    onclick: ()=>!this.params.disabled.get() && this.parent.activeTab.set(this),
                    classSet: {
                        disabled: this.params.disabled,
                        active: ()=>this.parent.activeTab.isEqual(this)
                    }
                }, this.params.title)
            )
        }
    }
}