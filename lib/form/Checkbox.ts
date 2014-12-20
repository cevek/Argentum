module Arg {
    export interface ICheckbox<T> extends Arg.Attrs{
        argModel: Atom<T>;
        argValue: T;
    }
    export class Checkbox<T> implements Arg.Component {
        isBlock = false;
        constructor(private attrs:ICheckbox<T>) {
            this.attrs['type'] = 'checkbox';
            this.attrs['onchange'] = (e:MouseEvent)=>this.onChange(e);
            this.attrs['checked'] = ()=>this.attrs.argModel.isEqual(this.attrs.argValue);
        }

        private onChange(e:MouseEvent) {
            var target = <HTMLInputElement>e.target;
            if (target.checked) {
                this.attrs.argModel.set(this.attrs.argValue);
            }
            else {
                this.attrs.argModel.setNull();
            }
        }

        render() {
            return Arg.dom('input', this.attrs);
        }
    }
}