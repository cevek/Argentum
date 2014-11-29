/// <reference path="../all.ts"/>
/// <reference path="Task.ts"/>
/// <reference path="User.ts"/>
/// <reference path="nc/nc.ts"/>


module wrike {
    console.log(new nc.NCView());

    Arg.render(document.body, new nc.NCView());
}
