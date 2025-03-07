const quotes = [
    "You're doing great! 🌟",
    "Sending you a virtual hug! 🤗",
    "Smile, because you're amazing! 😊",
    "You deserve happiness and love! 💖",
    "Take a deep breath, you're strong! 💪"
];

function showSurprise() {
    document.getElementById('quote').innerText = quotes[Math.floor(Math.random() * quotes.length)];
}

function toggleMusic() {
    let music = document.getElementById("music");
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}
