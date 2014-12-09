var defaultFields = ['projectShortName', 'numberInProject', 'summary', 'description', 'created', 'updated', 'resolved',
    'updaterName', 'updaterFullName', 'reporterName', 'reporterFullName', 'commentsCount', 'votes', 'attachments', 'links'];

class User {
    firstName:string;
    lastName:string;

    constructor(obj:any = {}) {
        this.firstName = obj.firstName;
        this.lastName = obj.lastName;
    }
}

class $W {
    issues:Issue[] = [];

    constructor() {

    }
}

class UserComment {
    author:string;
    authorFullName:string;
    created:number;
    deleted:number;
    updated:number;
    id:string;
    text:string;

    constructor(obj:any = {}) {
        this.author = obj.author;
        this.authorFullName = obj.authorFullName;
        this.created = obj.created;
        this.deleted = obj.deleted;
        this.updated = obj.updated;
        this.id = obj.id;
        this.text = obj.text;
    }
}

class IssueLink {
    url:string;
    value:string;

    constructor(obj:any = {}) {
        this.url = 'http://youtrack.jetbrains.com/issue/' + obj.value;
        this.value = obj.value;
    }
}

class IssueAttachment {
    url:string;
    value:string;

    constructor(obj:any = {}) {
        this.url = obj.url;
        this.value = obj.value;
    }
}
class Issue {
    id:number;
    projectShortName:string;
    numberInProject:string;
    summary:string;
    description:string;
    created:number;
    updated:number;
    updaterName:string;
    updaterFullName:string;
    reporterName:string;
    reporterFullName:string;
    priority:string;
    type:string;
    state:string;
    assignee:string;
    subsystem:string;
    fixVersions:string;
    affectedVersion:string;
    severity:string;

    votes:number;
    commentsCount:number;

    comments:UserComment[] = [];
    links:IssueLink[] = [];
    attachments:IssueAttachment[] = [];

    constructor(obj:any = {}) {
        var fields = obj.fields;
        this.id = obj.id;
        this.summary = fields.summary;
        this.description = fields.description || '';
        this.created = fields.created;
        this.projectShortName = fields.projectShortName;
        this.numberInProject = fields.numberInProject;
        this.updated = fields.updated;
        this.updaterName = fields.updaterName;
        this.updaterFullName = fields.updaterFullName;
        this.reporterName = fields.reporterName;
        this.reporterFullName = fields.reporterFullName;
        this.votes = fields.votes;
        this.commentsCount = fields.commentsCount;

        this.priority = fields.Priority[0];
        this.state = fields.State[0];
        this.type = fields.Type[0];
        this.assignee = fields.Assignee && fields.Assignee[0].fullName;
        this.subsystem = fields.Subsystem[0];
        this.fixVersions = fields['Fix versions'] && fields['Fix versions'][0];
        this.affectedVersion = fields['Affected versions'] && fields['Affected versions'][0];
        this.severity = fields.Severity;

        for (var i = 0; i < obj.comment.length; i++) {
            this.comments.push(new UserComment(obj.comment[i]));
        }

        if (obj.fields.attachments) {
            for (var i = 0; i < obj.fields.attachments.length; i++) {
                this.attachments.push(new IssueAttachment(obj.fields.attachments[i]));
            }
        }

        if (obj.fields.links) {
            for (var i = 0; i < obj.fields.links.length; i++) {
                this.links.push(new IssueLink(obj.fields.links[i]));
            }
        }

    }
}
/*

 var $w = new $W;

 //$w.issues.get.push(new Issue({id: 1, title: 'lala1'}));
 $w.issues.add(new Issue({id: 1, title: '123', description: '123', created: 3324545, updated: 23423}));
 $w.issues.get(0).users.add(new User({firstName: 'bababa', lastName: 'asbababa'}));

 var a = new Atomic<number>(100);
 var b = new Atomic<number>(()=>a.get + 100);
 console.log(b.get);
 a.set = 500;
 console.log(b.get);

 var c = new Atomic(()=>$w.issues.get(0).user.get.firstName.get);
 c.addListener(function (val) {
 console.log('Changed', val);

 });

 $w.issues.get(0).user.get.firstName.set = 'Steven';
 $w.issues.get(0).user.set = new User({firstName: 'Ali', lastName: 'Baba'});
 $w.issues.get(0).user.set = new User({firstName: 'John', lastName: 'Marko'});

 for (var i = 0; i < 100; i++) {
 $w.issues.add(new Issue({
 id: i,
 title: 'John ' + i,
 description: i + i + i,
 created: 10000 + i,
 updated: 20000 + i
 }));
 }

 data.forEach(function (issue) {
 issue.fields = {};
 issue.field.forEach(function (field) {
 issue.fields[field.name] = field.value;
 });
 });
 */

