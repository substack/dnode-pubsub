function publish (ev, n) {
    console.log(ev + ': ' + n);
}

setInterval(function () {
    var n = Math.floor(Math.random() * 100);
    publish('data', n);
}, 1000);
