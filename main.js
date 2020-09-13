            
var seconds = document.getElementById("seconds");
var mode = "pause";
var interval = null;
var btnPlayPause = document.getElementById("btnPlayPause");
var audio = document.getElementById("myAudio");

function countUp() {
    seconds.textContent = parseFloat(seconds.textContent) + 1;
};

function goStopButtun() {
    if(mode === "pause") {
        interval = window.setInterval(countUp, 1000);
        btnPlayPause.innerHTML = "Stop";
        btnPlayPause.style.backgroundColor = "red";
        mode = "run";
        audio.play();
        audio.loop = true;
    } else {
        window.clearInterval(interval)
        btnPlayPause.innerHTML = "Go";
        btnPlayPause.style.backgroundColor = "green";
        mode = "pause"
        audio.pause();
        audio.currentTime = 0
    }
}

function restart() {
    window.clearInterval(interval)
    seconds.innerHTML = 0;
    btnPlayPause.innerHTML = "Go";
    btnPlayPause.style.backgroundColor = "green";
    mode = "pause";
    audio.pause();
    audio.currentTime = 0
}