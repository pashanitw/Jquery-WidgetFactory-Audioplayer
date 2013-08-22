(function(cast, $) {
    $.widget("cast.queue", {
        options:
        {
            subscribe: function() {
                cast.log("the subscription not yet been set");
            }
        },
        _create: function() {
            console.log("status is going initialized");
            this.options.subscribe(cast.events.status, this._statussubscription, this);

        },
        _statussubscription: function(status) {
            this.element.text(status.message).show();
        }
    });
}(this.cast = this.cast || {}, jQuery));