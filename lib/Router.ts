module ag {
    export class Route<T> {
        private regexp:RegExp;
        private url:string;
        private names:string[] = [];
        private currentUrl:string;

        constructor(url:string) {
            url = '/' + url.replace(/(^\/+|\/+$)/g, '');
            url = url === '/' ? url : url + '/';
            var m = url.match(/(:([^\/]+))/g);
            var v:RegExpExecArray;
            var reg = /:([^\/]+)/g;
            while (v = reg.exec(url))
                this.names.push(v[1]);
            var r = '^' + url.replace(/(:([^\/]+))/g, '([^\/]+)') + '$';
            this.regexp = new RegExp(r);
            this.url = url;
            //console.log(this);
            Route.routes.push(this);
        }

        toURL(paramss:T) {
            var url = this.url;
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

        static activeRoute = new Atom<Route<any>>(Route);

        static urlChanged() {
            var route = Route.routes.filter(route => route.is(location.pathname)).pop();
            if (route) {
                route.currentUrl = location.pathname;
            }
            Route.activeRoute.set(route);
            console.log(route);
        }

        static listen() {
            Route.urlChanged();
            window.addEventListener('popstate', Route.urlChanged, false);
        }

        getParams():T {
            var ret:any = {};
            var m = this.currentUrl.match(this.regexp);
            if (m) {
                for (var i = 1; i < m.length; i++) {
                    ret[this.names[i - 1]] = m[i];
                }
            }
            //console.log(ret);
            return ret;
        }

        private static routes:Route<any>[] = [];
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
            Route.urlChanged();
        }

        render() {
            return dom('a', this.attrs, this.children);
        }
    }
}

