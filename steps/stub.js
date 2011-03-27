var Hash = require('hashish');
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
    // ...
}.listen(5050);
