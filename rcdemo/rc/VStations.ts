module rc {
    export class VStations implements Arg.Component {
        isEmpty = new Atom(()=>stationsList.isEmpty(), null, null, 'VStations.isEmpty');

        render() {
            return d.root({className: "panel", classSet: {empty: this.isEmpty}},
                d.when(this.isEmpty, ()=>
                    d('.empty-text', 'Please select tag at first')),
                d.map(stationsList,
                    (station:Station) =>
                        d('.item', {
                            classSet: {selected: new Atom(()=>activeStation.isEqual(station), null, null, 'VStations.isEqual')},
                            onclick: ()=> {activeStation.set(station)}
                        }, station.name)
                )
            )
        }
    }
}