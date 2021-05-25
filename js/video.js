/* ---------- Video player ---------- */
/* Scroll event, play video if visible */
document.onscroll = () => { elementVisible(video) ? video.play() : video.pause() }

/* Checks if element is visible on screen, return bool */
function elementVisible(elm) {
    if (elm.getBoundingClientRect().bottom < 250 || elm.getBoundingClientRect().top > 250)
        return false;
    else 
        return true;
}