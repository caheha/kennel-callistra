var navBtn = document.getElementById('nav-button');
var navBar = document.getElementById('nav-bar');

navBtn.onclick = () => {
    navBar.classList.toggle('nav-active');
    navBtn.classList.toggle('btn-active');
}



var stickers = document.querySelectorAll('.sticker');
stickers.forEach(sticker => {
    let x = (Math.random() * 360).toFixed(2);
    sticker.style.transform = "translate(-50%, -50%) rotate(" + x + "deg)";
});