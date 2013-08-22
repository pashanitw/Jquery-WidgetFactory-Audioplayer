(function (cast, $) {
    $.widget("cast.audiobroadcast", {
        options:
        {
            subscribe: function () {
                cast.log("the subscription not yet been set");
            }
        },
        _create: function () {
            console.log("status is going initialized");
            this._bindAudioCasterButton();
            this._bindAudioUploadformSubmitButton();
            //this.options.subscribe(cast.events.broadcast, this._statussubscription, this);
            //this.options.subscribe(cast.events.listload, this._nowplaying, this);


        },
        _showPopup: function() {
            
            console.log("in audio broadcast popup");
            var that = this;
            $('body').append('<div id="mask"></div>');

            var popMargTop = ($('#audioUploadForm').height() + 24) / 2;
            var popMargLeft = ($('#audioUploadForm').width() + 24) / 2;

            $('#audioUploadForm').css({
                'margin-top': -popMargTop,
                'margin-left': -popMargLeft
            });

            $('#audioUploadForm').fadeIn(400);

            $('#mask').fadeIn(500);

            $('#mask').click(function(event) {
               
                that._dismissPopup();
            }
            );
           
        },
        
        _bindAudioCasterButton: function() {
            var that = this;
            this.element.delegate('#audioBroadcastButton', 'click', function(event) {
                that._showPopup();
            }
            );
     
        },
       
        _dismissPopup:function() 
        {
            $('#audioUploadForm').fadeOut(400);
            $('#mask').remove();
        },
        _bindAudioUploadformSubmitButton:function()
        {
            alert("in bind audio upload form submit button");
            var that = this;
            $('#uploadForm').submit(function () {
                console.log("form submitted");
                $(this).ajaxSubmit({
                    beforeSubmit:that.ShowRequest,
                    success:that.SubmitSuccesful,
                    error: that.AjaxError,
                 });
                return false;
            }
            );
        },
        
        
    ShowRequest:function(formData, jqForm, options) {
        alert("before sending");
    },
       
    AjaxError:function() {
        alert("An AJAX error occured.");
    },
    SubmitSuccesful: function (responseText, statusText) {
        alert("SuccesMethod:\n\n" + responseText);
    }
        
    });
}(this.cast = this.cast || {}, jQuery));