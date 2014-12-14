module rc {
    export class Station {
        id:number;
        name:string;
        brand:string;
        site:string;
        cover:string;
        tagsIds:string[];
        records:Record[] = [];

        constructor(obj:any = {}) {
            this.id = obj.id;
            this.name = obj.name;
            this.site = obj.site;
            this.brand = obj.brand;
            this.cover = obj.cover;
            this.tagsIds = [];
            obj.tag1 && this.tagsIds.push(obj.tag1);
            obj.tag2 && this.tagsIds.push(obj.tag2);
            obj.tag3 && this.tagsIds.push(obj.tag3);

            if (obj.records) {
                for (var i = 0; i < obj.records.length; i++) {
                    this.records.push(new Record(obj.records[i]));
                }
            }
        }
    }
}
