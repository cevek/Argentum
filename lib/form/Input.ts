module Arg {
    export interface IInput {
        model: Atom<string>;
    }
    export class Input implements Arg.Component {
        isBlock = false;
        constructor(private domAttrs:Arg.Attrs, private params:IInput) {}

        onInput(e:KeyboardEvent) {
            var target = <HTMLInputElement>e.target;
            console.log(target.value);

            this.params.model.set(target.value);
        }

        render() {
            this.domAttrs['type'] = this.domAttrs['type'] || 'text';
            this.domAttrs['oninput'] = (e:KeyboardEvent)=>this.onInput(e);
            this.domAttrs['value'] = this.params.model;
            return Arg.dom('input', this.domAttrs);
        }
    }
}