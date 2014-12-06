class A implements Arg.Component {
    render() {
        return d('div', 'Hello', new B());
    }
}

class B implements Arg.Component{
    render() {
        return d('div', 'My name is Arthur');
    }
}

var glob:any = {};

glob.vdom = Arg.publicRender(document.body, new A());
