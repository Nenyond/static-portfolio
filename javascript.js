var myVideo = document.getElementById("comstarvid");
var myCard = document.getElementById("showstop")
        

function playPause() {
    if (myVideo.paused)
        myVideo.play();
    else
        myVideo.pause();
}
function full() {
    myVideo.width = 852;
    myVideo.height = 480;
    myVideo.scrollIntoView();
}
function small(){
    myVideo.width = 213;
    myVideo.height = 120;
}
    