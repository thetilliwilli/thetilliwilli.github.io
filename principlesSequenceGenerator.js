var principles = [
    "TilliWilli Production",
    "and PandaHead studio",
    "presents", "From heart",
    "Awesome", "About future",
    "It'll make ur day",
    "Some super stuff",
    "and it will",
    "be...",
    "<i class=\"em em-panda_face\"></i>the Panda Head",
    "<i class=\"em em-panda_face\"></i>thx for watching",
    "<i class=\"em em-panda_face\"></i>one more time"
    ];
$(document).ready(function(){
    var currentPrinciples = Array.from(principles);
    $("#header h1")[0].onmouseenter = function(pEvent){
        if(currentPrinciples.length === 0)
                currentPrinciples = Array.from(principles);
        var currIndex = 0;
        pEvent.target.innerHTML = currentPrinciples[currIndex];
        currentPrinciples.splice(currIndex, 1);
    }
});