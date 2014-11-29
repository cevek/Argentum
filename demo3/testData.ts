///<reference path="templater.ts"/>

var defaultFields = ["projectShortName", "numberInProject", "summary", "description", "created", "updated", "resolved",
    "updaterName", "updaterFullName", "reporterName", "reporterFullName", "commentsCount", "votes", "attachments", "links"];

class AUser extends Atomic<User> {}
class User {
    firstName = new AString;
    lastName = new AString;

    constructor(obj:any = {}) {
        Object.freeze(this);
        this.firstName.set = obj.firstName;
        this.lastName.set = obj.lastName;
    }
}

class $W {
    issues = new AList<Issue>();

    constructor() {
        Object.freeze(this);
    }
}

class UserComment {
    author:string;
    $author = new AString;
    authorFullName:string;
    $authorFullName = new AString;
    created:number;
    $created = new ANumber;
    deleted:number;
    $deleted = new ANumber;
    updated:number;
    $updated = new ANumber;
    id:string;
    $id = new AString;
    text:string;
    $text = new AString;

    constructor(obj:any = {}) {
        Atomic.createGetters(this);
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
    $url = new AString;
    value:string;
    $value = new AString;

    constructor(obj:any = {}) {
        Atomic.createGetters(this);
        this.url = 'http://youtrack.jetbrains.com/issue/' + obj.value;
        this.value = obj.value;
    }
}

class IssueAttachment {
    url:string;
    $url = new AString;
    value:string;
    $value = new AString;

    constructor(obj:any = {}) {
        this.url = obj.url;
        this.value = obj.value;
    }
}
class Issue {
    id:number;
    $id = new ANumber;
    projectShortName:string;
    $projectShortName = new AString;
    numberInProject:string;
    $numberInProject = new AString;
    summary:string;
    $summary = new AString;
    description:string;
    $description = new AString;
    created:number;
    $created = new ANumber;
    updated:number;
    $updated = new ANumber;
    updaterName:string;
    $updaterName = new AString;
    updaterFullName:string;
    $updaterFullName = new AString;
    reporterName:string;
    $reporterName = new AString;
    reporterFullName:string;
    $reporterFullName = new AString;
    priority:string;
    $priority = new AString;
    type:string;
    $type = new AString;
    state:string;
    $state = new AString;
    assignee:string;
    $assignee = new AString;
    subsystem:string;
    $subsystem = new AString;
    fixVersions:string;
    $fixVersions = new AString;
    affectedVersion:string;
    $affectedVersion = new AString;
    severity:string;
    $severity = new AString;

    votes:number;
    $votes = new ANumber;
    commentsCount:number;
    $commentsCount = new ANumber;

    comments = new AList<UserComment>();
    links = new AList<IssueLink>();
    attachments = new AList<IssueAttachment>();

    constructor(obj:any = {}) {
        Atomic.createGetters(this);
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
            this.comments.add(new UserComment(obj.comment[i]));
        }

        if (obj.fields.attachments) {
            for (var i = 0; i < obj.fields.attachments.length; i++) {
                this.attachments.add(new IssueAttachment(obj.fields.attachments[i]));
            }
        }

