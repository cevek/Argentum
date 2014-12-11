module rc {
    export class VTags implements Arg.Component {
        render() {
            return d.root('.panel',
                d.map(tagsStore,
                    (tag:Tag) =>
                        d('.item', {
                            classSet: {selected: new Atom(()=>activeTag.isEqual(tag), null, null, 'VTags.isEqual')},
                            onclick: ()=>activeTag.set(tag)
                        }, tag.name)
                )
            )
        }
    }
}