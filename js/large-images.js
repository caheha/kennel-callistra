var images = document.querySelectorAll('.img-container img');

images.forEach(image => {
    image.onclick = () => {
        // Create image-viewer div
        let box = document.createElement("div");

        // Add class for styling
        box.classList.add('image-viewer');

        // New src - Split src string at file extension, remove file extension
        let newSrc = image.src.split('.').slice(0, -1).join('.');
            
        // Add file postfix to src
        newSrc += "-big.jpg";

        // Insert image and close button
        box.innerHTML = "<img id='big-image' src=" + newSrc + ">" + "<i class='fas fa-times'></i>";

        // Add image-viewer div to html
        document.body.appendChild(box);

        // Make button remove image-viewer onclick
        let closeBtn = document.querySelector('.fa-times');
        closeBtn.onclick = () => { document.body.removeChild(box) }
    }
});