module ag {
    export interface ICheckbox<T> extends IFormElement {
        model: Atom<T>;
        value: T;
        attrs?: Attrs;
    }

    export function checkbox<T>(params:ICheckbox<T>) {return new Checkbox(params)}

    class Checkbox<T> extends FormElement implements Component {
        //isBlock = false;
        params:ICheckbox<T>;

        constructor(params:ICheckbox<T>) {
            super(params);
            this.params.attrs.type = 'checkbox';
            this.params.attrs.onchange = (e)=>this.onChange(e);
            this.params.attrs.checked = ()=>this.params.model.isEqual(this.params.value);
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
                d('input', this.params.attrs),
                this.label()
            );
        }
    }
}
