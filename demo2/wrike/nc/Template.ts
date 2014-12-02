module wrike {
    export module nc {
        export function NCViewTemplate(vm:NCView) {
            return d.root(
                d.when(new Atom(a=>NCView.activeType.val == NCTabs.Mentions), ()=>
                    new MentionsView()),
                d.when(new Atom(a=>NCView.activeType.val == NCTabs.Inbox), ()=>
                    new InboxView()),
                new TabsView());
        }

        export function MentionsViewTemplate(vm:MentionsView) {
            return d.root(
                d.map('div.mentions', vm.items, (mention:Mention)=>
                    d('div.item',
                        d('div.title', mention.task.summary),
                        d('div.description', mention.task.description),
                        d('div.pin', mention.isPinned),
                        d('div.read', mention.isRead))))
        }

        export function InboxViewTemplate(vm:InboxView) {
            return d.root(
                d('div.inbox',
                    d.map('div.item', vm.items, (inbox:Inbox)=>
                        d('div.item',
                            d.when(inbox.assigment, ()=>
                                d('div.assigment-item', inbox.assigment.task.summary)),
                            d.when(inbox.marketing, ()=>
                                d('div.marketing-item', inbox.marketing.val.title))))))

        }

        export function TabsViewTemplate(vm:TabsView) {
            return d.root(
                d('div.tabs',
                    d('div.button', 'Mentions').attrs({
                        classSet: {selected: new Atom(a=> NCView.activeType.val === NCTabs.Mentions)},
                        onclick: new Atom(a=> NCView.activeType.val = NCTabs.Mentions)
                    }),

                    d('div.button', "Inbox").attrs({
                        classSet: {selected: new Atom(a=> NCView.activeType.val === NCTabs.Inbox)},
                        onclick: ()=> NCView.activeType.val = NCTabs.Inbox
                    })))
        }
    }
}