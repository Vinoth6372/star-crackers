// CARD ANIMATION
const cards = document.querySelectorAll(".plan-card");

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.background =
        `radial-gradient(circle at ${x}px ${y}px,
        rgba(212,175,55,0.18),
        white 60%)`;
    });

    card.addEventListener("mouseleave", () => {

        card.style.background = "#fff";
    });
});


// SCROLL REVEAL
const revealCards =
document.querySelectorAll(".plan-card");

function reveal(){

    revealCards.forEach(card => {

        const top =
        card.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            card.style.opacity = "1";
            card.style.transform =
            "translateY(0)";
        }
    });
}

revealCards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform =
    "translateY(60px)";
    card.style.transition =
    "all 0.8s ease";
});

window.addEventListener("scroll", reveal);

reveal();

 
    document.addEventListener("DOMContentLoaded", () => {

        const hamburger = document.querySelector(".hamburger");
        const navLinks = document.querySelector(".nav-links");

        if (!hamburger || !navLinks) return;

        hamburger.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });

    });
