module rc {
    export class VTracks implements Arg.Component {
        isEmpty = new Atom(this, {
            getter: ()=>recordsList.isEmpty(),
            name: 'isEmpty'
        });

        render() {
            return d.root('.panel', {
                    classSet: {empty: this.isEmpty}
                },
                d.when(this.isEmpty, ()=>
                    d('.empty-text', 'Please select station')),
                d.map(recordsList,
                    track => new VTrackItem(track))
            )
        }
    }

    export class VTrackItem implements Arg.Component {
        constructor(private track:Record) {}

        render() {
            return d.root('.item', {
                    classSet: {
                        playing: ()=>activeRecord.isEqual(this.track)
                    },
                    onclick: ()=> {
                        activeRecord.set(this.track);
                        playerUrl.set(this.track.link)
                    }
                },
                d('span.title', this.track.start.toLocaleDateString())
            );
        }
    }
}

