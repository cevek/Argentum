module Arg {
    export interface IFormSelect<T> extends IFormElement {
        //options: any;
        //empty: any;
    }

    export class FormSelect<T> extends FormElement implements Component {
        params:IFormSelect<T>;
        attrs:Attrs;
        children:any[];
        childrenAtom:Atom<any>;
        optionsTree:any[] = [];
        selectTree:TreeItem;

        constructor(params:IFormSelect<T>, attrs:Attrs, ...children:any[]) {
            super(params, attrs);
            this.attrs.oninput = ()=>this.onChange();
            this.children = children;
            this.selectTree = dom('select', this.attrs, this.children);
            this.childrenAtom = new Atom(this, {
                name: 'childrenAtom',
                getter: ()=> {
                    //console.log("childrenAtom getter", JSON.stringify(this.selectTree, null, 2));

                    this.optionsTree = [];
                    traverseTree(this.selectTree, (treeItem)=> {
                        if (treeItem.tag === 'option') {
                            this.optionsTree.push(treeItem);
                        }
                        if (treeItem.type == TreeType.WHEN) {
                            treeItem.whenCondition.get();
                            //treeItem.whenCallback.get();
                        }
                    });
                    return this.optionsTree;
                }
            });
            this.childrenAtom.get();
            this.childrenAtom.addListener(()=>this.onChange());
        }

        onChange() {
            var select = <HTMLSelectElement>this.selectTree.node;
            var options:HTMLOptionElement[] = <any>select.options;
            var selectedOptions:HTMLOptionElement[] = [];
            for (var i = 0; i < options.length; i++) {
                if (options[i].selected){
                    selectedOptions.push(options[i]);
                }
            }
            var selectedTreeItems = this.optionsTree.filter((tree:TreeItem)=>selectedOptions.indexOf(<HTMLOptionElement>tree.node) > -1);
            console.log(selectedTreeItems);
        }

        render() {
            return root('',
                this.label(),
                this.selectTree
            );
        }
    }

    export interface IFormOption extends Attrs {
        disabled?: boolean;
        value: any;
        text: any;
    }

    export class FormOption implements Component {
        constructor(private attrs:IFormOption) {

        }

        render() {
            return dom('option', this.attrs);
        }
    }

    export interface IFormOptGroup extends Attrs {
        disabled?: boolean;
        label: any;
    }

    export class FormOptGroup implements Component {
        constructor(private attrs:IFormOptGroup) {

        }

        render() {
            return dom('optgroup', this.attrs);
        }
    }
}