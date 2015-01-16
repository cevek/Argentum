module ag {
    export interface IInputText {
        model: Atom<string>;
        type?: any;
        required?: any;
        attrs?: Attrs;
    }

    export function inputtext(params:IInputText) {return new InputText(params)}

    export class InputText implements Component {
        isBlock = false;
        domNode:HTMLInputElement;

        constructor(public params:IInputText) {}

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
            return input(copy(this.params.attrs, {
                type: this.params.type || 'text',
                oninput: ()=>this.onInput(),
                onblur: ()=>this.updateInput(),
                required: this.params.required
            }));
        }
    }

    export interface IInputGroup extends IInputText {
        label: any;
        inputAttrs?: Attrs;
        labelAttrs?: Attrs;
        attrs?: Attrs;
    }

    export function inputgroup(params:IInputGroup, ...children:any[]) {return new InputGroup(params, children)}

    class InputGroup implements Component {
        id = Math.random().toString(33).substr(2, 3);

        constructor(public params:IInputGroup, public children?:any) {
            if (params.inputAttrs && params.inputAttrs.id) {
                this.id = params.inputAttrs.id;
            }
        }

        render() {
            return root('.form-group', this.params.attrs,
                label('.control-label', copy(this.params.labelAttrs, {
                    htmlFor: this.id,
                    classSet: {required: this.params.required}
                }), this.params.label, ":"),
                input('.form-control', copy(this.params.inputAttrs, {
                    id: this.id,
                    type: this.params.type
                }))
            );
        }
    }
}