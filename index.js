function ToogleMusic() {
    if ($("#musicOff").css("visibility") === "hidden") {
        $("#musicOn").css("visibility", "hidden");
        $("#musicOff").css("visibility", "visible");
        $("#theMusic")[0].pause();
    }
    else {
        $("#musicOn").css("visibility", "visible");
        $("#musicOff").css("visibility", "hidden");
        $("#theMusic")[0].play();
    }
}
function StartAutoPlayMusic(pVolumeDelta, pTimeDelta) {
    pVolumeDelta = pVolumeDelta ? pVolumeDelta : 0.03;
    pTimeDelta = pTimeDelta ? pTimeDelta : 100;
    var startVolume = 0.0;
    var endVolume = 0.9;
    var fadeOnTimer;
    var theMusic = $("#theMusic")[0];
    theMusic.volume = startVolume;
    theMusic.play();
    fadeOnTimer = setInterval(function () {
        startVolume += pVolumeDelta;
        if (startVolume >= endVolume) {
            startVolume = endVolume;
            clearInterval(fadeOnTimer);
        }
        theMusic.volume = startVolume;
    }, pTimeDelta);
}

function OpenNewWindow(url, isTab) {
    if (isTab)
        window.open(url, "_blank");
    else
        window.location.href = url;
}

$("#GotoFacebook").click((e) => { OpenNewWindow("https://www.facebook.com/thetilliwilli", e.ctrlKey); })
$("#GotoVK").click((e) => { OpenNewWindow("https://vk.com/tilliwilli", e.ctrlKey); })
$("#GotoInstagram").click((e) => { OpenNewWindow("https://www.instagram.com/thetilliwilli", e.ctrlKey); })
$("#GotoEMail").click((e) => { OpenNewWindow("mailto:tilliwilli@gmail.com", e.ctrlKey); })
$("#GotoGithub").click((e) => { OpenNewWindow("https://github.com/thetilliwilli", e.ctrlKey); })