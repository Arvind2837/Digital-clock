let is24Hour = true;     // default = 24 hour
let showSeconds = true;

function updateClock() {
    const now = new Date();

    let hours = now.getHours(); // 0–23
    let minutes = String(now.getMinutes()).padStart(2, "0");
    let seconds = String(now.getSeconds()).padStart(2, "0");
    let ampm = "";

    // 12-hour format
    if (!is24Hour) {
        ampm = hours >= 12 ? " PM" : " AM";
        hours = hours % 12;
        if (hours === 0) hours = 12; // 12 AM / 12 PM fix
    }

    // 24-hour format
    if (is24Hour) {
        hours = String(hours).padStart(2, "0");
    }

    let time = showSeconds
        ? `${hours}:${minutes}:${seconds}${ampm}`
        : `${hours}:${minutes}${ampm}`;

    document.getElementById("clock").innerText = time;

    // Update date
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const day = days[now.getDay()];
    const date = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    document.getElementById("date").innerText = `${day}, ${date} ${month} ${year}`;
}

// run clock
setInterval(updateClock, 1000);
updateClock();

// 12 / 24 toggle
function toggleFormat() {
    is24Hour = !is24Hour;
    updateClock();
}

// seconds toggle
function toggleSeconds() {
    showSeconds = !showSeconds;
    updateClock();
}

// theme
function changeTheme(theme) {
    document.body.className = theme;
}

// font size
function changeFontSize(size) {
    document.getElementById("clock").style.fontSize = size + "px";
    document.getElementById("date").style.fontSize = (size * 0.36) + "px"; // Scale date font proportionally
}