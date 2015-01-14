module ag {
    export interface IFormElement {
        label: any;
        labelAttrs?: Attrs;
        attrs?: Attrs;
    }
    export class FormElement {
        params:IFormElement;

        constructor(params:IFormElement) {
            this.params = params;
            this.params.attrs = params.attrs || {};
            this.params.attrs.id = this.params.attrs.id || Math.random().toString(33).substr(2, 3);
        }

        label() {
            return label({
                htmlFor: this.params.attrs.id,
                classSet: {required: this.params.attrs.required}
            }, this.params.label)
        }
    }
}