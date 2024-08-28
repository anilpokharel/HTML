const video = document.querySelector('.video-player');
const buttons = document.querySelectorAll('.button-card button');

buttons.forEach((element) => {
    element.addEventListener('click', (e) => {
        const url = e.target.getAttribute('data-url');
        video.setAttribute('src', url);
        video.play();
    });
});
