module Arg {
    export interface ICheckbox<T> extends IFormElement {
        model: Atom<T>;
        value: T;
    }
    export class Checkbox<T> extends FormElement implements Component {
        //isBlock = false;
        params:ICheckbox<T>;

        constructor(params:ICheckbox<T>, attrs:Attrs = {}) {
            super(params, attrs);
            this.attrs.type = 'checkbox';
            this.attrs.onchange = (e)=>this.onChange(e);
            this.attrs.checked = ()=>this.params.model.isEqual(this.params.value);
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
            return root('',
                dom('input', this.attrs),
                this.label()
            );
        }
    }
}
