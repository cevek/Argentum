module ag {
    export interface ICheckbox<T> {
        model?: Atom<T>;
        value?: T;
        inputAttrs?: Attrs;
        attrs?: Attrs;
        labelAttrs?: Attrs;
    }

    export function checkbox<T>(params:ICheckbox<T>, ...children:any[]) {return new Checkbox(params, children)}

    export class Checkbox<T> implements Component {
        //isBlock = false;
        type = 'checkbox';

        constructor(public params:ICheckbox<T>, public children:any) {}

        onChange(e:Event) {
            var target = <HTMLInputElement>e.target;
            if (target.checked) {
                this.params.model.set(this.params.value);
            }
            else {
                this.params.model.setNull();
            }
        }

        render() {
            return root('.' + this.type, this.params.attrs,
                label(this.params.labelAttrs,
                    input(copy(this.params.inputAttrs, {
                        type: this.type,
                        onchange: (e:Event)=>this.onChange(e),
                        checked: ()=>this.params.model.isEqual(this.params.value)
                    })),
                    this.children
                ));
        }
    }
}
