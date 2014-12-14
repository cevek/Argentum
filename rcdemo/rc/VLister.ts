module rc {

    export class VLister implements Arg.Component {
        render() {
            return d.root('',
                new VPlayer(),
                new VTags(),
                new VStations(),
                new VTracks()
            )
        }
    }
}

