module rc {

    export class VLister implements Arg.Component {
        render() {
            return d.root('',
                new VTags(),
                new VStations(),
                new VTracks()
            )
        }
    }
}

