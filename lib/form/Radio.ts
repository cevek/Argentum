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
                    if (this.params.model.isEmpty() || radio.params.default) {
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

    interface IRadio<T> extends ICheckbox<T>{
        default?: boolean;
    }
    export function radio<T>(params:IRadio<T>, ...children: any[]) {return new Radio(params, children)}

    class Radio<T> extends Checkbox<T> {
        type = 'radio';
        constructor(params:IRadio<T>, children: any) {
            super(params, children);
        }
    }
}
