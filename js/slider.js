/* Nova image slider */
var containerNova = document.getElementById('img-container-nova'); // Image container Nova
var imageCountNova = document.querySelectorAll('#img-container-nova img').length; // Amount of images
var nextNova = document.getElementById('next-nova'); // Next button
var prevNova = document.getElementById ('prev-nova'); // Prev button
var indexNova = 0; // Array index

/* Check if next/prev image is within scope, if so, move index up or down */
nextNova.onclick = () => { if (indexNova < imageCountNova - 3) sliderShiftNova(1) } // Next onclick
prevNova.onclick = () => { if (indexNova > 0) sliderShiftNova(-1) }                 // Prev onclick

/* Count index up or down > calculate amount to shift >shift image-container */
function sliderShiftNova(i){
    indexNova = indexNova + i; // Increase/decrease index
    shift = containerNova.clientWidth * 1.01 / 3 * indexNova; // Calculate shift
    containerNova.style.transform = 'translatex('+ -shift + 'px)'; // Move image-container according to shift
}





/* Mazie image slider */
var containerMazie = document.getElementById('img-container-mazie'); // Image container Nova
var imageCountMazie = document.querySelectorAll('#img-container-mazie img').length; // Amount of images
var nextMazie = document.getElementById('next-mazie'); // Next button
var prevMazie = document.getElementById ('prev-mazie'); // Prev button
var indexMazie = 0; // Array index

/* Check if next/prev image is within scope, if so, move index up or down */
nextMazie.onclick = () => { if (indexMazie < imageCountMazie - 3) sliderShiftMazie(1) } // Next onclick
prevMazie.onclick = () => { if (indexMazie > 0) sliderShiftMazie(-1) }                  // Prev onclick

/* Count index up or down > calculate amount to shift >shift image-container */
function sliderShiftMazie(i){
    indexMazie = indexMazie + i; // Increase/decrease index
    shift = containerMazie.clientWidth * 1.01 / 3 * indexMazie; // Calculate shift
    containerMazie.style.transform = 'translatex('+ -shift + 'px)'; // Move image-container according to shift
}





/* Zelda image slider */
var containerZelda = document.getElementById('img-container-zelda'); // Image container Zelda
var imageCountZelda = document.querySelectorAll('#img-container-zelda img').length; // Amount of images
var nextZelda = document.getElementById('next-zelda'); // Next button
var prevZelda = document.getElementById ('prev-zelda'); // Prev button
var indexZelda = 0; // Array index

/* Check if next/prev image is within scope, if so, move index up or down */
nextZelda.onclick = () => { if (indexZelda < imageCountZelda - 3) sliderShiftZelda(1) } // Next onclick
prevZelda.onclick = () => { if (indexZelda > 0) sliderShiftZelda(-1) }                  // Prev onclick

/* Count index up or down > calculate amount to shift >shift image-container */
function sliderShiftZelda(i){
    indexZelda = indexZelda + i; // Increase/decrease index
    shift = containerZelda.clientWidth * 1.01 / 3 * indexZelda; // Calculate shift
    containerZelda.style.transform = 'translatex('+ -shift + 'px)'; // Move image-container according to shift
}