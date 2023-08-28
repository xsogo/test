let currentFolder = 'pressure';  // 默认文件夹
let currentImageIndex = 0;  // 默认图片索引
let isPlaying = false;  // 默认是不播放
const imageDisplay = document.getElementById('imageDisplay');
const slider = document.getElementById('slider');
const playPauseButton = document.getElementById('playPause');

// 更新图片显示
function updateImage() {
    let imageName = '';
    if (currentFolder === 'pressure') {
        imageName = `Pressure_xz-${String(currentImageIndex).padStart(4, '0')}.png`;
    } else {
        imageName = `Density_xz-${String(currentImageIndex).padStart(4, '0')}.png`;
    }
    imageDisplay.src = `${currentFolder}/${imageName}`;
}

// 播放暂停功能
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

// 自动播放图片
function advanceImage() {
    interval = setInterval(() => {
        currentImageIndex++;
        if (currentImageIndex > 99) {
            currentImageIndex = 0;
        }
        updateImage();
        slider.value = currentImageIndex;
    }, 1000); // 每秒播放一张，您可以调整这个时间
}

// 进度条滑块监听
slider.addEventListener('input', (e) => {
    currentImageIndex = parseInt(e.target.value);
    updateImage();
});

// 播放暂停按钮监听
playPauseButton.addEventListener('click', playPause);

// 选择pressure文件夹监听
document.getElementById('pressure').addEventListener('click', () => {
    currentFolder = 'pressure';
    currentImageIndex = 0;
    updateImage();
    slider.value = 0;
});

// 选择density文件夹监听
document.getElementById('density').addEventListener('click', () => {
    currentFolder = 'density';
    currentImageIndex = 0;
    updateImage();
    slider.value = 0;
});

// 初始化图片显示
updateImage();
