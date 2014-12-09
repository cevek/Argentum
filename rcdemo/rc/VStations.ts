module rc {
    export class VStations implements Arg.Component {
        stations = new Atom<Station[]>(()=>
                stationsStore.filter(station=>
                    activeTag.get() && station.tagsIds.indexOf(activeTag.get().id) > -1
                )
        );

        isEmpty = new Atom(()=>this.stations.isEmpty());



        render() {
            return d.root({className: "panel", classSet: {empty: this.isEmpty}},
                d.when(this.isEmpty, ()=>
                    d('.empty-text', 'Please select tag at first')),
                d.map(this.stations,
                    (station:Station) =>
                        d('.item', {
                            classSet: {selected: new Atom(()=>activeStation.isEqual(station))},
                            onclick: ()=> {activeStation.set(station)}
                        }, station.name)
                )
            )
        }
    }
}