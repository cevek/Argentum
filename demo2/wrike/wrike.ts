/// <reference path="../all.ts"/>
/// <reference path="Task.ts"/>
/// <reference path="User.ts"/>
/// <reference path="nc/nc.ts"/>

var glob:any = {};

module wrike {
    console.log(new nc.NCView());

//    console.profile('perf');
    glob.vdom = Arg.convertToTree(new nc.NCView());

    setTimeout(function () {
        Arg.publicRender(document.body, glob.vdom);
    }, 10);
    //glob.vdom = Arg.publicRender(document.body, new nc.NCView());

    /*
     setTimeout(function () {
     console.profileEnd('perf');
     }, 1000);
     */

}
