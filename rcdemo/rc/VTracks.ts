module rc {
    export class VTracks implements Arg.Component {
        isEmpty = new Atom(()=>tracksList.isEmpty());

        render() {
            return d.root({className: "panel", classSet: {empty: this.isEmpty}},
                d.when(this.isEmpty, ()=>
                    d('.empty-text', 'Please select station')),
                d.map(tracksList,
                    (track:Track) =>
                        d('.item', {
                            classSet: {selected: new Atom(()=>activeTrack.isEqual(track))},
                            onclick: ()=>activeTrack.set(track)
                        }, track.created)
                )
            )
        }
    }
}