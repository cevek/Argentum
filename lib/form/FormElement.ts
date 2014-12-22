module Arg {
    export interface IFormElement {
        label: any;
        labelAttrs?: Attrs;
    }
    export class FormElement {
        params:IFormElement;
        attrs:Attrs;

        constructor(params:IFormElement, attrs:Attrs) {
            this.params = params;
            this.attrs = attrs || {};
            this.attrs.id = this.attrs.id || Math.random().toString(33).substr(2, 3);
        }

        label() {
            return dom('label', {
                htmlFor: this.attrs.id,
                classSet: {required: this.attrs.required}
            }, this.params.label)
        }
    }
}