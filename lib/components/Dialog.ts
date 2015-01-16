module ag {
    export interface IDialog {
        attrs?: Attrs;
        dialogAttrs?: Attrs;
        contentAttrs?: Attrs;
    }

    export function dialogheader(params:Attrs, ...children:any[]) {
        return div('.modal-header', params, button('.close', {type: 'button', 'data-dismiss': true}, '×'), children)
    }

    export function dialogbody(params:Attrs, ...children:any[]) {return div('.modal-body', params, children)}

    export function dialogfooter(params:Attrs, ...children:any[]) {return div('.modal-footer', params, children)}

    export class Dialog implements Component {
        tree:TreeItem;

        constructor(public params:IDialog, public children?:any) {
            publicRender(document.body, this);
        }

        componentWillMount() {
            traverseTree(this.tree, item => {
                if (item.attrs && item.attrs['data-dismiss']){
                    item.attrs.onclick = ()=>this.close();
                }
            });
        }

        close() {
            this.tree.destroy();
        }

        render() {
            return div('.modal', extendsAttrs(this.params.attrs, {style: {display: 'block'}}),
                div('.modal-backdrop'),
                div('.modal-dialog', this.params.dialogAttrs,
                    div('.modal-content', this.params.contentAttrs, this.children)
                )
            );
        }
    }
}