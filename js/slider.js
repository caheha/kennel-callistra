var containerNova = document.getElementById('img-container-nova');
var imageCountNova = document.querySelectorAll('#img-container-nova img').length;
var nextNova = document.getElementById('next-nova');
var prevNova = document.getElementById ('prev-nova');
var indexNova = 0;

nextNova.onclick = () => { if (indexNova < imageCountNova - 3) sliderShiftNova(1) }
prevNova.onclick = () => { if (indexNova > 0) sliderShiftNova(-1) }

function sliderShiftNova(i){
    indexNova = indexNova + i;
    shift = containerNova.clientWidth * 1.01 / 3 * indexNova;
    containerNova.style.transform = 'translatex('+ -shift + 'px)';
}

var containerMazie = document.getElementById('img-container-mazie');
var imageCountMazie = document.querySelectorAll('#img-container-mazie img').length;

var nextMazie = document.getElementById('next-mazie');
var prevMazie = document.getElementById ('prev-mazie');

var indexMazie = 0;

nextMazie.onclick = () => {
    if (indexMazie < imageCountMazie - 3)
        sliderShiftMazie(1)
}

prevMazie.onclick = () => {
    if (indexMazie > 0)
        sliderShiftMazie(-1)
}

function sliderShiftMazie(i){
    indexMazie = indexMazie + i;
    shift = containerMazie.clientWidth * 1.01 / 3 * indexMazie;
    /*(container.clientWidth / 3) * index;*/
    /*(container.clientWidth / (100 - (imagecount - 1)))*/
    containerMazie.style.transform = 'translatex('+ -shift + 'px)';
}







var containerZelda = document.getElementById('img-container-zelda');
var imageCountZelda = document.querySelectorAll('#img-container-zelda img').length;


var nextZelda = document.getElementById('next-zelda');
var prevZelda = document.getElementById ('prev-zelda');


var indexZelda = 0;

nextZelda.onclick = () => {
    if (indexZelda < imageCountZelda - 3)
        sliderShiftZelda(1)
}

prevZelda.onclick = () => {
    if (indexZelda > 0)
        sliderShiftZelda(-1)
}

function sliderShiftZelda(i){
    indexZelda = indexZelda + i;
    shift = containerZelda.clientWidth * 1.01 / 3 * indexZelda;
    /*(container.clientWidth / 3) * index;*/
    /*(container.clientWidth / (100 - (imagecount - 1)))*/
    containerZelda.style.transform = 'translatex('+ -shift + 'px)';
}