/// <reference path="../typings/es6-promise/es6-promise.d.ts"/>

class HTTP {
    static request<T>(method:string, url:string, data?:any) {
        return new Promise<T>((resolve, reject)=> {
            var req = new XMLHttpRequest();
            req.open(method, url, true);
            req.onreadystatechange = function () {
                if (req.readyState == 4) {
                    if (req.status == 200) {
                        try {
                            var data = JSON.parse(req.responseText);
                            resolve(data);
                        }
                        catch (e) {
                            console.error(e);
                            reject(req.responseText);
                        }
                    } else {
                        reject(req);
                    }
                }
            };
            req.send(data);
        });
    }

    static get(url:string) {
        return HTTP.request('GET', url);
    }
}