declare var data:any[];

var $w = new $W();
var first = data[0];
first.fields.links = [{value: '12312312'}];

//$w.issues.add(new Issue(first));

for (var i = 0; i < data.length; i++) {
    $w.issues.push(new Issue(data[i]));
}

function wrapText(text:string, len:number) {
    return text && text.length > len ? text.substr(0, len) + '...' : text;
}

/*
 class AADFASF  {
 componentDidMount(){

 }
 destroy(){

 }
 constructor(){
 this.template();
 }
 }
 */

class PanelView {
    template:any;
    issues:Issue[] = [];

    constructor() {
        this.template = doLayout();
    }

    /*itemTemplate(issue: Issue) {
     if (issue.id == 1) {
     return this.itemTemplate;
     }
     }*/

}

function abc() {
    return d('.hello', 'ABC');
}

/*function doLayout(vm) {
 document.getElementById('test').innerHTML = '';
 console.profile('perf');
 console.time('perf');
 render(document.getElementById('test'),
 d('',
 //document.createElement(''),
 map(vm.issues, (issue) => vm.itemTemplate(issue))
 )
 );

 console.log(insertBeforeCount);

 console.timeEnd('perf');
 console.profileEnd('perf');
 }*/

function doLayout() {

    document.getElementById('test').innerHTML = '';
    console.profile('perf');
    console.time('perf');
    Arg.publicRender(document.getElementById('test'),
        d('.issues',
            d.map($w.issues,
                issue =>
                    d('.issue',
                        d('.line',
                            d('span.field', 'ID:'),
                            d('span', issue.id + ' / ' + issue.summary)
                        ),
                        d('.line',
                            d('span.field', 'Summary:'),
                            d('span', issue.summary)
                        ),
                        d('.line',
                            d('span.field', 'Description:'),
                            d('span', wrapText(issue.description, 100))
                        ),

                        d('.line',
                            d('span.field', 'Reporter:'),
                            d('span.value', issue.reporterFullName)
                        ),
                        d('.line',
                            d('span.field', 'Updater:'),
                            d('span.value', issue.updaterFullName)
                        ),
                        d('.line',
                            d('span.field', 'Priority:'),
                            d('span.value', issue.priority)
                        ),
                        d('.line',
                            d('span.field', 'Type:'),
                            d('span.value', issue.type)
                        ),
                        d('.line',
                            d('span.field', 'State:'),
                            d('span.value', issue.state)
                        ),
                        d('.line',
                            d('span.field', 'Assignee:'),
                            d('span.value', issue.assignee)
                        ),
                        d('.line',
                            d('span.field', 'Subsystem:'),
                            d('span.value', issue.subsystem)
                        ),
                        d('.line',
                            d('span.field', 'Fix versions:'),
                            d('span.value', issue.fixVersions)
                        ),
                        d('.line',
                            d('span.field', 'Affected versions:'),
                            d('span.value', issue.affectedVersion)
                        ),
                        d('.line',
                            d('span.field', 'Severity:'),
                            d('span.value', issue.severity)
                        ),

                        d('.line',
                            d('span.field', 'Links:'),
                            d('span.value',
                                d.map(issue.links,
                                    link =>
                                        d('a', {target: '_blank', href: link.url}, link.value), ', ')
                            )
                        ),
                        d('.line',
                            d('span.field', 'Attachments:'),
                            d('span.value',
                                d.map(issue.attachments,
                                    attach =>
                                        d('a', {target: '_blank', href: attach.url}, attach.value), ', ')
                            )
                        ),

                        d('.comments',
                            d('.title', 'Comments'),
                            d.map(issue.comments,
                                comment =>
                                    d('.comment',
                                        d('.author', comment.authorFullName),
                                        d('.text', comment.text)
                                    )
                            )
                        )
                    )
            )
        )
    );

    //console.log(insertBeforeCount);

    console.timeEnd('perf');
    console.profileEnd('perf');
}

//setInterval(doLayout, 1000);

doLayout();

/*

 var getOwn = Object.getOwnPropertyNames;
 Object.getOwnPropertyNames = function (obj) {
 //console.log(obj.join(','));
 var props = getOwn(obj);
 var newProps = [];
 for (var i = 0; i < props.length; i++) {
 if (props[i][0] === '$') {
 continue;
 }
 //console.log(props[i]);

 newProps.push(props[i]);
 }

 return newProps;
 };

 var getOwnDescr = Object.getOwnPropertyDescriptor;
 Object.getOwnPropertyDescriptor = function (obj, prop) {
 var d = getOwnDescr(obj, prop);
 if (d.get) {
 d.value = d.get();
 }
 delete d.get;
 delete d.set;
 return d;
 }
 */

interface console {
    profileEnd(name:string): void;
}
