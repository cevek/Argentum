module rc {
    export class VStations implements Arg.Component {
        isEmpty = new Atom(this, {
            getter: ()=>stationsList.isEmpty(),
            name: 'isEmpty'
        });

        render() {
            return d.root('.panel', {classSet: {empty: this.isEmpty}},
                d.when(this.isEmpty, ()=>
                    d('.empty-text', 'Please select tag at first')),
                d.map(stationsList,
                    (station:Station) =>
                        d('.item', {
                            classSet: {
                                playing: ()=>playingStation.get() && playingStation.isEqual(station),
                                selected: ()=>activeStation.isEqual(station)
                            },
                            onclick: ()=> {activeStation.set(station)}
                        }, station.name)
                )
            )
        }
    }
}