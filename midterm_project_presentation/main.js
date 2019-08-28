$(document).ready(function(){
    $("#btn1").click(function(){
        alert("Text: " + $("#h2").text());
    });
    $("#btn2").click(function(){
        alert("HTML: " + $("#h2").html());
    });
});