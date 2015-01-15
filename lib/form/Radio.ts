module ag {

    interface IRadioGroup<T> {
        model: Atom<T>;
        attrs?: Attrs;
    }
    export function radiogroup<T>(params:IRadioGroup<T>, ...children:any[]) {return new RadioGroup(params, children)}

    class RadioGroup<T> implements Component {
        tree:TreeItem;

        constructor(private params:IRadioGroup<T>, private children:any) {}

        componentWillMount() {
            traverseTree(this.tree, item => {
                if (item.component instanceof Radio) {
                    var radio = <Radio<T>>item.component;
                    radio.params.model = this.params.model;
                    if (this.params.model.isEmpty() || radio.params.default){
                        this.params.model.set(radio.params.value);
                        console.log("set", this.params.model.get());
                    }
                }
            })
        }

        render() {
            return root(this.params.attrs, this.children);
        }
    }

    interface IRadio<T> extends IFormElement {
        value: T;
        model?: Atom<T>;
        default?: boolean;
        attrs?: Attrs;
    }
    export function radio<T>(params:IRadio<T>) {return new Radio(params)}

    class Radio<T> extends FormElement implements Component {
        tree:TreeItem;

        constructor(public params:IRadio<T>) {
            super(params);
        }

        private onChange(e:Event) {
            var target = <HTMLInputElement>e.target;
            if (target.checked) {
                this.params.model.set(this.params.value);
            }
            else {
                this.params.model.setNull();
            }
        }

        render() {
            return root(
                input(extendsAttrs(this.params.attrs, {
                    type: 'radio',
                    onchange: (e:Event)=>this.onChange(e),
                    checked: ()=>this.params.model.isEqual(this.params.value)
                })),
                this.label()
            )
        }
    }

}
