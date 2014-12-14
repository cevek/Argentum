module rc {
    export class VPlayer implements Arg.Component {
        render() {
            return d.root('.block',
                d('audio', {controls: true, autoplay: true, src: playerUrl}),
                d('a', {href: playerUrl}, 'Download')
            );
        }
    }
}