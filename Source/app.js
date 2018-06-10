$("#theMusic")[0].volume = 0.0;

function ToogleMusic() {
    if ($("#musicOff").css("visibility") === "hidden") {
        $("#musicOn").css("visibility", "hidden");
        $("#musicOff").css("visibility", "visible");
        FadeOutMusic();
    }
    else {
        $("#musicOn").css("visibility", "visible");
        $("#musicOff").css("visibility", "hidden");
        FadeInMusic();
    }
}

window.fadeInMusicTimer = null;
window.fadeOutMusicTimer = null;

function FadeInMusic(pVolumeDelta, pTimeDelta) {
    gtag('send', {
        hitType: 'event',
        eventCategory: 'Music',
        eventAction: 'play',
        eventLabel: 'MusicControls'
      });

    pVolumeDelta = pVolumeDelta ? pVolumeDelta : 0.03;
    pTimeDelta = pTimeDelta ? pTimeDelta : 100;
    var theMusic = $("#theMusic")[0];
    var startVolume = theMusic.volume;
    var endVolume = 0.9;
    window.clearInterval(window.fadeOutMusicTimer);
    theMusic.play();
    window.fadeInMusicTimer = setInterval(function () {
        startVolume += pVolumeDelta;
        if (startVolume >= endVolume) {
            startVolume = endVolume;
            clearInterval(window.fadeInMusicTimer);
        }
        theMusic.volume = startVolume;
    }, pTimeDelta);
}

function FadeOutMusic(pVolumeDelta, pTimeDelta) {
    gtag('send', {
        hitType: 'event',
        eventCategory: 'Music',
        eventAction: 'pause',
        eventLabel: 'MusicControls'
      });

    pVolumeDelta = pVolumeDelta ? pVolumeDelta : 0.03;
    pTimeDelta = pTimeDelta ? pTimeDelta : 100;
    var theMusic = $("#theMusic")[0];
    var startVolume = theMusic.volume || 0.9;
    var endVolume = 0.0;
    theMusic.volume = startVolume;
    window.clearInterval(window.fadeInMusicTimer);
    window.fadeOutMusicTimer = setInterval(function () {
        startVolume -= pVolumeDelta;
        if (startVolume <= endVolume) {
            startVolume = endVolume;
            clearInterval(window.fadeOutMusicTimer);
            theMusic.pause();
        }
        theMusic.volume = startVolume;
    }, pTimeDelta);
}

function OpenNewWindow(url, isTab) {
    gtag('send', 'event', {
        eventCategory: 'Outbound Link',
        eventAction: 'click',
        eventLabel: url
    });

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

Object.assign(window, {
    ToogleMusic,
    
});