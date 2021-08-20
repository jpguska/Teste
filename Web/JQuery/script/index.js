$("h1").addClass("T").text("john pipis ><").on("mouseover", function(){
    $("h1").css("color", "pink");
    $("h1").text("tira o mouse dai!!! >w<");
});
$("h1").on("mouseout", function(){
    $("h1").text("john pipis ><");
    $("h1").css("color","yellowgreen")
})
$(document).keypress(function(event){
    $("h1").append(event.key);
});
$("button#leozinho").text("O mais fofo");