module rc {

    export enum KeyCodes{
        LEFT = 37,
        UP = 38,
        RIGHT = 39,
        DOWN = 40
    }

    export class VLister implements Arg.Component {

        onKeyDown(e:KeyboardEvent) {
            switch (e.keyCode) {
                case 37:
                    keyPress.set(KeyCodes.LEFT, true);
                    e.preventDefault();
                    break;
                case 38:
                    keyPress.set(KeyCodes.UP, true);
                    e.preventDefault();
                    break;
                case 39:
                    keyPress.set(KeyCodes.RIGHT, true);
                    e.preventDefault();
                    break;
                case 40:
                    keyPress.set(KeyCodes.DOWN, true);
                    e.preventDefault();
                    break;
            }

            /*

             switch (e.keyCode) {
             case KeyCodes.UP:
             case KeyCodes.DOWN:
             var index = this.stations.get().indexOf(activeStation.get());
             if (index === -1) {
             activeStation.set(this.stations.get()[0]);
             }
             case KeyCodes.UP:
             if (index > 0) {
             activeStation.set(this.stations.get()[index - 1]);
             }
             break;
             case KeyCodes.DOWN:
             if (index < this.stations.get().length - 2) {
             activeStation.set(this.stations.get()[index + 1]);
             }
             break;
             }
             */
        }

        constructor() {
            document.addEventListener('keydown', this.onKeyDown);
        }

        render() {
            return d.root(
                new VTags(),
                new VStations(),
                new VTracks()
            )
        }
    }
}

