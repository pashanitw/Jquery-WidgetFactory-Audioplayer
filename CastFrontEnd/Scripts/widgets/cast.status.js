(function(cast, $) {
    $.widget("cast.status", {
        options:
        {
            subscribe: function() {
                cast.log("the subscription not yet been set");
            }
        },
        _create: function() {
            console.log("status is going initialized");
            this.options.subscribe(cast.events.broadcast, this._statussubscription, this);
            this.options.subscribe(cast.events.listload, this._nowplaying, this);


        },
        _statussubscription: function(status) {
            this.element.text("your recording success fully broadcasted !").show();
            var that = this;
            console.log("in status widget");
            setTimeout(function () {

                that.element.fadeOut(1000);
            }, 4000);
        },
        _nowplaying: function (status) {
            this.element.text("Now playing   " + status.tracktitle).show();
            var that = this;
            setTimeout(function () {

                that.element.fadeOut(1000);
            }, 4000);
        }
    });
}(this.cast = this.cast || {}, jQuery));