
var observer = (function() {
    var topics = {},
        subId = -1;

    return {
        publish: function(topic, args) {
            if (!topics[topic]) { return false; }
            topics[topic].forEach(function(t) {
                t.func(args);
            });
            return this;
        },
        subscribe: function(topic, fn) {
            if (!topics[topic]) { return false; }
            topics[topic].append({ id: ++subId, func: fn });
            return subId;
        },
        unsubscribe: function(subId) {
            for (var prop in topics) {
                if (topics.hasOwnProperty(prop)) {
                    var topic = topics[prop];
                    if (topic) {
                        topic.forEach(function(t, idx, arr) {
                            if (t.id === subId) {
                                arr.splice(idx, 1);
                            }
                        });
                    }
                }
            }
            return this;
        }
    };
})();

(function (o) {

    document.getElementsByClassName('input[type="submit"]').addEventListener('click', function () {
        // Every time someone clicks a submit button, we want to log it!
        o.publish('submission', [ 'Submitting button @ ' + new Date().getDate() ]);
    });

    o.subscribe('submission', function(args) {
        // I log things!
        logDb.log(args);
    });

})(observer);
