module Arg {
    export interface IInput {
        model: Atom<string>;
    }

    export class Input implements Component {
        isBlock = false;

        constructor(private params:IInput, private attrs:Attrs = {}) {
            this.attrs.type = this.attrs.type || 'text';
            this.attrs.oninput = (e)=>this.onInput(e);
            this.attrs.value = this.params.model;
        }

        onInput(e:Event) {
            var target = <HTMLInputElement>e.target;
            this.params.model.set(target.value);
        }

        render() {
            return dom('input', this.attrs);
        }
    }

    export interface IInputGroup {
        model: Atom<string>;
        label: any;
        inputAttrs?: Attrs;
        labelAttrs?: Attrs;
    }
    export class InputGroup implements Component {
        constructor(private params:IInputGroup, private attrs:Attrs = {}) {
            params.labelAttrs = params.labelAttrs || {};
            params.inputAttrs = params.inputAttrs || {};
            params.inputAttrs.id = params.labelAttrs.htmlFor = params.inputAttrs.id || Math.random().toString(33).substr(2, 3);
        }

        render() {
            return root('', this.attrs,
                d('label', this.params.labelAttrs, this.params.label, ":"),
                new Input(this.params, this.params.inputAttrs)
            );
        }
    }
}