import 'whatwg-fetch';
import 'es6-promise';

export default function (url) {
    return fetch(url, {
        credentials: 'include',
    });
}
