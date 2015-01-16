module ag {
    export interface IBtn extends Attrs{
        color?: any;
        size?: any;
        block?: any;
        active?: any;
        disabled?: any;
    }

    export function btn(params:IBtn, ...children:any[]) {
        return new Btn(extendsAttrs(params, {
            color: 'default',
            type: 'button'
        }), children)
    }

    export function btndanger(params:IBtn, ...children:any[]) {
        return new Btn(extendsAttrs(params, {
            color: 'danger',
            type: 'button'
        }), children)
    }

    export function btnwarning(params:IBtn, ...children:any[]) {
        return new Btn(extendsAttrs(params, {
            color: 'warning',
            type: 'button'
        }), children)
    }

    export function btninfo(params:IBtn, ...children:any[]) {
        return new Btn(extendsAttrs(params, {
            color: 'info',
            type: 'button'
        }), children)
    }

    export function btnprimary(params:IBtn, ...children:any[]) {
        return new Btn(extendsAttrs(params, {
            color: 'primary',
            type: 'button'
        }), children)
    }

    export function btnlink(params:IBtn, ...children:any[]) {
        return new Btn(extendsAttrs(params, {
            color: 'link',
            type: 'button'
        }), children)
    }

    export function btnsuccess(params:IBtn, ...children:any[]) {
        return new Btn(extendsAttrs(params, {
            color: 'success',
            type: 'button'
        }), children)
    }

    export function submit(params:IBtn, ...children:any[]) {
        return new Btn(extendsAttrs(params, {
            color: 'default',
            type: 'submit'
        }), children)
    }

    export function submitdanger(params:IBtn, ...children:any[]) {
        return new Btn(extendsAttrs(params, {
            color: 'danger',
            type: 'submit'
        }), children)
    }

    export function submitwarning(params:IBtn, ...children:any[]) {
        return new Btn(extendsAttrs(params, {
            color: 'warning',
            type: 'submit'
        }), children)
    }

    export function submitinfo(params:IBtn, ...children:any[]) {
        return new Btn(extendsAttrs(params, {
            color: 'info',
            type: 'submit'
        }), children)
    }

    export function submitprimary(params:IBtn, ...children:any[]) {
        return new Btn(extendsAttrs(params, {
            color: 'primary',
            type: 'button'
        }), children)
    }

    export function submitlink(params:IBtn, ...children:any[]) {
        return new Btn(extendsAttrs(params, {
            color: 'link',
            type: 'submit'
        }), children)
    }

    export function submitsuccess(params:IBtn, ...children:any[]) {
        return new Btn(extendsAttrs(params, {
            color: 'success',
            type: 'submit'
        }), children)
    }

    export class Btn implements Component {
        constructor(public params:IBtn, public children?:any) {}

        render() {
            return button('.btn', extendsAttrs(this.params, {
                classSet: {
                    'btn-default': this.params.color === 'default',
                    'btn-danger': this.params.color === 'danger',
                    'btn-warning': this.params.color === 'warning',
                    'btn-success': this.params.color === 'success',
                    'btn-primary': this.params.color === 'primary',
                    'btn-link': this.params.color === 'link',
                    'btn-info': this.params.color === 'info',
                    'btn-lg': this.params.size === 'lg',
                    'btn-sm': this.params.size === 'sm',
                    'btn-xs': this.params.size === 'xs',
                    'btn-block': this.params.block,
                    'active': this.params.active,
                    'disabled': this.params.disabled
                }
            }), this.children);
        }
    }
}

