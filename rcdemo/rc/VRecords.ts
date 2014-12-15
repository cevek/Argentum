module rc {
    export class VTracks implements Arg.Component {
        render() {
            return d.root('.panel', {
                    classSet: {empty: ()=>recordsList.isEmpty()}
                },
                d.map(recordsList,
                    track => new VTrackItem(track))
            )
        }
    }

    export class VTrackItem implements Arg.Component {
        constructor(private track:Record) {}

        setActive() {
            activeRecord.set(this.track);
            playingStation.set(activeStation.get());
            playingTag.set(activeTag.get());
        }

        render() {
            return d.root('.item', {
                    classSet: {
                        playing: ()=>activeRecord.isEqual(this.track)
                    },
                    onclick: ()=> this.setActive()
                },
                d('span.title', this.track.start.toLocaleDateString())
            );
        }
    }
}

