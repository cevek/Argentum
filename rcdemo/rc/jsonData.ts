module rc {
    export var jsonData:any = {
        tags: [
            {
                id: "relax",
                name: "Relax"
            },
            {
                id: "lounge",
                name: "Lounge"
            },
            {
                id: "nature",
                name: "Nature"
            },
            {
                id: "house",
                name: "House"
            },
        ],
        stations: [
            {
                id: 1,
                brand: "DI.FM",
                name: "Nature",
                site: "http://di.fm/nature/",
                cover: "http://di.fm/picnature.png",
                tagsIds: ["relax", "lounge", "nature"],
                tracks: [
                    {
                        id: 1,
                        created: new Date(new Date().getTime() - 5 * 24 * 60 * 60 * 1000),
                        duration: 60 * 60 * 1000,
                        filesize: 17900000,
                        link: "/files/h3XkH/"
                    }
                ]
            },
            {
                id: 2,
                brand: "DI.FM",
                name: "House",
                site: "http://di.fm/house/",
                cover: "http://di.fm/pichouse.png",
                tagsIds: ["house"],
                tracks: [
                    {
                        id: 2,
                        created: new Date(new Date().getTime() - 4 * 24 * 60 * 60 * 1000),
                        duration: 60 * 60 * 1000,
                        filesize: 17900000,
                        link: "/files/ije34/"
                    }
                ]
            }
        ]
    }
}
