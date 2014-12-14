module rc {
    export class Record {
        id:number;
        start:Date;
        duration:number;
        filesize:number;
        link:string;

        constructor(obj:any = {}) {
            this.id = obj.id;
            this.start = new Date(obj.start);
            this.duration = obj.duration;
            this.filesize = obj.filesize;
            this.link = 'http://localhost:8125/files/' + obj.filename;
        }
    }
}