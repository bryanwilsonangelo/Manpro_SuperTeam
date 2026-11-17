// TAMPILKAN RANDOM QUOTE DI DALAM KOTAK (TANPA POP-UP ALERT)
function tampilkanQuote() {
    var box = document.getElementById("quoteBox");
    var pesan = [
        "Waktunya minum whey protein dulu! 🥤",
        "Ganbatte! (頑張って) Jangan skip leg day! 🦵",
        "New PR unlocked! Tambah beban 5 kg lagi! 🏋️",
        "Keep pushing! Consistency is the key! 💪",
        "Otsukaresama! Jangan lupa istirahat dan tidur cukup! 😴"
    ];

    var random = Math.floor(Math.random() * pesan.length);
    box.innerText = pesan[random];
    box.classList.remove("hidden");
}

// GANTI TEMA (LIGHT / DARK MODE)
function ubahBackground() {
    document.getElementById("halaman").classList.toggle("dark");
}

// GYM BUDDY / VIRTUAL PET INTERACTION
var jumlahKlik = 0;

function petClick() {
    jumlahKlik++;
    document.getElementById("counter").innerText = jumlahKlik;

    var pesan = [
        "Meow! Jangan lupa kasih whiskas setelah nge-gym! 🐟",
        "Nyaa~ Kamu sudah latihan hari ini belum? 🏋️",
        "Elus terus, biar otot makin gede dan rezeki lancar! 🐾",
        "Meow! Aku kucing trilingual: Meow, Nyaa, dan Miaw! 🗣️",
        "Jangan cuma diklik, beliin wet food dong! 🥫",
        "Purrr... kamu rajin banget, fix calon sultan! 👑",
        "Istirahat dulu sini sama aku! 😺",
        "Tambah terus repetisinya! Siapa tahu aku berubah jadi macan gym! 🐯"
    ];

    var random = Math.floor(Math.random() * pesan.length);
    document.getElementById("petMessage").innerText = pesan[random];
}