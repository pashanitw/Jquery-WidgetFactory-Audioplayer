(function(cast, $) {
    $.widget("cast.recorder", {
        options:
        {
            subscribe: function() {
                cast.log("the subscription not yet been set");
            },
            publish: function() {
                console.log("publish not yet been set in recorder");
            },
            recording: '',
            recordingUrl: '',
            playback: ''
        },
        _create: function() {
            console.log("------------------in recorder-----------------------");
            this._bindRecorderButtons();
            this._wamiSetup();


        },
        _wamiSetup: function() {
            Wami.setup({
                id: 'flash' // where to put the flash object
            });
            // Wami.show();
            //Wami.Show();
        },
        _bindRecorderButtons: function() {
            var that = this;
            this.element.delegate('#mylink', 'click', function(event) {
                that._showPopup();
            }
            );
            this.element.delegate('#recordButton', 'click', function(event) {
                 that._startRecording();
                $(this).hide();

                $('#playButton').hide();
                $('#pauseButton').show();

                $('#stopButton').show();
            }
            );
            this.element.delegate('#playButton', 'click', function(event) {
                that._startPlaying();
                console.log(that.options.playback);
                $(this).hide();
                $('#pauseButton').hide();
                $("#recordButton").show();
                $('#stopButton').show();

            }
            );
            this.element.delegate('#pauseButton', 'click', function(event) {
                that._pauseRecording();
                $(this).hide();
                $('#playButton').hide();
                $("#recordButton").show();
                $('#stopButton').show();
            }
            );
            this.element.delegate('#broadcastButton', 'click', function (event) {
                that._pushToBroadcastlist();

            });
            this.element.delegate('#recordSong', 'click', function(event) {
                //that._startRecording();
            }
            );
            this.element.delegate('#stopButton', 'click', function(event) {
                that._stopRecording();

                $(this).hide();
                $('#playButton').show();
                $("#recordButton").hide();
                $('#pauseButton').hide();
                $('#broadcastButton').show();

            }
            );
         
            
        },
        _pushToBroadcastlist: function () {
            var data = { username: "ananymous", message: this.options.playback, trackname: "my voice recording", imgurl: "Content/images/please.png"};
            this.options.publish(cast.events.broadcast, data);
            $('.recorderpopup').fadeOut(400);
            $('#mask').remove();
            this._startPlayer();
            

        },
        _showPopup: function() {
           
            var that = this;
            $('body').append('<div id="mask"></div>');

            var popMargTop = ($('.recorderpopup').height() + 24) / 2;
            var popMargLeft = ($('.recorderpopup').width() + 24) / 2;

            $('.recorderpopup').css({
                'margin-top': -popMargTop,
                'margin-left': -popMargLeft
            });
            $('.recorderpopup').fadeIn(400);
            $('#mask').fadeIn(500);
            $('#mask').click(function(event) {
                $('.recorderpopup').fadeOut(400);
                $('#mask').remove();
                that._startPlayer();
            }
            );
            $('#playButton').hide();
            $('#pauseButton').hide();
            $('#broadcastButton').hide();
            $('#stopButton').hide();
            $('#recordButton').show();
            this._stopPlayer();
        },
        _stopPlayer: function () {
            var data = { message: "stop playing" };
            console.log("in _stopPlayer function");
            this.options.publish(cast.events.vrecording, data);

        },
        _startPlayer: function () {
            console.log("in start Player function");
            var data = { message: "start Playing" };
            this.options.publish(cast.events.startplayer, data);

        },
        _startRecording: function() {
            this.options.recording = 'temp.wav';
            this.options.recordingUrl = cast.rootUrl + 'Home/save?recording=' + this.options.recording;
            this.options.playback ="/Content/music/temp.wav";
            console.log(this.options.recordingUrl);
            Wami.startRecording(this.options.recordingUrl);
            // update button attributes

        },
        _stopRecording: function() {
            Wami.stopRecording();
        },
        _pauseRecording: function() {
            Wami.stopListening();
        },
        _restartRecording: function() {
            wami.startListening();
        },
        _startPlaying: function() {
            Wami.startPlaying(this.options.playback);
        }        
    });
}(this.cast = this.cast || {}, jQuery));