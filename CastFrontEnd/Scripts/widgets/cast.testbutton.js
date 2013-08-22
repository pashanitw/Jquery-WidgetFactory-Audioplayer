(function(cast, $) {
    $.widget("cast.testbutton", {
        options:
        {
            publish: function() {
                cast.log("the publish not yet been set");
            }                
        },
        _create: function() {
            this._bindnavigation();
            console.log("cast.testbutton initialized");
        },
        _publishStatus: function(status) {
            this.options.publish(cast.events.status, status);
        },
        _bindnavigation: function() {
            var that = this;
            this.element.delegate('a', 'click', function(event) {
                console.log(this.name + "name will see ");
                that._displaymessage();

            });
        },

        _displaymessage: function() {
            this._publishStatus({
                type: 'saving',
                message: 'Fulfilling the selected reminder ...',
                duration: 5000
            });
            console.log("button event raised");
        }
    });
}(this.cast = this.cast || {}, jQuery));