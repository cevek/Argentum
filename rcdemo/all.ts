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
/// <reference path="rc/KeyManager.ts"/>

var glob:any = {};
module rc {
    export var ns = ()=> rc;

    export var activeTag = new Atom<Tag>(rc, {
        setter: ()=> {activeStation.set(stationsList.get()[0])},
        name: 'activeTag'
    });
    export var activeStation = new Atom<Station>(rc, {
        setter: ()=> {activeTrack.setNull()},
        name: 'activeStation'
    });
    export var stationsList = new Atom<Station[]>(rc, {
            getter: ()=>activeTag.get() && stationsStore.filter(station=>
                station.tagsIds.indexOf(activeTag.get().id) > -1
            ), name: 'stationsList'
        }
    );

    export var tracksList = new Atom(rc, {
        getter: ()=>activeStation.get() ? activeStation.get().records : null,
        name: 'tracksList'
    });

    export var activeTrack = new Atom<Record>(rc, {name: 'activeTrack'});

    export var stationsStore:Station[] = [];
    export var tagsStore:Tag[] = [];
    HTTP.get('http://localhost:8125/data/').then((data:any) => {
        for (var i = 0; i < data.stations.length; i++) {
            stationsStore.push(new Station(data.stations[i]));
        }
        for (var i = 0; i < data.tags.length; i++) {
            tagsStore.push(new Tag(data.tags[i]));
        }
    });

    glob.vdom = Arg.publicRender(document.body, new VLister());
}





