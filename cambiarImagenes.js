document.addEventListener('DOMContentLoaded', () => {

const images = [
    "confe.jpeg",
    "ttc.jpeg",
    "peru.jpg"
];

let currentImageIndex = 0;
    const heroImageElement = document.getElementById('hero-image');
    const backgroundMusic = document.getElementById('background-music');
    const playMusicButton = document.getElementById('play-music-button');
 
    const ageVerification = document.getElementById('age-verification');
    const confirmAgeButton = document.getElementById('confirm-age');

    if (heroImageElement) {
        function changeImage() {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            heroImageElement.style.opacity = 0;  // Start fading out
            setTimeout(() => {
                heroImageElement.src = images[currentImageIndex];
                heroImageElement.style.opacity = 1;  // Start fading in
            }, 2000);  // Match this duration with the CSS transition duration
        }

        setInterval(changeImage, 5000);  // Change image every 5 seconds
    } else {
        console.error("Element with ID 'hero-image' not found.");
    }


 // Handle music playback
 if (confirmAgeButton && backgroundMusic) {
    confirmAgeButton.addEventListener('click', () => {
        backgroundMusic.play();
        ageVerification.style.display = 'none';
        document.body.classList.remove('blurred');
        //playMusicButton.style.display = 'none'; // Hide the button after playing
    });
} else {
    console.error("Element with ID 'play-music-button' or 'background-music' not found.");
}

 
// Handle age verification
if (ageVerification && confirmAgeButton) {
    
    confirmAgeButton.addEventListener('click', () => {
        ageVerification.style.display = 'none';
        document.body.classList.remove('blurred');

    });

   
} else {
    console.error("Element with ID 'age-verification' or 'confirm-age' not found.");
}
});