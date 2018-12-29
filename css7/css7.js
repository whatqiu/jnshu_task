function autoPlay() {
    var playM = document.getElementById("bgMusic");
    if (playM.paused) {
        playM.play();
    } else {
        playM.pause();
    }
}