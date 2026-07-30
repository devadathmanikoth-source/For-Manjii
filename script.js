/* ====================================
   A Letter For Manjii ❤️
   Version 5.0
==================================== */

const message = `Hey Manjii ❤️

I made this little website
because I wanted to give you
something from my heart.

I hope it makes you smile.

Love,
Your little brother ❤️`;

const typing = document.getElementById("typing");
let i = 0;

function typeWriter() {
    if (i < message.length) {
        typing.textContent += message.charAt(i);
        i++;
        setTimeout(typeWriter, 40);
    }
}

window.addEventListener("load", () => {
    typeWriter();
});

/* =========================
   Background Music
========================= */

const bgMusic = document.getElementById("bgMusic");

function startMusic() {
    bgMusic.play().catch(() => {});
    document.removeEventListener("click", startMusic);
    document.removeEventListener("touchstart", startMusic);
}

// Play music on first click/tap anywhere
document.addEventListener("click", startMusic);
document.addEventListener("touchstart", startMusic);

/* =========================
   Smooth Scroll
========================= */

document.getElementById("startBtn").addEventListener("click", () => {

    bgMusic.play().catch(() => {});

    document.getElementById("gallery").scrollIntoView({
        behavior: "smooth"
    });

});

/* =========================
   Photo Animation
========================= */

const cards = document.querySelectorAll(".photo-card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.2
});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(80px)";
    card.style.transition = ".8s";

    observer.observe(card);

});
