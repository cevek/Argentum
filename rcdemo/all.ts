/// <reference path="lib/HTTP.ts"/>
/// <reference path="../lib/Argentum.ts"/>
/// <reference path="rc/jsonData.ts"/>
/// <reference path="rc/Station.ts"/>
/// <reference path="rc/Tag.ts"/>
/// <reference path="rc/Track.ts"/>
/// <reference path="rc/VLister.ts"/>
/// <reference path="rc/VTags.ts"/>
/// <reference path="rc/VRecords.ts"/>
/// <reference path="rc/VStations.ts"/>
/// <reference path="rc/VPlayer.ts"/>
/// <reference path="rc/KeyManager.ts"/>

var glob:any = {};
module rc {
    export var ns = ()=> rc;

    export var playerUrl = new Atom<string>(rc, {
        name: 'playerUrl'
    });

    export var activeTag = new Atom<Tag>(rc, {
        //setter: ()=> {activeStation.set(stationsList.get()[0])},
        name: 'activeTag'
    });
    export var activeStation = new Atom<Station>(rc, {
        setter: ()=> {},
        name: 'activeStation'
    });
    export var activeRecord = new Atom<Record>(rc, {
        setter: ()=> {
            playerUrl.set(activeRecord.get().link);
        },
        name: 'activeRecord'
    });

    export var playingTag = new Atom<Tag>(rc, {
        name: 'playingTag'
    });

    export var playingStation = new Atom<Station>(rc, {
        name: 'playingStation'
    });

    export var stationsList = new Atom<Station[]>(rc, {
            getter: ()=>activeTag.get() && stationsStore.filter(station=>
                station.tagsIds.indexOf(activeTag.get().id) > -1
            ), name: 'stationsList'
        }
    );

    export var recordsList = new Atom(rc, {
        getter: ()=>activeStation.get() ? activeStation.get().records : null,
        name: 'recordsList'
    });

    export var stationsStore:Station[] = [];
    export var tagsStore:Tag[] = [];
    HTTP.get('http://localhost:8125/data/').then((data:any) => {
        var tags:any = {};
        for (var i = 0; i < data.stations.length; i++) {
            stationsStore.push(new Station(data.stations[i]));
            tags[data.stations[i].tag1] = {id: data.stations[i].tag1, name: data.stations[i].tag1};
        }
        for (var j in tags) {
            tagsStore.push(new Tag(tags[j]));
        }
        console.log(tags);

    });

    glob.vdom = Arg.publicRender(document.body, new VLister());
}

var a1 = new Atom(null, {name: 'a1', value: 0});
var a2 = new Atom(null, {name: 'a2', getter: ()=>a1.get() + 1});
var a3 = new Atom(null, {name: 'a3', getter: ()=>a2.get() + 1});
var a4 = new Atom(null, {name: 'a4', getter: ()=>a1.get() + 10});
var a5 = new Atom(null, {name: 'a5', getter: ()=>a4.get() + a3.get() + a6.get()});

var a6 = new Atom(null, {name: 'a6', getter: ()=>a7.get() + 22});
var a7 = new Atom(null, {name: 'a7', getter: ()=>a8.get() + a4.get()});
var a8 = new Atom(null, {name: 'a8', getter: ()=>a1.get() + 100});

a5.get();
a1.set(1);



