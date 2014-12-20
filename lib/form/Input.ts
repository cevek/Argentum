module Arg {
    export interface IInput extends Arg.Attrs{
        argModel: Atom<string>;
    }
    export class Input implements Arg.Component {
        isBlock = false;
        constructor(private attrs:IInput) {
            this.attrs.type = this.attrs.type || 'text';
            this.attrs.oninput = (e:KeyboardEvent)=>this.onInput(e);
            this.attrs.value = this.attrs.argModel;
        }

        onInput(e:KeyboardEvent) {
            var target = <HTMLInputElement>e.target;
            this.attrs.argModel.set(target.value);
        }

        render() {
            return Arg.dom('input', this.attrs);
        }
    }
}