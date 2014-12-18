module rc {
    export class VStations implements Arg.Component {
        render() {
            return Arg.root('.panel', {classSet: {empty: ()=>stationsList.isEmpty()}},
                Arg.map(stationsList,
                    station =>
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
