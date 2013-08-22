(function(cast, $) {
    var queue = [];
    $.widget("cast.broadcastlist", {
        options: {
            sendRequest: function(ajaxOptions) { $.ajax(ajaxOptions); },
            maxlimit: 10,
            publish: function() {
                cast.log("publish is not yet been set");
            },

            subscribe: function() {
                console.log("subscribe not yet been set");
            }
        },
        _create: function() {
            // var queue1 = this.getListItems();
            console.log("(((((((in side create)))))))))");
            console.log(this.getListItems());
            console.log("in broadcastlist");
            console.log("broadcastlist going to subscribe");
            this.options.subscribe(cast.events.trackended, this._updateList, this);
            this.options.subscribe(cast.events.broadcast, this._addToBroadcastList, this);
            console.log("broadcastlist subscribed");


        },
        _addToBroadcastList: function(data) {
            var broadcastitem = { UserName: data.username, trackurl: data.message, img: data.imgurl, trackname: data.trackname };
            queue.push(broadcastitem);
            console.log("added to broadcast list");
        },
        getListItems: function() {
            console.log("in getlist items function");
          this._getdata();
        },
        _updateList: function(data) {
            // alert("in updatelist");

            $this = $(this.element);
            var that = this;
            var item = $this.find('li').first();
            item.hide('slow', function() {
                $(item).remove();

                //var k = this.options.queue.pop();
                console.log("qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq");
                //  console.log(queue.pop());
                that._appendTemplate(queue.shift());

                that._startPlaying();

            }
            );
            //  item.remove();

            // $("#broadcastlist").find('div').first().remove();
            //this.element.find('div').first().remove();
            // alert('removed');

            // player.currentTime = 0;
            console.log("dom element removed");
            //console.log(player);

        },
        _getdata: function() {
            var that = this;
            var dataurl = this.element.data('action-url');
            this.options.sendRequest({
                url: dataurl,
                success: function(data) {
                    console.log(data);
                    that._applyTemplate(data);
                    console.log("applied table");
                    var k = that.element.find('> li').length;
                    console.log("no of elements in broadcast list" + k);
                    if (k != 0) {
                        that._startPlaying();
                    }
                   
                },

                error: function() {
                    console.log("error in ajax call");
                    
                }
            });
        },
        _startPlaying: function() {
            var elem = this.element.children(':first');
           var url =elem.data('track-url');
            var trackname = elem.find(".caption1").text();
            //  var firstBroadCast = this.element.find('div').first();
            //firstBroadCast.css('backgroud-color', 'red');
            // alert(url);
            console.log("in start plying the url is" + url);
            $this = $(this.element);
            $this.find('li').first().css('background-color', 'orange');
            // alert(url);
            this._publishUrl({
                type: 'url',
                message: url,
                tracktitle:trackname
            });
            console.log("broadcastlist: _startPlaying");
        },
        _applyTemplate: function(data) {
            console.log("applying template");

            var that = this;


            console.log("1111111111111111111111111111111111111111111");
            this._pushToQueue(data);
            /*   var k = {
                UserName:
                    data[1].UserName,
                url: data[1].trackurl
            };
       */

            //queue.push(data[7]);
            if (queue) {
                for (var i = 0; i < 5; i++) {

                    var k = queue.shift();
                    that._appendTemplate(k);
                    console.log('popped trackname' + (i + 1) + k.trackname);
                }
            }

        },
        _appendTemplate: function(queuedata) {
            var htmlString = $("#template_broadcastlist").render(queuedata);
            $("#broadcastlist").append(htmlString);

        },
        _publishUrl: function(data) {
            console.log("broadcastlist:publishurl");
            this.options.publish(cast.events.listload, data);
        },
        _pushToQueue: function(data) {
            $.each(data, function (i, val) {
                var k = {
                    UserName:
                        val.UserName,
                    trackurl: val.trackurl,
                    img: val.img,
                    trackname: val.trackname
                };
                console.log("trackurl " + i + " " + k.trackname);
                queue.push(k);
            });
        }
    });
}(this.cast = this.cast || {}, jQuery));