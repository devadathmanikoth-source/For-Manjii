/* ====================================
   A Letter For Manjii ❤️
   Version 4.0
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

/* Smooth Scroll */

document.getElementById("startBtn").addEventListener("click", () => {
    document.getElementById("gallery").scrollIntoView({
        behavior: "smooth"
    });
});

/* Photo Animation */

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