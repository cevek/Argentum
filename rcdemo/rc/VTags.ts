module rc {
    export class VTags implements Arg.Component {
        constructor() {
            keyPress.addListener(key=> {
                var index = tagsStore.indexOf(activeTag.get());
                if (index === -1) {
                    if (tagsStore.length) {
                        activeTag.set(tagsStore[0]);
                    }
                }
                else {
                    if (KeyCodes.UP == key) {
                        if (index > 0) {
                            activeTag.set(tagsStore[index - 1]);
                        }
                    }
                    if (KeyCodes.DOWN == key) {
                        if (index < tagsStore.length - 1) {
                            activeTag.set(tagsStore[index + 1]);
                        }
                    }
                }
            });
        }

        render() {
            return d.root({className: "panel"},
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