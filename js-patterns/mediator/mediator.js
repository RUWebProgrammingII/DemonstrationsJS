var mediator = (function() {
    // Storage for topic / events
    var channels = {};

    // Subscribe to a channel
    function subscribe(channel, fn) {
        if (!channels[channel]) { channels[channel] = []; }
        channels[channel].push({ context: this, callback: fn });
        return this;
    };

    // Publish to a channel
    function publish(channel) {
        if (!channels[channel]) { return false; }
        var args = Array.prototype.slice.call(arguments, 1);
        channels[channel].forEach(function (c) {
            c.callback.apply(c.context, args);
        });
        return this;
    };

    return {
        publish: publish,
        subscribe: subscribe,
        installTo: function(obj) {
            obj.subscribe = subscribe;
            obj.publish = publish;
        }
    }
})();

(function (m) {
    function subscriberOne(arguments) {
        console.log(arguments);
    };
    function subscriberTwo(arguments) {
        console.log(arguments);
    };

    // Subscribe to topic 'message' and setup two subscribers
    m.subscribe('message', subscriberOne);
    m.subscribe('message', subscriberTwo);

    // Publish to the topic 'message'
    m.publish('message', 'Hello Subscribers!');
})(mediator);
