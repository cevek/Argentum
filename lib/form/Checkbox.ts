module ag {
    export interface ICheckbox<T> {
        model?: Atom<T>;
        value?: T;
        inputAttrs?: Attrs;
        attrs?: Attrs;
    }

    export function checkbox<T>(params:ICheckbox<T>, ...children: any[]) {return new Checkbox(params, children)}

    export class Checkbox<T> implements Component {
        //isBlock = false;
        type = 'checkbox';

        constructor(public params:ICheckbox<T>, public children: any) {}

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
            return label(this.params.attrs,
                input(extendsAttrs(this.params.inputAttrs, {
                    type: this.type,
                    onchange: (e:Event)=>this.onChange(e),
                    checked: ()=>this.params.model.isEqual(this.params.value)
                })),
                this.children
            );
        }
    }
}
