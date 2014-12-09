module wrike {
    export module nc {
        export function NCViewTemplate(vm:NCView) {
            return d.root(
                d('button', {onclick: ()=>vm.start()}, 'start'),
                d('button', {onclick: ()=>vm.stop()}, 'stop'),
                d.when(new Atom(()=>NCView.activeType.isEqual(NCTabs.Mentions)), ()=>new MentionsView()),
                d.when(new Atom(()=>NCView.activeType.isEqual(NCTabs.Inbox)), ()=>new InboxView()),
/*
                glob.m = new Atom(()=>
                    NCView.activeType.isEqual(NCTabs.Mentions) ? new MentionsView() : null),
                new Atom(()=> NCView.activeType.isEqual(NCTabs.Inbox) ? new InboxView() : null),
*/
                /*
                 d.when(new Atom(a=>
                 NCView.activeType.isEqual(NCTabs.Mentions)),
                 ()=>
                 new MentionsView()),
                 d.when(new Atom(a=>NCView.activeType.isEqual(NCTabs.Inbox)), ()=>
                 new InboxView()),
                 */
                new TabsView());
        }

        export function MentionsViewTemplate(vm:MentionsView) {
            return d.root(
                d('div', 'Begin'),
                new Atom(()=>vm.message.get() ? d('div', 'Hi') : d('a', {href: 'http://yandex.ru'}, 'yep')),
                d.map(vm.items, (mention:Mention, i:number)=>
                    d('.item', {
                            style: {
                                display1: 'none',
                                backgroundColor: 'hsl(' + i * 12345 % 255 + ', 80%, 90%)'
                            }
                        },
                        d('.title', mention.task.summary),
                        d('.description', mention.task.description),
                        d('.pin', mention.isPinned),
                        d('.read', mention.isRead))),
                d('div', 'End')
            )
        }

        export function InboxViewTemplate(vm:InboxView) {
            return d.root(
                d('.inbox',
                    d.map(vm.items, (inbox:Inbox)=>
                        d('.item',
                            d.when(inbox.assigment, ()=>
                                d('.assigment-item', inbox.assigment.task.summary)),
                            d.when(inbox.marketing, ()=>
                                d('.marketing-item', inbox.marketing.get().title))))))

        }

        export function TabsViewTemplate(vm:TabsView) {
            return d.root(
                d('.tabs',
                    d('.button', {
                        classSet: {selected: new Atom(a=> NCView.activeType.isEqual(NCTabs.Mentions))},
                        onclick: ()=> {
                            NCView.activeType.set(NCTabs.Mentions)
                        }
                    }, 'Mentions'),

                    d('.button', {
                        classSet: {selected: new Atom(a=> NCView.activeType.isEqual(NCTabs.Inbox))},
                        onclick: ()=> NCView.activeType.set(NCTabs.Inbox)
                    }, 'Inbox')))
        }
    }
}