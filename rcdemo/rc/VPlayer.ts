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

        input = new Atom(this, {name: 'input', value: 'hey'});
        checkbox = new Atom(this, {name: 'checkbox', value: 'yes'});

        render() {
            return Arg.root('.block',
                //new Arg.FormElement({label: 'hey'}, Arg.Checkbox({value: 'fuck', model: this.checkbox})),
                new Arg.Checkbox({label: "Click me", value: 'yes', model: this.checkbox}),
                new Arg.FormInput({label: "My Text", model: this.input}),
                this.checkbox,
                this.input,
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