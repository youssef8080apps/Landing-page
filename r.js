function openNav1() {
    //player.loadVideoById("pTuhg0BWGTs");
    player.cueVideoById("015XA3ItcAw");
  document.getElementById("myNav").style.display = "block";
}

function openNav2() {
    player.cueVideoById("5fhRmy-1PYo");
  document.getElementById("myNav").style.display = "block";
}

function openNav3() {
    player.cueVideoById("opru9ZMrL18")
  document.getElementById("myNav").style.display = "block";
}

function closeNav() {
  document.getElementById("myNav").style.display = "none";
	stopVideo();
}


var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.  315    560
var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: 'auto',
        width: 'auto',
        videoId: '015XA3ItcAw',
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}


function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
      //player is playing
    } else {
      //player is paused
    }
}

function stopVideo() {
    player.stopVideo();
}

function playVideo() {
  player.playVideo();
}

function pauseVideo() {
  player.pauseVideo();
}


$(document).on('opened.fndtn.reveal', '[data-reveal]', function () {
    playVideo();
});

$(document).on('closed.fndtn.reveal', '[data-reveal]', function () {
  pauseVideo();
});