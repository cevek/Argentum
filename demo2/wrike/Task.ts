module wrike {
    export class Task {
        id:number = 1;
        summary = new Atom<string>();
        description = new Atom<string>();
        isCompleted:boolean = true;
        constructor(){
            this.summary.set('Hey '+Math.random().toString(33).substr(2, 3));
            this.description.set('Just some text '+Math.random().toString(33).substr(2, 3));
        }
    }
}
