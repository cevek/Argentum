module rc {
    export class VStations implements Arg.Component {
        render() {
            return d.root('.panel', {classSet: {empty: ()=>stationsList.isEmpty()}},
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