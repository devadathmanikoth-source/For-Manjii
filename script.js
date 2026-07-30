/* ====================================
   A Letter For Manjii ❤️
   Version 5.0
==================================== */

// ---------------------------
// TYPEWRITER
// ---------------------------

const message = `Hey Manjii ❤️

I made this little website
because I wanted to make you smile.

Thank you for always being there.

Love,
Your Little Brother ❤️`;

const typing = document.getElementById("typing");
let index = 0;

function typeWriter() {

    if (index < message.length) {

        typing.textContent += message.charAt(index);

        index++;

        setTimeout(typeWriter, 40);

    }

}

window.onload = () => {

    typeWriter();

};

// ---------------------------
// MUSIC + SCROLL
// ---------------------------

const startBtn = document.getElementById("startBtn");
const gallery = document.getElementById("gallery");
const music = document.getElementById("bgMusic");

startBtn.addEventListener("click", () => {

    // Play music
    music.play().catch(() => {
        console.log("Music autoplay blocked until user interaction.");
    });

    // Hide button
    startBtn.style.opacity = "0";

    startBtn.style.transform = "scale(.8)";

    setTimeout(() => {

        startBtn.style.display = "none";

    },500);

    // Scroll
    gallery.scrollIntoView({

        behavior:"smooth"

    });

});

// ---------------------------
// GALLERY FADE-IN
// ---------------------------

const cards = document.querySelectorAll(".photo-card");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";

        }

    });

},{
    threshold:.2
});

cards.forEach(card=>{

    card.style.opacity="0";

    card.style.transform="translateY(80px)";

    card.style.transition=".8s";

    observer.observe(card);

});

// ---------------------------
// FLOATING HEARTS
// ---------------------------

const heartContainer = document.getElementById("heart-container");

function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(20+Math.random()*20)+"px";

    heart.style.animationDuration=(6+Math.random()*4)+"s";

    heartContainer.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },10000);

}

setInterval(createHeart,900);

// ---------------------------
// CONFETTI
// ---------------------------

const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti=[];

function makeConfetti(){

    confetti=[];

    for(let i=0;i<200;i++){

        confetti.push({

            x:Math.random()*canvas.width,

            y:Math.random()*canvas.height-canvas.height,

            r:Math.random()*6+2,

            d:Math.random()*5+2,

            color:`hsl(${Math.random()*360},100%,70%)`

        });

    }

}

function drawConfetti(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    confetti.forEach(c=>{

        ctx.beginPath();

        ctx.fillStyle=c.color;

        ctx.arc(c.x,c.y,c.r,0,Math.PI*2);

        ctx.fill();

        c.y+=c.d;

        if(c.y>canvas.height){

            c.y=-10;

        }

    });

    requestAnimationFrame(drawConfetti);

}

makeConfetti();
drawConfetti();

// ---------------------------
// RESIZE
// ---------------------------

window.addEventListener("resize",()=>{

    canvas.width=window.innerWidth;

    canvas.height=window.innerHeight;

});
