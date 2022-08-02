
//youtube script
let tag = document.createElement('script');
tag.src = "//www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;

onYouTubeIframeAPIReady = function () {
    player = new YT.Player('player', {
        height: '276',
        width: '551',
        videoId: 'HojZl7TyEdU',  // youtube video id
        playerVars: {
            'autoplay': 0,
            'rel': 0,
            'showinfo': 0
        },
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

let p = document.getElementById ("player");
$(p).hide();

let t = document.getElementById ("thumbnail");
t.src = "assets/img/prot/2.jpg";

onPlayerStateChange = function (event) {
    if (event.data == YT.PlayerState.ENDED) {
        $('.start-video').fadeIn('normal');
    }
}

$(document).on('click', '.start-video', function () {
    $(this).hide();
    $("#player").show();
    $("#thumbnail_container").hide();
    player.playVideo();
});

