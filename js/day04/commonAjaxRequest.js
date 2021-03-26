/* 封装的通用 ajax 请求 */
function fetch(url, config = {}) {
    if (window.fetch) return window.fetch(url, config);
    return new Promise((resolve, reject) => {
        function createXHR() {
            if (typeof XMLHttpRequest !== undefined) {
                return new XMLHttpRequest();
            }
            // 兼容早期 IE
            if (typeof ActiveXObject !== undefined) {
                if (typeof arguments.callee.activeXString !== 'string') {
                    var versions = ['MSXML2.XMLHttp.6.0', 'MSXML2.XML2.XMLHttp.3.0', 'MSXML2.XMLHttp'];
                    for (var i = 0; i < versions.length; i++) {
                        try {
                            new ActiveXObject(versions[i]);
                            arguments.callee.activeXString = versions[i];
                            break;
                        } catch (e) { }
                    }
                }
                return new ActiveXObject(arguments.callee.activeXString);
            }
            throw new Error('不⽀持 xhr 相关内容');
        }

        var xhr = createXHR();
        
        xhr.onreadystatechange = function () {
            console.log(xhr);
            if (xhr.readyState !== 4) return;
            var options = {
                status: xhr.status,
                statusText: xhr.statusText
            };
            var body = 'response' in xhr ? xhr.response : xhr.responseText;
            var response = {
                status: options.status || 200,
                statusText: options.statusText || 'ok',
                ok: options.status >= 200 && options.status < 300,
                text() {
                    if (typeof body === 'string') {
                        return Promise.resolve(body);
                    }
                },
                json() {
                    return this.text().then(JSON.parse);
                }
            };
            resolve(response);
        }
        xhr.open(config.method || 'get', url, true);
        xhr.send();
    });
}
