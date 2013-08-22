(function(cast, $) {

    $.widget("cast.player", {
        options:
        {
            subscribe: function() {
                cast.log("the subscription not yet been set");
            },
            publish: function() {
                console.log("publish not yet been set ");
            }
        },
        _create: function() {
            console.log("in player ");
            console.log("status is going initialized");
            this._bindPlayerEndEvent();
            this.options.subscribe(cast.events.listload, this._listsubscription, this);
            this.options.subscribe(cast.events.vrecording, this._pausePlaying, this);
            this.options.subscribe(cast.events.startplayer, this._playIfPause, this);

        },
        _bindPlayerEndEvent: function() {
            var that = this;

            var player = document.getElementById('audioplayer');
            this.element.bind('ended', function(event) {

                // player.pause();
                that._updateBroadCastList();
            }
            );
        },
        _updateBroadCastList: function() {

            this._publishUpdateList(
                {
                    message: "update"
                }
            );
            // alert('success');

        },
        _publishUpdateList: function(data) {
            var player = document.getElementById('audioplayer');
            //player.currentTime = 0;
            this.options.publish(cast.events.trackended, data);

            // player.load();
            //player.pause();
            // player.currentTime = 0;

        },
        _listsubscription: function(url) {
            this._playNext(url);
            console.log("Player:listsubscription " + url.message);
            //console.log(this.element.player);
            /*    var player = document.getElementById('audioplayer');
            console.log(player.getAttribute(['src']));
            if (player.paused) {
                player.load();
                player.play();
                console.log("paused");
            }
            else {
                
                player.pause();
            }
            */
        },
        _pausePlaying: function() {
            var player = $("#audioplayer");
            console.log("in pause palying");
            player[0].pause();

        },
        _playIfPause:function () {
            console.log("in play if pause");
            var player = $("#audioplayer");
           
                player[0].play();
        },
        _playNext: function(url) {
            //   this.element.find('source').attr('src', url);
            //$(this).children('source').attr('src', url.message.show());

            console.log("Player:_playNext " + url.message);
            // this.element.find('source').attr('src', url.message);
            //var player = document.getElementById('audioplayer');
            //player.empty();
            //player.src+ =url.message;
            var player = $("#audioplayer");
            var rootUrl =url.message;
            console.log("root url is" + rootUrl);
            $("#mp3src").attr('src', rootUrl);
            player[0].pause();
            player[0].load();
            player[0].play();

            // player.load();
            // player.play();
            //    $("#audioplayer").removeAttr("src1");
            //    $('#audioplayer').removeAttr('src');
            //   $this = $(this);

            console.log("<<<<<<<<<<<<<<<<<<<removed source>>>>>>>>>>>>>>>>>>");
            //$('#audioplayer').attr('src',@Url.Content(url.message));
            // player.src = url.message;
            //  $('#audioplayer')[0].load();
            //$('#audioplayer')[0].play();
            // player.play();
            // this.element.play();
            // console.log("Player:_playNext " + url.message);
            // this.element.children('source').

        }
    });
}(this.cast = this.cast || {}, jQuery));