/**
 * node.js 实现 curl 功能
 *
 * npm install request
 */
var request = require('request');
request.post(
    {
        // url: 'http://hovertree.com:9095/phpTest.php',
        url: 'https://www.example.com/',
        // form: {
        //     username: 'hahaha',
        //     password: 'wowowowow'
        // },
        encoding: 'utf8'
    },
    function(error, response, body) {
        if (response.statusCode == 200) {
            console.log('body::', body);
        } else {
            console.log(response.statusCode);
        }
    }
)
