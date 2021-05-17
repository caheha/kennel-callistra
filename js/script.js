var navBtn = document.getElementById('nav-button');
var navBar = document.getElementById('nav-bar')

navBtn.onclick = () => {
    navBar.classList.toggle('nav-active');
    navBtn.classList.toggle('btn-active');
}
