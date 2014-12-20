module Arg {
    export interface ICheckbox<T> {
        model: Atom<T>;
        label: any;
        value: T;
        checkboxAttrs?: Arg.Attrs;
        labelAttrs?: Arg.Attrs;
    }
    export class Checkbox<T> implements Arg.Component {
        isBlock = false;
        constructor(private domAttrs:Arg.Attrs, private params:ICheckbox<T>) {
            this.params.checkboxAttrs = this.params.checkboxAttrs || {};
            this.params.checkboxAttrs['type'] = 'checkbox';
            this.params.checkboxAttrs['onchange'] = (e:MouseEvent)=>this.onChange(e);
            this.params.checkboxAttrs['checked'] = ()=>this.params.model.isEqual(this.params.value);
        }

        private onChange(e:MouseEvent) {
            var target = <HTMLInputElement>e.target;
            if (target.checked) {
                this.params.model.set(this.params.value);
            }
            else {
                this.params.model.setNull();
            }
        }

        render() {
            return Arg.root('', this.domAttrs,
                Arg.dom('label',
                    Arg.dom('input', this.params.checkboxAttrs),
                    Arg.dom('span', this.params.labelAttrs, this.params.label)
                )
            );
        }
    }
}