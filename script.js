var slideIndex = 0; // Current slide index
var playPause = true; // Play/Pause flag
var timerVar; // Timer variable for autoplay
var intervalDuration = 5000; // Interval between slide changes (milliseconds)

// Add your image filenames to the arrays
var pressureImages = [
    "Pressure_xz-0000.png",
    "Pressure_xz-0001.png",
    "Pressure_xz-0002.png",
    "Pressure_xz-0003.png",
    "Pressure_xz-0004.png"
    // ... Add more images
];

var densityImages = [
    "Density_xz-0000.png",
    "Density_xz-0001.png",
    "Density_xz-0002.png",
    "Density_xz-0003.png",
    "Density_xz-0004.png"
    // ... Add more images
];

// Initialize the slideshow
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    clearTimeout(timerVar);
    showSlides((slideIndex += n));
}

// Play/Pause control
function playPauseHandler() {
    playPause = !playPause;
    var playPauseButtonIcon = document.getElementById("play-pause-icon");
    
    if (playPause) {
        playPauseButtonIcon.className = "fa fa-pause";
        showSlides(slideIndex);
    } else {
        playPauseButtonIcon.className = "fa fa-play";
        clearTimeout(timerVar);
    }
}

// Play the pressure images
function playPressure() {
    clearTimeout(timerVar);
    playImages(pressureImages);
}

// Play the density images
function playDensity() {
    clearTimeout(timerVar);
    playImages(densityImages);
}

// Function to play a set of images
function playImages(images) {
    slideIndex = 0;
    showSlides(slideIndex, images);
    timerVar = setInterval(function () {
        plusSlides(1);
    }, intervalDuration);
}

// Function to show slides
function showSlides(n, imageArray) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var slideNumber = document.getElementById("slide-number");
    
    if (!imageArray) {
        imageArray = pressureImages; // Default to pressure images
    }
    
    if (n >= imageArray.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = imageArray.length - 1;
    }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slideNumber.innerHTML = slideIndex + 1 + " / " + imageArray.length;
    slides[slideIndex].style.display = "block";
    
    if (playPause) {
        timerVar = setTimeout(function () {
            plusSlides(1);
        }, intervalDuration);
    }
}
