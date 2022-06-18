$(".btn1").on("click", function(){
    $("body").append("<p>Yeah, you clicked me!<p>")
});

$(".btn2").on("click", function() {
    $("p").html("<p>change<p>")
});


$(".btn3").on("click", function() {
    $("button").css("background-color", "red")

});

function changingColorrrrr () {
    let color = document.getElementById("colorInpuText").value;  //Takto dostanu hodnotu z toho debilního inputu !
    $("button").css("background-color", color);
};
$("#Changer").click(changingColorrrrr);



$("#Changer").click(function(
){
    let Text = document.getElementById("colorInpuText").value;
    alert(Text);
});