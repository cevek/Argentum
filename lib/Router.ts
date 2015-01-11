module ag {
    export class Rout<T> {
        private regexp:RegExp;
        private _url:string;

        constructor(url:string) {
            var r = url = '/' + url.replace(/(^\/+|\/+$)/g, '') + '/';
            r = r.replace(/(:([^\/]+))/g, '([^\/]+)');
            this.regexp = new RegExp(r);
            this._url = url;
            Rout.routes.push(this);
        }

        url(paramss:T) {
            var url = this._url;
            var params = <any>paramss;
            for (var i in params) {
                var param = params[i];
                url = url.replace(':' + i, param);
            }
            return url;
        }

        is(url:string) {
            return this.regexp.test(url);
        }

        static activeRoute = new Atom<Rout<any>>(Rout);

        static listen() {
            window.addEventListener('popstate', function (e:PopStateEvent) {
                var route = Rout.routes.filter(route => route.is(location.pathname)).pop();
                Rout.activeRoute.set(route);
                console.log(route);
            }, false);
        }

        private static routes:Rout<any>[] = [];
    }

    /*
     class Route {
     public fullUrl:RegExp;

     constructor(public url:string, public component:(...urlParams:string[])=>Cmp, public nestedRouter?:Router) {

     }
     }
     export class Router {
     private routes:Route[] = [];

     route(url:Rout, component:(...urlParams:string[])=>Cmp, nestedRouter?:Router) {
     //this.routes.push(new Route(url, component, nestedRouter));
     return this;
     }

     listen() {
     var routes = this.nested('^/');
     console.log(routes);
     window.addEventListener('popstate', function (e:PopStateEvent) {
     console.log(e);
     }, false);

     return this;
     }

     private nested(prefix:string) {
     var routes:Route[] = [];
     for (var i = 0; i < this.routes.length; i++) {
     var route = this.routes[i];
     var regexps = route.url.replace(/(^\/+|\/+$)/g, '') + '/';
     regexps = regexps.replace(/(:[^\/]+)/g, '([^\/]+)');
     var p = prefix + regexps;
     //regexps = regexps.replace(/\/+/g, '\/');
     route.fullUrl = new RegExp(p);
     routes.push(route);
     console.log(p, route.url);

     if (route.nestedRouter) {
     routes = routes.concat(route.nestedRouter.nested(p));
     }
     }
     return routes;
     }

     default() {
     return this;
     }
     }*/

    export class Link {
        constructor(private attrs:Attrs, private children:any) {
            this.attrs.onclick = e=> this.click(e)
        }

        click(e:Event) {
            e.preventDefault();
            history.pushState(this.attrs['state'], '', this.attrs.href);
        }

        render() {
            return dom('a', this.attrs, this.children);
        }
    }
}

