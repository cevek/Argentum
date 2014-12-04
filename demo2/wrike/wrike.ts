/// <reference path="../all.ts"/>
/// <reference path="Task.ts"/>
/// <reference path="User.ts"/>
/// <reference path="nc/nc.ts"/>

var glob:any = {};


module wrike {
    console.log(new nc.NCView());

    glob.vdom = Arg.render(document.body, new nc.NCView());
}
