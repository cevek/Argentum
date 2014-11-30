module wrike {
    export module nc {
        export function NCViewTemplate(vm:NCView) {
            return [
                Arg.when(()=>NCView.activeType.val == NCTabs.Mentions, ()=>new MentionsView()),
                Arg.when(()=>NCView.activeType.val == NCTabs.Inbox, ()=>new InboxView()),
                new TabsView()
            ];
        }

        export function MentionsViewTemplate(vm:MentionsView) {
            return (
                Arg.dom('div.mentions', null,
                    Arg.map(vm.items, (mention:Mention)=>
                            Arg.dom('div.item', null,
                                Arg.dom('div.title', null, mention.task.summary),
                                Arg.dom('div.description', null, mention.task.description),
                                Arg.dom('div.pin', null, mention.isPinned),
                                Arg.dom('div.read', null, mention.isRead)
                            )
                    )
                )
            );
        }

        export function InboxViewTemplate(vm:InboxView) {
            return (
                Arg.dom('div.inbox', null,
                    Arg.map(vm.items, (inbox:Inbox)=>
                            Arg.dom('div.item', null,
                                Arg.when(inbox.assigment, a=>
                                        Arg.dom('div.assigment-item', null, inbox.assigment.task.summary)
                                ),
                                Arg.when(inbox.marketing, a=>
                                        Arg.dom('div.marketing-item', null, inbox.marketing.val.title)
                                )
                            )
                    )
                )
            )
        }

        export function TabsViewTemplate(vm:TabsView) {
            return (
                Arg.dom('div.tabs', null,
                    Arg.dom('div.button', {
                        classSet: {
                            selected: ()=>NCView.activeType.val === NCTabs.Mentions
                        },
                        onclick: ()=>NCView.activeType.val = NCTabs.Mentions
                    }, "Mentions"),

                    Arg.dom('div.button', {
                        classSet: {selected: ()=>NCView.activeType.val === NCTabs.Inbox},
                        onclick: ()=> NCView.activeType.val = NCTabs.Inbox
                    }, "Inbox")
                )
            )
        }

    }
}