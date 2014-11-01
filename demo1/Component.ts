module wrike {
    export interface IAttrs {
        //onClick?: (e:MouseEvent)=>void;
        [index: string]: any
    }
    export class Component {
        domEl:HTMLElement;

        constructor(attrs:IAttrs) {
        }

        afterRender() {
        }

        template() {
        }
    }
}