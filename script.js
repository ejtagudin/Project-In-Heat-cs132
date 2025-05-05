const track = document.getElementById('sliderTrack');
const nextBtn = document.getElementById('nextBtn');

const totalSlides = track.children.length;
let currentIndex = 0;

const newer = document.getElementById('new');

const width = getComputedStyle(newer).width;
for(let i = 0; i < totalSlides; i++){
    track.children[i].style.height = `${width}px`;
}

nextBtn.addEventListener('click', () => {
    console.log('going in');
    currentIndex = (currentIndex + 1) % totalSlides;
    track.style.transform = `translateX(-${currentIndex * 300}px)`;
});