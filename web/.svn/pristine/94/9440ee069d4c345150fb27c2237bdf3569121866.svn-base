import {baseUrl} from './env2'

export default async (url = '', data = {}, type = 'GET') => {
    url = baseUrl + url;
    return new Promise((resolve, reject) => {
        var opt = {};
        opt.method = type.toUpperCase() || 'POST';
        opt.url = url || '';
        opt.data = data || null;
        opt.success = opt.success || function () {
        };
        var xmlHttp = null;
        if (XMLHttpRequest) {
            xmlHttp = new XMLHttpRequest();
        }
        else {
            xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
        }
        var params = [];
        for (var key in opt.data) {
            params.push(key + '=' + opt.data[key]);
        }
        var postData = params.join('&');
        if (opt.method.toUpperCase() === 'POST') {
            xmlHttp.open(opt.method, opt.url);
            xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
            xmlHttp.send(postData);
        }
        else if (opt.method.toUpperCase() === 'GET') {
            xmlHttp.open(opt.method, opt.url + '?' + postData);
            xmlHttp.send(null);
        }
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                let obj = xmlHttp.response;
                if (typeof obj !== 'object') {
                    obj = JSON.parse(obj);
                }
                resolve(obj);
            }
        };
    })
}