module rc {
    export class VTags implements Arg.Component {
        render() {
            return d.root('.panel',
                d.map(tagsStore,
                    (tag:Tag) =>
                        d('.item', {
                            classSet: {
                                selected: new Atom(this, {
                                    getter: ()=>activeTag.isEqual(tag),
                                    name: 'isEqual'
                                })
                            },
                            onclick: ()=>activeTag.set(tag)
                        }, tag.name)
                )
            )
        }
    }
}