
class Argy implements Arg.Component {
    render() {
        return d('div',
            'Hello',
            23,
            true,
            [1, 2, 3],
            new Booobs(),
            d.map<number>('div', itemsAtom, item=>item),
            new Atom(null, null, 'Hooray!'),
            d.when(trueAtom, ()=>'Is it true')
        );
    }
}

class Booobs implements Arg.Component {
    render() {
        return d('div', 'My name is Arthur');
    }
}

var trueAtom = new Atom();
var itemsAtom = new Atom(null, null, [new Booobs(), new Booobs(), new Booobs()]);



var glob:any = {};

glob.vdom = Arg.publicRender(document.body, new Argy());
