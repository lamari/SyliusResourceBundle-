$(function(){
    // Init Listeners after page loaded
    api.init();
});

var api = {
    init: function () {
        // jQuery listeners/
        $('#myModal').on('hidden.bs.modal', this.refresh);
        $("#_method").change(this.onChangeMethod);
        $("#demo").submit(this.onFormSubmit.bind(this));

    },

    refresh: function() {
        // Refresh page after close api console
        location.reload()
    },

    onChangeMethod: function(e) {

        // auto fill request content
        var json = $(this).find(":selected").data("json");
        var data = json == "" ? json : JSON.stringify(json);
        $("#content").val(data);

        // ID is required for put, patch and delete
        if($.inArray($(this).val(), ["PUT", "PATCH", "DELETE"]) < 0 ) {
            $(".block-id").hide();
            $("#id").val("");

        } else {
            $(".block-id").show();
        }
    },

    onFormSubmit: function(e) {
        e.preventDefault();

        // Get all data needed
        var id = $("#id").val();
        var method = $("#_method").val();
        var baseurl = $("#baseurl").val();
        var content = $("#content").val();
        var data = content == "" ? content : JSON.parse(content);

        // Send Request
        $.ajax({
            url: baseurl + "api/books/" + id,
            type: method,
            data: data,
            dataType: "json",
            complete: this.onComplete
        })
    },

    onComplete: function (response) {
        //  For Success and for Error
        var url = $("#baseurl").val() + "api/books/" + $("#id").val();
        $(".block-response").removeClass("hide");
        $("#response").html(url);
        $("#preview").html(response.responseText);
        $("#status").html(response.status);
        $("#action").html(response.statusText);
    }
}
