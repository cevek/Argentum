module rc {
    export class VTags implements Arg.Component {
        render() {
            return Arg.root('.panel',
                Arg.mapRaw(tagsStore,
                    tag =>
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