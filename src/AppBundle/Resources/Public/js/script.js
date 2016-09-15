$(function(){

    api.init();

    

    
});

var api = {
    init: function () {

        $("#demo").submit(this.onformsubmit.bind(this));
        $("#_method").change(this.onChangeMethod);

    },
    onChangeMethod: function(e) {

        var el = $(this).find(":selected");

        $("#content").val(JSON.stringify(el.data("json")));

        console.log(el.html())

        if($.inArray(el.html(), ["PUT", "PATCH", "DELETE"]) < 0 ) {
            $(".block-id").hide();
            $("#id").val("");

        } else {
            $(".block-id").show();
            
        }
    },
    onformsubmit: function(e) {
        e.preventDefault();
        var id = $("#id").val();
        var method = $("#_method").val();
        var content = $("#content").val();
        var data = content == "" ? content : JSON.parse(content);
        data._method = $("#_method").val();
        var baseurl = $("#baseurl").val();
        $.ajax({
            url: baseurl + "api/books/" + id,
            data: data,
            datatype: "json",
            success: this.onSuccess,
            error: this.onError
        })
    },
    onSuccess: function (data, status, response) {
        var url = "/app_dev.php/api/books/" + $("#id").val();
        var url = $("#baseurl").val() + "api/books/" + $("#id").val();
        $(".block-response").removeClass("hide");
        $("#response").html(url);
        $("#preview").html(response.responseText);
        $("#status").html(response.status);
    },
    onError: function (response) {
        console.log(response);
        var url = $("#baseurl").val() + "api/books/" + $("#id").val();
        $(".block-response").removeClass("hide");
        $("#response").html(url);
        $("#preview").html(response.statusText);
        $("#status").html(response.status);
    }
}
