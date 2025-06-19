let currentVideo = null;
let isPlaying = false;
let isMuted = true;

const playPauseBtn = document.querySelector('#playPauseBtn');
const muteBtn = document.querySelector('#muteBtn');
const fullscreenBtn = document.querySelector('#fullscreenBtn');

function playVideo(videoEl) {
    if (currentVideo && currentVideo !== videoEl) {
        currentVideo.pause();
    }
    currentVideo = videoEl;
    videoDisplay.setAttribute('material', 'src', `#${videoEl.id}`);
    currentVideo.play();
    currentVideo.muted = isMuted;
    isPlaying = true;
}

playPauseBtn.addEventListener('click', () => {
    if (currentVideo) {
        if (isPlaying) {
            currentVideo.pause();
            playPauseBtn.textContent = '▶️';
        } else {
            currentVideo.play();
            playPauseBtn.textContent = '⏸️';
        }
        isPlaying = !isPlaying;
    }
});

muteBtn.addEventListener('click', () => {
    if (currentVideo) {
        isMuted = !isMuted;
        currentVideo.muted = isMuted;
        muteBtn.textContent = isMuted ? '🔇' : '🔊';
    }
});

fullscreenBtn.addEventListener('click', () => {
    if (currentVideo) {
        currentVideo.requestFullscreen();
    }
});
