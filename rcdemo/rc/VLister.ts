module rc {

    export class VLister implements Arg.Component {
        render() {
            return Arg.root('',
                new VPlayer(),
                new VTags(),
                new VStations(),
                new VTracks()
            )
        }
    }
}

