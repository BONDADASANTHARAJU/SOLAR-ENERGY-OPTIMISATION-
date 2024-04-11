const slider = document.querySelector('.slider');
const images = slider.querySelectorAll('img');

let currentImageIndex = 0;

function moveToNextImage() {
	images[currentImageIndex].style.opacity = '0';
	currentImageIndex = (currentImageIndex + 1) % images.length;
	images[currentImageIndex].style.opacity = '1';
}

function startSlider() {
	moveToNextImage();
	setInterval(moveToNextImage, 12000); // Move to the next image every 12 seconds
}

startSlider();

