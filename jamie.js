window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.querySelectorAll('.progress-bar-fill').forEach(bar => {
            bar.style.width = bar.getAttribute('data-width');
        });
    }, 250);
});

const surprises = [
    {
        emoji: "🥊",
        title: "Rekor Dunia Baru!",
        text: "Jamie baru saja mencetak rekor 120 pukulan per menit ke bantal guling sebelum tidur siang."
    },
    {
        emoji: "☕",
        title: "Status Coding Java",
        text: "Error: NullPointerException di baris 42. Solusi terbaik: tidur 8 jam dulu baru di-debug."
    },
    {
        emoji: "🏸",
        title: "Smash Mode Aktif",
        text: "Shuttlecock melaju 300 km/jam... sayangnya nyangkut di net sendiri."
    },
    {
        emoji: "🐐",
        title: "Blessing Calon GOAT",
        text: "Skill coding otomatis meningkat +15% setelah melihat foto Messi memandikan Lamine Yamal."
    },
    {
        emoji: "🛌",
        title: "Peringatan Sistem",
        text: "Baterai sosial Jamie tersisa 5%. Harap segera arahkan ke kasur terdekat."
    }
];

const modal = document.getElementById('surprise-modal');
const modalEmoji = document.getElementById('modal-emoji');
const modalTitle = document.getElementById('modal-title');
const modalText = document.getElementById('modal-text');
let lastIndex = -1;

function showRandomSurprise() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * surprises.length);
    } while (randomIndex === lastIndex);
    lastIndex = randomIndex;

    const item = surprises[randomIndex];
    modalEmoji.textContent = item.emoji;
    modalTitle.textContent = item.title;
    modalText.textContent = item.text;
    modal.classList.add('active');
}

document.getElementById('surprise-btn').addEventListener('click', showRandomSurprise);
document.getElementById('reroll-btn').addEventListener('click', showRandomSurprise);
document.getElementById('close-modal-btn').addEventListener('click', () => {
    modal.classList.remove('active');
});
modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
});

const dogPet = document.getElementById('dog-pet');
const dogAvatar = document.getElementById('dog-avatar');
const dogSpeech = document.getElementById('dog-speech');
const dogPhrases = [
    "Guk guk! Jangan lupa git push!",
    "Bantalnya aman hari ini?",
    "Waktunya main badminton!",
    "Woof! UI-nya estetik banget!",
    "Zzz... ikut tidur ah..."
];
const dogFaces = ["🐶", "🐕", "🐩", "🦴"];
let speechTimeout;

dogPet.addEventListener('click', () => {
    dogAvatar.classList.remove('dog-bounce');
    void dogAvatar.offsetWidth;
    dogAvatar.classList.add('dog-bounce');

    dogAvatar.textContent = dogFaces[Math.floor(Math.random() * dogFaces.length)];
    dogSpeech.textContent = dogPhrases[Math.floor(Math.random() * dogPhrases.length)];
    dogSpeech.classList.add('show');

    clearTimeout(speechTimeout);
    speechTimeout = setTimeout(() => {
        dogSpeech.classList.remove('show');
    }, 3000);
});

document.addEventListener('mousemove', (e) => {
    const xOffset = (e.clientX / window.innerWidth - 0.5) * 14;
    const yOffset = (e.clientY / window.innerHeight - 0.5) * 14;
    dogPet.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
});

const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
let particles = [];
let mouse = { x: null, y: null, radius: 130 };

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
});

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2.2 + 0.8;
        this.speedX = (Math.random() - 0.5) * 0.8;
        this.speedY = (Math.random() - 0.5) * 0.8;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }
    draw() {
        ctx.fillStyle = 'rgba(56, 189, 248, 0.55)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initParticles() {
    particles = [];
    const count = Math.min(70, Math.floor((canvas.width * canvas.height) / 15000));
    for (let i = 0; i < count; i++) {
        particles.push(new Particle());
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        if (mouse.x !== null && mouse.y !== null) {
            const dx = particles[i].x - mouse.x;
            const dy = particles[i].y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < mouse.radius) {
                ctx.strokeStyle = `rgba(129, 140, 248, ${1 - dist / mouse.radius})`;
                ctx.lineWidth = 0.8;
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(mouse.x, mouse.y);
                ctx.stroke();
            }
        }
    }
    requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();