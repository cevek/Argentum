module wrike {
    export module nc {
        export function NCViewTemplate(vm:NCView) {
            return d.root(
                d('button', {onclick: ()=>vm.start()}, 'start'),
                d('button', {onclick: ()=>vm.stop()}, 'stop'),
                new Atom(()=>NCView.activeType.isEqual(NCTabs.Mentions) && new MentionsView()),
                new Atom(()=>NCView.activeType.isEqual(NCTabs.Inbox) && new InboxView()),
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
                d.when(vm.message,
                    ()=>d('div', 'Hi'),
                    ()=>d('a', {href: 'http://yandex.ru'}, 'yep')),

                d.map('div.mentions', vm.items, (mention:Mention)=>
                    d('div.item', //{style: {display: 'none'}},
                        d('div.title', mention.task.summary),
                        d('div.description', mention.task.description),
                        d('div.pin', mention.isPinned),
                        d('div.read', mention.isRead))),
                d('div', 'End')
            )
        }

        export function InboxViewTemplate(vm:InboxView) {
            return d.root(
                d('div.inbox',
                    d.map('div.item', vm.items, (inbox:Inbox)=>
                        d('div.item',
                            d.when(inbox.assigment, ()=>
                                d('div.assigment-item', inbox.assigment.task.summary)),
                            d.when(inbox.marketing, ()=>
                                d('div.marketing-item', inbox.marketing.get().title))))))

        }

        export function TabsViewTemplate(vm:TabsView) {
            return d.root(
                d('div.tabs',
                    d('div.button', {
                        classSet: {selected: new Atom(a=> NCView.activeType.isEqual(NCTabs.Mentions))},
                        onclick: ()=> NCView.activeType.set(NCTabs.Mentions)
                    }, 'Mentions'),

                    d('div.button', {
                        classSet: {selected: new Atom(a=> NCView.activeType.isEqual(NCTabs.Inbox))},
                        onclick: ()=> NCView.activeType.set(NCTabs.Inbox)
                    }, 'Inbox')))
        }
    }
}