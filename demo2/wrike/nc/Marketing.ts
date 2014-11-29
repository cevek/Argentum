/// <reference path="nc.ts"/>
module wrike {
    export module nc {
        export class Marketing extends NCItem{
            title:string = "It's marketing "+Math.random().toString(33).substr(2,3);
            description:string = 'New cool feature';
            buttonText:string = 'Whoa!';
            url:string = 'http://ya.ru';
            imageUrl:string = 'http://yastatic.net/morda-logo/i/logo.png';
        }
    }
}








