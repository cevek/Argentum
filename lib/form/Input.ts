module Arg {
    export interface IInput {
        model: Atom<string>;
        required?: any;
    }

    export class Input implements Component {
        isBlock = false;
        domNode:HTMLInputElement;

        constructor(private params:IInput, private attrs:Attrs = {}) {
            this.attrs.type = this.attrs.type || 'text';
            this.attrs.oninput = ()=>this.onInput();
            this.attrs.onblur = ()=>this.updateInput();
            this.attrs.required = this.attrs.required || this.params.required;
        }

        onInput() {
            this.params.model.set(this.domNode.value);
        }

        updateInput() {
            if (this.domNode !== document.activeElement) {
                this.domNode.value = this.params.model.get();
            }
        }

        componentDidMount() {
            this.updateInput();
            this.params.model.addListener(this.updateInput, this);
        }

        render() {
            return dom('input', this.attrs);
        }
    }

    export interface IInputGroup extends IInput {
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