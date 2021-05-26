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