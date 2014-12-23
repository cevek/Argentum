module Arg {
    export interface IFormSelect<T> extends IFormElement {
        model?: Atom<T>;
        modelMultiple?: Atom<T[]>;
    }

    export class FormSelect<T> extends FormElement implements Component {
        tree:TreeItem;
        params:IFormSelect<T>;
        attrs:Attrs;
        children:Object[];
        childrenAtom:Atom<Object>;
        optionsTree:TreeItem[] = [];
        tlabel:TreeItem;
        selectTree:TreeItem;
        static debug = false;

        constructor(params:IFormSelect<T>, attrs:Attrs, ...children:Object[]) {
            super(params, attrs);
            this.attrs.oninput = ()=>this.onChange();
            this.children = children;
            this.tlabel = this.label();
            this.selectTree = dom('select', this.attrs, this.children);
            this.params.modelMultiple.addListener(values => this.modelChanged(values));
        }

        recalcOptions() {
            FormSelect.debug && console.log("recalcOptions");

            if (this.selectTree.attrsAtoms) {
                if (this.selectTree.attrsAtoms['required']) {
                    FormSelect.debug && console.log("required listener");
                    this.selectTree.attrsAtoms['required'].addListener(this.childrenAtomChanged, null, null, null, this);
                }
                if (this.selectTree.attrsAtoms['multiple']) {
                    FormSelect.debug && console.log("multiple listener");
                    this.selectTree.attrsAtoms['multiple'].addListener(this.childrenAtomChanged, null, null, null, this);
                }
            }

            this.optionsTree = [];
            traverseTree(this.selectTree, (treeItem)=> {
                if (treeItem.tag === 'option') {
                    this.optionsTree.push(treeItem);
                    if (treeItem.attrs['argDefault']) {
                        var node = <HTMLOptionElement>treeItem.node;
                        node.value = '';
                        node.disabled = this.attrs.required;
                    }
                }
                if (treeItem.type === TreeType.WHEN) {
                    FormSelect.debug && console.log("Arg.Select.whenCondition listener");
                    treeItem.whenCondition.addListener(this.childrenAtomChanged, null, null, null, this);
                }
            });
        }

        childrenAtomChanged() {
            this.recalcOptions();
            this.onChange();
            this.modelChanged(this.params.modelMultiple.get());
        }

        modelChanged(values:T[]) {
            FormSelect.debug && console.log("model changed", values);
            for (var i = 0; i < this.optionsTree.length; i++) {
                var optionTree = this.optionsTree[i];

                var res = values.some(value => optionTree.attrs['argValue'] === value);
                if (!values.length && optionTree.attrs['argDefault']) {
                    res = true;
                }
                optionTree.attrs.selected = res;
                if (optionTree.node) {
                    var node = <HTMLOptionElement>optionTree.node;
                    node.selected = res;
                }
                FormSelect.debug && console.log(optionTree.children[0].value, res);
            }
        }

        onChange() {
            FormSelect.debug && console.log("onchange");
            if (!this.selectTree.node) {
                return;
            }
            var options:HTMLOptionElement[] = <any>this.selectTree.node;
            var selectedOptions:HTMLOptionElement[] = [];
            for (var i = 0; i < options.length; i++) {
                if (options[i].selected) {
                    selectedOptions.push(options[i]);
                }
            }
            var selectedTreeItems = this.optionsTree.filter((tree:TreeItem)=>selectedOptions.indexOf(<HTMLOptionElement>tree.node) > -1);
            var newValues:T[] = [];
            for (var i = 0; i < selectedTreeItems.length; i++) {
                var optionTree = selectedTreeItems[i];
                if (!optionTree.attrs['argDefault']) {
                    newValues.push(optionTree.attrs['argValue']);
                }
            }

            var modelMultiple = this.params.modelMultiple;
            if (modelMultiple && !Atom.arrayIsEqual(modelMultiple.get(), newValues)) {
                modelMultiple.set(newValues);
            }

            var model = this.params.model;
            if (model) {
                model.set(newValues.length ? newValues[0] : null);
            }
            /*
             console.log("newValues", newValues);
             console.log("selectedTreeItems", selectedTreeItems);
             console.log("selectedOptions", selectedOptions);
             console.log("options", options);
             */
        }

        componentDidMount() {
            FormSelect.debug && console.log("componentDidMount");
            this.recalcOptions();
            this.modelChanged(this.params.modelMultiple.get());
        }

        render() {
            FormSelect.debug && console.log("Select render");
            return root('',
                this.tlabel,
                this.selectTree
            );
        }
    }
}