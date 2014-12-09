module rc {
    export class Track {
        id:number;
        created:Date;
        duration:number;
        filesize:number;
        link:string;

        constructor(obj:any = {}) {
            this.id = obj.id;
            this.created = new Date(obj.created);
            this.duration = obj.duration;
            this.filesize = obj.filesize;
            this.link = obj.link;
        }
    }
}