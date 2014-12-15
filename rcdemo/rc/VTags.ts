module rc {
    export class VTags implements Arg.Component {
        render() {
            return d.root('.panel',
                d.map(tagsStore,
                    (tag:Tag) =>
                        d('.item', {
                            classSet: {
                                playing: ()=>playingTag.get() && playingTag.isEqual(tag),
                                selected:()=>activeTag.isEqual(tag)
                            },
                            onclick: ()=>activeTag.set(tag)
                        }, tag.name)
                )
            )
        }
    }
}