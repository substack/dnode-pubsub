var connect = require('connect');
var webserver = connect.createServer(
    connect.staticProvider(__dirname)
).listen(5051);
console.log('http://localhost:5051/');

var Hash = require('traverse/hash'); // from my previous blog post!
var subs = {};

function publish () {
    var args = arguments;
    Hash(subs).forEach(function (emit) {
        emit.apply(emit, args);
    });
}

setInterval(function () {
    var n = Math.floor(Math.random() * 100);
    publish('data', n);
}, 1000);

var DNode = require('dnode');
DNode(function (client, conn) {
    this.subscribe = function (emit) {
        subs[conn.id] = emit;
        
        conn.on('end', function () {
            delete subs[conn.id];
        });
    };
}).listen(5050).listen(webserver);
