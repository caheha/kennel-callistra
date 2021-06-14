// Select all images in cards within hvalpe-kort section
var cards = document.querySelectorAll('.hvalpe-cards .card img:nth-child(2)');

// Add eventlisteners to show another image source on hover
cards.forEach(card => {
    // Save image source in orgSrc
    let orgSrc = card.src;

    // Temp src - Split src string at file extension, remove file extension
    let newSrc = orgSrc.split('.').slice(0, -1).join('.');
    
    // Add file postfix to temp src
    newSrc += "-large.jpg";

    // Show newSrc on mouseoever, orgSrc on mouseleave
    card.onmouseover = () => { card.src = newSrc }
    card.onmouseleave = () => { card.src = orgSrc }
});