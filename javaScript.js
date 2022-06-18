$(".btn1").on("click", function(){
    $("body").append("<p>Yeah, you clicked me!<p>")
});

$(".btn2").on("click", function() {
    $("p").html("<p>change<p>")
});

$(".btn3").on("click", function() {
    $("button").css("background-color","red")
});