module rc {
    export class VPlayer implements Arg.Component {
        onEnd() {
            console.log("player end");

        }

        render() {
            return d.root('.block',
                d('.title',
                    ()=>playingTag.get() && playingTag.get().name, " - ",
                    ()=>playingStation.get() && playingStation.get().name, " - ",
                    ()=>activeRecord.get() && activeRecord.get().start.toLocaleDateString()
                ),
                d('audio', {
                    controls: true,
                    autoplay: true,
                    src: playerUrl,
                    onended: ()=>this.onEnd()
                }),
                d('a', {href: playerUrl}, 'Download')
            );
        }
    }
}