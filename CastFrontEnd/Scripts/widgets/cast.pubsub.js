

(function(cast, $) {
    
    console.log("in pubsub function");
    cast.pubsub = (function() {
        var queue = [],
            that = {};

        that.publish = function(eventName, data) {
            var context, intervalId, idx = 0;
            if (queue[eventName]) {
                intervalId = setInterval(function() {
                    if (queue[eventName][idx]) {
                        try {
                            context = queue[eventName][idx].context || this;
                            queue[eventName][idx].callback.call(context, data);
                        } catch(e) {
                            
                            console.log('An error occurred in one of the callbacks for the event "' + eventName + '"');
                            console.log('The error was: "' + e + '"');
                        }

                        idx += 1;
                    } else {
                        clearInterval(intervalId);
                    }
                }, 0);

            }
        };
       
        that.subscribe = function(eventName, callback, context) {
            console.log("in pubsub subscribe function");
            if (!queue[eventName]) {
                queue[eventName] = [];
            }
            queue[eventName].push({
                callback: callback,
                context: context
            });

        };
        that.unsubscribe = function(eventName, callback, context) {
            if (queue[eventName]) {
                queue[eventName].pop({
                    callback: callback,
                    context: context
                });
            }
        };

        return that;
    }());

}(this.cast = this.cast || {}, jQuery));