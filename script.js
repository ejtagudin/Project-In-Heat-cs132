const track = document.getElementById('sliderTrack');
const nextBtn = document.getElementById('nextBtn');

const totalSlides = track.children.length;
let currentIndex = 0;

const newer = document.getElementById('new');

const width = parseFloat(getComputedStyle(newer).width);
console.log(track.children);
for(let i = 0; i < totalSlides; i++){
    track.children[i].style.width = `${width}px`;
    console.log(track.children[i].style.height);
}
track.style.transform = `translateX(-${-1 * width}px)`
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    track.style.transform = `translateX(-${currentIndex * width}px)`;
});
