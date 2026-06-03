
// NAVBAR SCROLL EFFECT


const header = document.querySelector(".header");
const ticker = document.querySelector(".news-ticker-wrap");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.classList.add("scrolled");
        ticker.classList.add("hide");

    }else{

        header.classList.remove("scrolled");
        ticker.classList.remove("hide");
    }

});


// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        if(target){
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// SCROLL REVEAL ANIMATION
const revealElements =
document.querySelectorAll(
    ".feature-card, .category-card, .product-card, .offer-section"
);

function revealOnScroll() {

    revealElements.forEach(element => {

        const windowHeight =
            window.innerHeight;

        const revealTop =
            element.getBoundingClientRect().top;

        const revealPoint = 100;

        if (revealTop < windowHeight - revealPoint) {

            element.style.opacity = "1";
            element.style.transform =
                "translateY(0)";
        }
    });
}

// INITIAL STYLE
revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform =
        "translateY(40px)";

    element.style.transition =
        "all 0.8s ease";
});

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


// PREMIUM BUTTON HOVER EFFECT
const vbuttons =
document.querySelectorAll(
    ".gold-btn, .premium-btn, button"
);

vbuttons.forEach(button => {

    button.addEventListener(
        "mouseenter",
        () => {
            button.style.transform =
                "translateY(-4px)";
        }
    );

    button.addEventListener(
        "mouseleave",
        () => {
            button.style.transform =
                "translateY(0)";
        }
    );
});


// HERO IMAGE FLOAT EFFECT
    // VIDEO CAROUSEL
      // VIDEO CAROUSEL
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {

    slides.forEach((slide, i) => {

        const video = slide.querySelector("video");

        if (i === index) {

            slide.classList.add("active");

            if (video) {
                video.currentTime = 0;

                const playPromise = video.play();

                if (playPromise !== undefined) {
                    playPromise.catch(() => {
                        // autoplay blocked (mobile safe fallback)
                        video.muted = true;
                        video.play();
                    });
                }
            }

        } else {

            slide.classList.remove("active");

            if (video) {
                video.pause();
            }
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// INIT (important fix)
window.addEventListener("load", () => {
    showSlide(0);
    setInterval(nextSlide, 5000);
});

/* CATEGORY BUTTONS */

const catButtons =
document.querySelectorAll(".cat-btn");

const catGroups =
document.querySelectorAll(".category-group");

catButtons.forEach(button => {

    button.addEventListener("click", () => {

        /* REMOVE ACTIVE */

        catButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        catGroups.forEach(group => {
            group.classList.remove("active");
        });

        /* ACTIVE BUTTON */

        button.classList.add("active");

        /* SHOW TARGET */

        const category =
        button.getAttribute("data-category");

        const target =
        document.getElementById(category);

        if(target){
            target.classList.add("active");
        }

    });

});

// block 1 for mobile optimization

let lastScroll = 0;
const isMobile = window.innerWidth <= 768;

window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    // avoid excessive DOM writes on mobile
    if (Math.abs(currentScroll - lastScroll) < 5) return;

    if (currentScroll > 50) {
        header.classList.add("scrolled");
        if (ticker) ticker.classList.add("hide");
    } else {
        header.classList.remove("scrolled");
        if (ticker) ticker.classList.remove("hide");
    }

    lastScroll = currentScroll;
}, { passive: true });

// block2

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        if (!target) return;

        const headerOffset = isMobile ? 90 : 120;

        const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    });
});

// block3

if ("ontouchstart" in window) {
    document.querySelectorAll(
        ".product-card, .feature-card, .category-card, .cat-product, .v-card"
    ).forEach(el => {
        el.addEventListener("touchstart", () => {
            el.classList.add("touch-active");
        });

        el.addEventListener("touchend", () => {
            setTimeout(() => {
                el.classList.remove("touch-active");
            }, 300);
        });
    });
}

// block4

const searchInput = document.getElementById("searchInput");
if (searchInput) {
    searchInput.addEventListener("keyup", () => {

        const filter = searchInput.value.toLowerCase();
        const products = document.querySelectorAll(".product-card, .category-card");

        products.forEach(product => {
            const text = product.innerText.toLowerCase();

            product.style.display = text.includes(filter) ? "block" : "none";
        });
    });

    // hide keyboard after enter (mobile UX improvement)
    searchInput.addEventListener("search", () => {
        searchInput.blur();
    });
}

// block 5

catButtons.forEach(button => {
    button.addEventListener("click", () => {

        const category = button.getAttribute("data-category");
        const target = document.getElementById(category);

        if (target && isMobile) {
            setTimeout(() => {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }, 200);
        }

    });
});
/* ==========================================
   MOBILE MENU
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    if (!hamburger || !navLinks) return;

    hamburger.addEventListener("click", function(e){

        e.preventDefault();
        e.stopPropagation();

        navLinks.classList.toggle("active");
        hamburger.classList.toggle("active");

    });

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");
            hamburger.classList.remove("active");

        });

    });

});