module rc {

    export enum KeyCodes{
        LEFT = 37,
        UP = 38,
        RIGHT = 39,
        DOWN = 40
    }

    export class KeyManager {
        static events = new Atom<KeyCodes>(null, null, null, 'KeyManager.events');

        static upDownSelectedItem<R>(store:Atom<R[]>, selected:Atom<R>) {
            KeyManager.events.addListener(keyCode=> {
                if (keyCode === KeyCodes.UP || keyCode === KeyCodes.DOWN) {
                    var index = store.get().indexOf(selected.get());
                    if (index === -1) {
                        selected.set(store.get()[0]);
                    }
                    if (keyCode === KeyCodes.UP && index > 0) {
                        selected.set(store.get()[index - 1]);
                    }
                    if (keyCode === KeyCodes.DOWN && index < store.get().length - 1) {
                        selected.set(store.get()[index + 1]);
                    }
                }
            });
        }

        static onKeyDown() {
            document.addEventListener('keydown', e=> {
                switch (e.keyCode) {
                    case 37:
                        KeyManager.events.set(KeyCodes.LEFT, true);
                        e.preventDefault();
                        break;
                    case 38:
                        KeyManager.events.set(KeyCodes.UP, true);
                        e.preventDefault();
                        break;
                    case 39:
                        KeyManager.events.set(KeyCodes.RIGHT, true);
                        e.preventDefault();
                        break;
                    case 40:
                        KeyManager.events.set(KeyCodes.DOWN, true);
                        e.preventDefault();
                        break;
                }
            });
        }
    }

    KeyManager.onKeyDown();
}