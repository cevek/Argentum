module rc {
    export class VTracks implements Arg.Component {
        isEmpty = new Atom(()=>tracksList.isEmpty(), null, null, 'VTracks.isEmpty');

        render() {
            return d.root('.panel', {classSet: {empty: this.isEmpty}},
                d.when(this.isEmpty, ()=>
                    d('.empty-text', 'Please select station')),
                d.map(tracksList,
                    track => new VTrackItem(track))
            )
        }
    }

    export class VTrackItem implements Arg.Component {
        constructor(private track:Track) {}

        isSelected = new Atom(()=>activeTrack.isEqual(this.track));

        render() {
            return d.root('.item', {
                classSet: {selected: this.isSelected},
                onclick: ()=>activeTrack.set(this.track)
            }, this.track.created);
        }
    }
}

