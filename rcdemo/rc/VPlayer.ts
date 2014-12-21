module rc {
    export class VPlayer implements Arg.Component {
        nextRandom() {
            var recordList:{record: Record; station: Station; tag: Tag}[] = [];
            stationsStore.forEach(station=> {
                station.records.forEach(record=> {
                    var tag = tagsStore.filter(tag => tag.id === station.tagsIds[0]).pop();
                    recordList.push({record: record, station: station, tag: tag});
                })
            });

            if (recordList.length) {
                var randomRecord = recordList[recordList.length * Math.random() | 0];
                playingStation.set(randomRecord.station);
                playingTag.set(randomRecord.tag);
                activeRecord.set(randomRecord.record);
            }
        }

        render() {
            return Arg.root('.block',
                d('.title',
                    ()=>playingTag.get() && playingTag.get().name, " - ",
                    ()=>playingStation.get() && playingStation.get().name, " - ",
                    ()=>activeRecord.get() && activeRecord.get().start.toLocaleDateString()
                ),
                d('audio', {
                    controls: true,
                    autoplay: true,
                    src: playerUrl,
                    onended: ()=>this.nextRandom(),
                    onerror: ()=>this.nextRandom()
                }),
                d('a', {onclick: ()=>this.nextRandom()}, 'Next Random')
                //d('a', {href: playerUrl}, 'Download')
            );
        }
    }
}