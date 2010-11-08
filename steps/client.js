var DNode = require('dnode');
var EventEmitter = require('events').EventEmitter;

DNode.connect(5050, function (remote) {
    var em = new EventEmitter;
    em.on('data', function (n) {
        console.log('data: ' + n);
    });
    
    var emit = em.emit.bind(em);
    remote.subscribe(emit);
});
