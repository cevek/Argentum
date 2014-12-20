module Arg {
    export interface ICheckbox<T> {
        model: Atom<T>;
        label: any;
        value: T;
    }
    export class Checkbox<T> implements Arg.Component {
        constructor(private domAttrs:Arg.Attrs, private params:ICheckbox<T>) {}

        change(e:MouseEvent) {
            var target = <HTMLInputElement>e.target;
            if (target.checked) {
                this.params.model.set(this.params.value);
            }
            else {
                this.params.model.setNull();
            }
        }

        render() {
            this.domAttrs['type'] = 'checkbox';
            this.domAttrs['onchange'] = (e:MouseEvent)=>this.change(e);
            return Arg.root('',
                Arg.dom('label',
                    Arg.dom('input', this.domAttrs),
                    Arg.dom('span', this.params.label)
                )
            );
        }
    }
}