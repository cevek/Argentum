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
                                selected: new Atom(this, {
                                    getter: ()=>activeStation.isEqual(station),
                                    name: 'isEqual'
                                })
                            },
                            onclick: ()=> {activeStation.set(station)}
                        }, station.name)
                )
            )
        }
    }
}