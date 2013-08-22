
$(function() {
    $("#broadcastlist").broadcastlist(
        {
            publish: cast.pubsub.publish,
            subscribe: cast.pubsub.subscribe
        }
    );
    $("#audioplayer").player(
        {
            subscribe: cast.pubsub.subscribe,
            publish: cast.pubsub.publish
        }
    );

    $("#recorder").recorder(
        {
            subscribe: cast.pubsub.subscribe,
            publish: cast.pubsub.publish
        }
    );
    $("#recorder").delegate("a", "click", function(event) {


    });
    $('#status').status(
        {
            subscribe: cast.pubsub.subscribe
        });
    $('#status').status(
      {
          subscribe: cast.pubsub.subscribe
      });
    $('#audioBroadcaster').audiobroadcast();


    $('uploadForm').submit(function () {
        console.log("form submitted");
        // inside event callbacks 'this' is the DOM element so we first 
        // wrap it in a jQuery object and then invoke ajaxSubmit 
        $(this).ajaxSubmit({
            beforeSubmit: ShowRequest,
            success: SubmitSuccesful,
            error: AjaxError,
            url: "http://127.0.0.1/api/Broadcast/UploadRecording"
        });

        // !!! Important !!! 
        // always return false to prevent standard browser submit and page navigation 
        return false;
    });
    console.log("in castgraphy.js");
    
});