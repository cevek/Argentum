module rc {
    export class VTracks implements Arg.Component {
        render() {
            return Arg.root('.panel', {
                    classSet: {empty: ()=>recordsList.isEmpty()}
                },
                Arg.map(recordsList,
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
            return Arg.root('.item', {
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

