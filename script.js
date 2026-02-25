/* =========================
   TYPING ANIMATION
========================= */
const text = "Lukman Al Khakim";
let i = 0;
let deleting = false;

function playTyping() {
    const target = document.getElementById("typing");
    if (!target) return;

    if (!deleting) {
        target.textContent = text.slice(0, i + 1);
        i++;
    } else {
        target.textContent = text.slice(0, i - 1);
        i--;
    }

    if (i === text.length) {
        deleting = true;
        setTimeout(playTyping, 2000);
        return;
    }

    if (i === 0 && deleting) {
        deleting = false;
        setTimeout(playTyping, 500);
        return;
    }

    setTimeout(playTyping, deleting ? 80 : 120);
}

/* =========================
   SCROLL REVEAL
========================= */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

function initScrollReveal() {
    document.querySelectorAll("section, .card, .bento-item, .img-item, .social-card")
        .forEach(el => {
            el.classList.add("hidden");
            observer.observe(el);
        });
}

/* =========================
   RIPPLE EFFECT
========================= */
function initRippleEffect() {
    document.querySelectorAll(".card, .bento-item, .social-card, .img-item")
        .forEach(element => {

            element.addEventListener("click", function(e) {

                const circle = document.createElement("span");
                const diameter = Math.max(this.clientWidth, this.clientHeight);
                const radius = diameter / 2;

                circle.style.width = circle.style.height = `${diameter}px`;
                circle.style.left = `${e.offsetX - radius}px`;
                circle.style.top = `${e.offsetY - radius}px`;
                circle.style.position = "absolute";
                circle.style.borderRadius = "50%";
                circle.style.background = "rgba(56,189,248,0.5)";
                circle.style.transform = "scale(0)";
                circle.style.animation = "rippleAnim 0.6s linear";

                this.style.position = "relative";
                this.style.overflow = "hidden";

                this.appendChild(circle);

                setTimeout(() => {
                    circle.remove();
                }, 600);
            });
        });
}

/* =========================
   NAVBAR AUTO HIDE
========================= */
let lastScroll = 0;
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 100) {
        navbar.style.top = "-100px";
    } else {
        navbar.style.top = "20px";
    }

    lastScroll = currentScroll;
});

/* =========================
   PARALLAX LIGHT EFFECT
========================= */
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        const speed = 0.15;
        const yPos = -(window.scrollY * speed);
        section.style.backgroundPosition = `center ${yPos}px`;
    });
});

/* =========================
   SOCIAL LINKS
========================= */
function openSocial(name) {
    const links = {
        instagram: "https://instagram.com/usernamekamu",
        tiktok: "https://tiktok.com/@usernamekamu",
        facebook: "https://facebook.com/usernamekamu",
        whatsapp: "https://wa.me/628xxxxxxxxxx"
    };

    if (links[name]) {
        window.open(links[name], "_blank");
    }
}

/* =========================
   INIT
========================= */
document.addEventListener("DOMContentLoaded", () => {
    playTyping();
    initScrollReveal();
    initRippleEffect();
});
