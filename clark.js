
//FITUR 1: SURPRISE BUTTON


function showSurprise() {

    const messages = [
        "Keep coding and never give up!",
        "Clark Kent Chu is awesome!",
        "Java dan Jawa adalah masa depan!",
        "Jangan lupa makan dan tidur!",
        "Semangat mengerjakan Manpro!",
        "You are the Superman of coding!"
    ];

    const randomIndex = Math.floor(
        Math.random() * messages.length
    );

    document.getElementById("surpriseText").innerText =
        messages[randomIndex];
}



// FITUR 2: CHANGE BACKGROUND

function changeBackground() {

    const colors = [
        "#fce4ec",
        "#e3f2fd",
        "#e8f5e9",
        "#fff3e0",
        "#ede7f6",
        "#d7ccc8"
    ];

    const randomIndex = Math.floor(
        Math.random() * colors.length
    );

    document.body.style.backgroundColor =
        colors[randomIndex];
}
