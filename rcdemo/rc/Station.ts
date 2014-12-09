module rc {
    export class Station {
        id:number;
        name:string;
        brand:string;
        site:string;
        cover:string;
        tagsIds:string[];
        tracks:Track[] = [];

        constructor(obj:any = {}) {
            this.id = obj.id;
            this.name = obj.name;
            this.site = obj.site;
            this.brand = obj.brand;
            this.cover = obj.cover;
            this.tagsIds = obj.tagsIds;
            if (obj.tracks) {
                for (var i = 0; i < obj.tracks.length; i++) {
                    this.tracks.push(new Track(obj.tracks[i]));
                }
            }
        }
    }
}
