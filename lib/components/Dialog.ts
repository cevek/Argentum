module ag {
    export class Dialog implements Component {
        tree:TreeItem;

        constructor(private params:{header: any; body: any; footer: any;}, private attrs:Attrs = {}) {
            publicRender(document.body, this);
        }

        close() {
            this.tree.destroy();
        }

        render() {
            return root('', this.attrs,
                dom('a.close', {onclick: ()=>this.close()}, 'x'),
                dom('.header', this.params.header),
                dom('.body', this.params.body),
                dom('.footer', this.params.footer)
            );
        }
    }
}