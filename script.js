// Slider images
const images = ["slide1.jpg", "slide2.jpg", "slide3.jpg"];
let currentSlide = 0;

function changeSlide() {
    currentSlide = (currentSlide + 1) % images.length;
    document.getElementById("slideImage").src = images[currentSlide];
}

// Change slide every 3 seconds
setInterval(changeSlide, 3000);

// Move Gallery button
function moveGallery() {
    const gallery = document.getElementById('galleryContainer');
    gallery.scrollBy({ left: 300, behavior: 'smooth' });
}
