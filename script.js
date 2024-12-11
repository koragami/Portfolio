
var setVanta = () => {
    if (window.VANTA) {
        window.VANTA.BIRDS({
            el: ".vanta-wrapper",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            backgroundColor: 0x0,
            color1: 0xffffff
        });
    }
};

window.addEventListener("load", setVanta);

const rightBox = document.getElementsByClassName('right')[0];
const aboutMeButton = document.getElementById('aboutmetext');

document.querySelectorAll('.links a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const content = event.target.getAttribute('data-content');

        if (rightBox.style.maxWidth === '40%') {
            rightBox.style.maxWidth = '0';
            rightBox.style.opacity = '0';
            aboutMeButton.innerHTML = 'About Me';
        } else {
            document.getElementById('content').innerHTML = `<div class="fit-text">${content}</div>`;
            aboutMeButton.innerHTML = 'Close';
            rightBox.style.maxWidth = '40%';
            rightBox.style.opacity = '1';
            rightBox.style.display = 'block';
        }
    });
});