        if (obj.fields.links) {
            for (var i = 0; i < obj.fields.links.length; i++) {
                this.links.add(new IssueLink(obj.fields.links[i]));
            }
        }

    }
}
/*

 var $w = new $W;

 //$w.issues.get.push(new Issue({id: 1, title: "lala1"}));
 $w.issues.add(new Issue({id: 1, title: '123', description: '123', created: 3324545, updated: 23423}));
 $w.issues.get(0).users.add(new User({firstName: 'bababa', lastName: 'asbababa'}));

 var a = new Atomic<number>(100);
 var b = new Atomic<number>(()=>a.get + 100);
 console.log(b.get);
 a.set = 500;
 console.log(b.get);

 var c = new Atomic(()=>$w.issues.get(0).user.get.firstName.get);
 c.addListener(function (val) {
 console.log("Changed", val);

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
    $w.issues.add(new Issue(data[i]));
}

function wrapText(text, len) {
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
    template: any;
    issues = [];
    constructor(){
        this.template = doLayout(this);
    }

    itemTemplate(issue){
        if (issue.id == 1)

        return this.itemTemplate;
    }

}


function abc() {
    return $a('div.hello', null, 'ABC');
}


function doLayout(vm) {
    document.getElementById('test').innerHTML = '';
    console.profile('perf');
    console.time('perf');
    render(document.getElementById('test'),
        $a('div', null,
            //document.createElement('div'),
            map(vm.issues, (issue) => vm.itemTemplate(issue))
        )
    );


    console.log(insertBeforeCount);

    console.timeEnd('perf');
    console.profileEnd('perf');
}
function doLayout(vm) {
    document.getElementById('test').innerHTML = '';
    //console.profile('perf');
    console.time('perf');
    render(document.getElementById('test'),
        $a('div', null,
            //document.createElement('div'),
            map($w.issues, (issue)=>
                    $a('div.issue', null,
                        $a('div.line', null,
                            $a('span.field', null, 'ID:'),
                            $a('span', null, ()=>issue.id + ' / ' + issue.summary)
                        ),
                        $a('div.line', null,
                            $a('span.field', null, 'Summary:'),
                            $a('span', null, ()=>issue.summary)
                        ),
                        $a('div.line', null,
                            $a('span.field', null, 'Description:'),
                            $a('span', null, ()=>wrapText(issue.description, 100))
                        ),

                        $a("div.line", null,
                            $a("span.field", null, "Reporter:"),
                            $a("span.value", null, ()=>issue.reporterFullName)
                        ),
                        $a("div.line", null,
                            $a("span.field", null, "Updater:"),
                            $a("span.value", null, ()=>issue.updaterFullName)
                        ),
                        $a("div.line", null,
                            $a("span.field", null, "Priority:"),
                            $a("span.value", null, ()=>issue.priority)
                        ),
                        $a("div.line", null,
                            $a("span.field", null, "Type:"),
                            $a("span.value", null, ()=>issue.type)
                        ),
                        $a("div.line", null,
                            $a("span.field", null, "State:"),
                            $a("span.value", null, ()=>issue.state)
                        ),
                        $a("div.line", null,
                            $a("span.field", null, "Assignee:"),
                            $a("span.value", null, ()=>issue.assignee)
                        ),
                        $a("div.line", null,
                            $a("span.field", null, "Subsystem:"),
                            $a("span.value", null, ()=>issue.subsystem)
                        ),
                        $a("div.line", null,
                            $a("span.field", null, "Fix versions:"),
                            $a("span.value", null, ()=>issue.fixVersions)
                        ),
                        $a("div.line", null,
                            $a("span.field", null, "Affected versions:"),
                            $a("span.value", null, ()=>issue.affectedVersion)
                        ),
                        $a("div.line", null,
                            $a("span.field", null, "Severity:"),
                            $a("span.value", null, ()=>issue.severity)
                        ),

                        $a("div.line", null,
                            $a("span.field", null, "Links:"),
                            $a("span.value", null,
                                map(issue.links, (link)=>
                                    $a("a", {target: "_blank", href: link.url}, ()=>link.value), ', ')
                            )
                        ),
                        $a("div.line", null,
                            $a("span.field", null, "Attachments:"),
                            $a("span.value", null,
                                map(issue.attachments, (attach) =>
                                    $a("a", {target: "_blank", href: attach.url}, ()=>attach.value), ', ')
                            )
                        ),

                        $a("div.comments", null,
                            $a("div.title", null, "Comments"),
                            map(issue.comments, (comment) =>
                                    $a("div.comment", null,
                                        $a("div.author", null, ()=>comment.authorFullName),
                                        $a("div.text", null, ()=>comment.text)
                                    )
                            )
                        )
                    )
            )
        )
    );

    //console.log(insertBeforeCount);

    console.timeEnd('perf');
    //console.profileEnd('perf');
}

//setInterval(doLayout, 1000);

//doLayout();


/*

var getOwn = Object.getOwnPropertyNames;
Object.getOwnPropertyNames = function (obj) {
    //console.log(obj.join(","));
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

interface Console {
    profileEnd(name:string);
}
