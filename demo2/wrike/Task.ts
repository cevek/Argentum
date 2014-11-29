module wrike {
    export class Task {
        id:number = 1;
        summary:string = 'Hey '+Math.random().toString(33).substr(2, 3);
        description:string = 'Just some text '+Math.random().toString(33).substr(2, 3);
        isCompleted:boolean = true;
    }
}
