/* ---------- Burger menu ---------- */
var navBtn = document.getElementById('nav-button');
var navBar = document.getElementById('nav-bar');

/* Toggle active class when clicking burger menu button */
navBtn.onclick = () => {
    navBar.classList.toggle('nav-active');
    navBtn.classList.toggle('btn-active');
}





/* ---------- Rotating stickers ---------- */
var stickers = document.querySelectorAll('.sticker');

/* Rotate every sticker between 0.00 and 360.00 degrees */
stickers.forEach(sticker => {
    let x = (Math.random() * 360).toFixed(2);
    sticker.style.transform = "translate(-50%, -50%) rotate(" + x + "deg)";
});





/* ---------- Logo resizing ---------- */
var logo = document.querySelector('.logo');

/* Change logo height if scrolled > 64px & using screenwidth > 768px */
window.onscroll = () => {
    if (screen.width >= 768) {
        if (window.scrollY > 64) {
            logo.style.width = "4em";
        } else {
            logo.style.width = "8em";
        }
    }
}

/* Resize logo when resizing window to avoid large logo on mobile */
window.onresize = () => {
    if (screen.width >= 768) {
        logo.style.width = "4em";
    } else {
        logo.style.width = "3em";
    }
}