module Arg {
    export interface ISelect<T> {
        model?: Atom<T>;
        modelMultiple?: Atom<T[]>;
        multiple?: any;
        required?: any;
    }

    export class Select<T> implements Component {
        isBlock = false;
        tree:TreeItem;
        children:any[];
        optionsTree:TreeItem[] = [];
        static debug = false;

        constructor(private params:ISelect<T>, private attrs:Attrs, children:any[]) {
            this.attrs.oninput = ()=>this.onChange();
            this.attrs.required = this.attrs.required || this.params.required;
            this.attrs.multiple = this.attrs.multiple || this.params.multiple;
            this.children = children;
            this.params.modelMultiple.addListener(this.modelChanged, this);
        }

        recalcOptions() {
            Select.debug && console.log("recalcOptions");

            if (this.params.required instanceof Atom) {
                Select.debug && console.log("required listener");
                this.params.required.addListener(this.childrenAtomChanged, this);
            }
            if (this.params.multiple instanceof Atom) {
                Select.debug && console.log("multiple listener");
                this.params.multiple.addListener(this.childrenAtomChanged, this);
            }

            this.optionsTree = [];
            traverseTree(this.tree, (treeItem)=> {
                if (treeItem.tag === 'option') {
                    this.optionsTree.push(treeItem);
                    if (treeItem.attrs['argDefault']) {
                        var node = <HTMLOptionElement>treeItem.node;
                        node.value = '';
                        var req = this.params.required;
                        node.disabled = req instanceof Atom ? req.get() : req;

                    }
                }
                if (treeItem.type === TreeType.WHEN) {
                    Select.debug && console.log("Arg.Select.whenCondition listener");
                    treeItem.whenCondition.addListener(this.childrenAtomChanged, this);
                }
            });
        }

        childrenAtomChanged() {
            this.recalcOptions();
            this.onChange();
            this.modelChanged(this.params.modelMultiple.get());
        }

        modelChanged(values:T[]) {
            Select.debug && console.log("model changed", values);
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
                Select.debug && console.log(optionTree.children[0].value, res);
            }
        }

        onChange() {
            Select.debug && console.log("onchange");
            var options:HTMLOptionElement[] = <any>this.tree.node;
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
            Select.debug && console.log("componentDidMount");
            this.recalcOptions();
            this.modelChanged(this.params.modelMultiple.get());
        }

        render() {
            Select.debug && console.log("Select render");
            return dom('select', this.attrs, this.children);
        }
    }

    export interface ISelectGroup<T> extends ISelect<T> {
        label: any;
        selectAttrs?: Attrs;
        labelAttrs?: Attrs;
    }
    export class SelectGroup<T> implements Component {
        private children:any[];

        constructor(private params:ISelectGroup<T>, private attrs:Attrs, ...children:any[]) {
            //todo: arrays for children
            if (children[0] && children[0].constructor === Array) {
                var child:any[] = [];
                for (var i = 0; i < children[0].length; i++) {
                    child[i] = children[0][i];
                }
                children = child;
            }
            this.children = children;
            params.labelAttrs = params.labelAttrs || {};
            params.selectAttrs = params.selectAttrs || {};
            params.selectAttrs.id = params.labelAttrs.htmlFor = params.selectAttrs.id || Math.random().toString(33).substr(2, 3);
        }

        render() {
            return root('', this.attrs,
                d('label', this.params.labelAttrs, this.params.label, ":"),
                new Select(this.params, this.params.selectAttrs, this.children)
            );
        }
    }
}