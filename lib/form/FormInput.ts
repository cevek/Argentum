module Arg {
    export interface IInput extends IFormElement {
        model: Atom<string>;
    }
    export class FormInput extends FormElement implements Component {
        //isBlock = false;
        params:IInput;

        constructor(params:IInput, attrs:Attrs = {}) {
            super(params, attrs);
            this.attrs.type = this.attrs.type || 'text';
            this.attrs.oninput = (e)=>this.onInput(e);
            this.attrs.value = this.params.model;
        }

        onInput(e:Event) {
            var target = <HTMLInputElement>e.target;
            this.params.model.set(target.value);
        }

        render() {
            return root('',
                this.label(),
                dom('input', this.attrs)
            );
        }
    }
}