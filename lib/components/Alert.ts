module ag {
    export enum AlertType{
        SUCCESS, WARNING, DANGER, INFO
    }
    export interface IAlert {
        attrs?: Attrs;
        type?: AlertType;
        timeout?: number;
    }

    export class Alert implements Component {
        static types = AlertType;
        tree:TreeItem;
        defaultTimeout = 5;
        timeout:number;

        constructor(public params:IAlert, public children:any) {
            publicRender(document.querySelector('alert-container'), this);
        }

        componentWillMount() {
            this.timeout = setTimeout(() => {
                this.tree.destroy();
            }, (this.params.timeout || this.defaultTimeout) * 1000);
        }

        close() {
            clearTimeout(this.timeout);
            this.tree.destroy();
        }

        render() {
            return root('.alert alert-' + AlertType[this.params.type].toLowerCase(), this.children);
        }
    }

    export function alertcontainer(params?:Attrs, children?:any[]) {return new AlertContainer(params, children)}

    export class AlertContainer implements Component {
        constructor(public params:Attrs, public children:any) {}

        render() {
            return root(this.params, this.children);
        }
    }
}