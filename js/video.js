var video = document.getElementById('video');
video.volume = 0; // Set volume to 0 so video can autoplay

/* ---------- Video player ---------- */
/* Scroll event, play video if visible */
document.onscroll = () => { elementVisible(video) ? video.play() : video.pause() } // onscroll

/* Checks if element is visible on screen, return bool */
/* Element is visible if distance from top is less than 250px and */
/* distance from bottom is more than 250px */
function elementVisible(elm) {
    if (elm.getBoundingClientRect().bottom < 250 || elm.getBoundingClientRect().top > 250)
        return false; // Element is not visible
    else 
        return true;  // Element is visible
}



var muteBtn = document.getElementById('mute-btn');

muteBtn.onclick = () => {
    // Check volume, mute/unmute and change icon
    if (video.volume > 0) {
        video.volume = 0;
        muteBtn.classList.toggle('fa-volume-off');
        muteBtn.classList.toggle('fa-volume-up');
    } else {
        video.volume = 1;
        muteBtn.classList.toggle('fa-volume-off');
        muteBtn.classList.toggle('fa-volume-up');
    }
}