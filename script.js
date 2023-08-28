let currentFolder = 'pressure';
let currentImageIndex = 0;
let isPlaying = false;
const imageDisplay = document.getElementById('imageDisplay');
const slider = document.getElementById('slider');
const playPauseButton = document.getElementById('playPause');

function updateImage() {
    imageDisplay.src = `${currentFolder}/${currentImageIndex}.png`;
}

function playPause() {
    isPlaying = !isPlaying;
    if (isPlaying) {
        playPauseButton.innerText = 'Pause';
        advanceImage();
    } else {
        playPauseButton.innerText = 'Play';
        clearInterval(interval);
    }
}

let interval;

function advanceImage() {
    interval = setInterval(() => {
        currentImageIndex++;
        if (currentImageIndex > 99) {
            currentImageIndex = 0;
        }
        updateImage();
        slider.value = currentImageIndex;
    }, 1000); // 每秒播放一张，您可以调整这个值
}

slider.addEventListener('input', (e) => {
    currentImageIndex = parseInt(e.target.value);
    updateImage();
});

playPauseButton.addEventListener('click', playPause);

document.getElementById('pressure').addEventListener('click', () => {
    currentFolder = 'pressure';
    currentImageIndex = 0;
    updateImage();
    slider.value = 0;
});

document.getElementById('density').addEventListener('click', () => {
    currentFolder = 'density';
    currentImageIndex = 0;
    updateImage();
    slider.value = 0;
});

// 初始化
updateImage();
