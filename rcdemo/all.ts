/// <reference path="../lib/Argentum.ts"/>
/// <reference path="rc/jsonData.ts"/>
/// <reference path="rc/Station.ts"/>
/// <reference path="rc/Tag.ts"/>
/// <reference path="rc/Track.ts"/>
/// <reference path="rc/VLister.ts"/>
/// <reference path="rc/VTags.ts"/>
/// <reference path="rc/VTracks.ts"/>
/// <reference path="rc/VStations.ts"/>

var glob:any = {};
module rc {

    export var activeTag = new Atom<Tag>(null, ()=> {activeStation.setNull()});
    export var activeStation = new Atom<Station>(null, ()=> {activeTrack.setNull()});
    export var stationsList = new Atom<Station[]>(()=>
            stationsStore.filter(station=>
                activeTag.get() && station.tagsIds.indexOf(activeTag.get().id) > -1
            )
    );

    export var tracksList = new Atom(()=>activeStation.get() ? activeStation.get().tracks : null);

    export var activeTrack = new Atom<Track>();
    export var keyPress = new Atom<KeyCodes>();

    export var stationsStore:Station[] = [];
    export var tagsStore:Tag[] = [];

    for (var i = 0; i < jsonData.stations.length; i++) {
        stationsStore.push(new Station(jsonData.stations[i]));
    }
    for (var i = 0; i < jsonData.tags.length; i++) {
        tagsStore.push(new Tag(jsonData.tags[i]));
    }

    glob.vdom = Arg.publicRender(document.body, new VLister());
}

