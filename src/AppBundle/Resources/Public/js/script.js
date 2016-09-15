$(function(){
    api.init();
});

var api = {
    init: function () {
        $("#demo").submit(this.onformsubmit.bind(this));
        $("#method option").click(this.onChangeMethod);
    },
    onChangeMethod: function(e) {
        var el = $(this);
        $("#content").val(JSON.stringify(el.data("json")));
        console.log(el.val());
        if($.inArray(el.val(), ["PUT", "PATCH", "DELETE"])) {
            $(".block-id").show();
        } else {
            $(".block-id").hide();
        }
    },
    onformsubmit: function(e) {
        e.preventDefault();
        var id = $("method").val();
        var method = $("method").val();
        var data = Json.stringify($("content").val());
        data._method = $("method").val();
        $.ajax({
            url: "/api/books/" + id,
            data: data,
            datatype: "json",
            success: this.onSuccess,
            error: this.onError
        })
    },
    onSuccess: function (response, status, error) {
        console.log(response, status, error);
    },
    onError: function (response, status, error) {
        console.log(response, status, error);
    }
}
