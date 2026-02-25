/* =========================
   TYPING ANIMATION (LEBIH HALUS)
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
        setTimeout(playTyping, 1500);
        return;
    }

    if (i === 0 && deleting) {
        deleting = false;
        setTimeout(playTyping, 400);
        return;
    }

    setTimeout(playTyping, deleting ? 60 : 100);
}

/* =========================
   SCROLL REVEAL (LEBIH KECIL)
========================= */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.15 });

function initScrollReveal() {
    document.querySelectorAll("section, .card, .bento-item, .img-item, .social-card")
        .forEach(el => {
            el.classList.add("hidden");
            observer.observe(el);
        });
}

/* =========================
   RIPPLE EFFECT (LEBIH KECIL)
========================= */
function initRippleEffect() {
    document.querySelectorAll(".card, .bento-item, .social-card, .img-item")
        .forEach(element => {

            element.addEventListener("click", function(e) {

                const circle = document.createElement("span");
                const diameter = Math.min(this.clientWidth, this.clientHeight) * 0.6;
                const radius = diameter / 2;

                circle.style.width = circle.style.height = `${diameter}px`;
                circle.style.left = `${e.offsetX - radius}px`;
                circle.style.top = `${e.offsetY - radius}px`;
                circle.style.position = "absolute";
                circle.style.borderRadius = "50%";
                circle.style.background = "rgba(56,189,248,0.35)";
                circle.style.transform = "scale(0)";
                circle.style.animation = "rippleAnim 0.5s ease-out";

                this.style.position = "relative";
                this.style.overflow = "hidden";

                this.appendChild(circle);

                setTimeout(() => {
                    circle.remove();
                }, 500);
            });
        });
}

/* =========================
   NAVBAR AUTO HIDE (LEBIH HALUS)
========================= */
let lastScroll = 0;
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 120) {
        navbar.style.top = "-80px";
    } else {
        navbar.style.top = "20px";
    }

    lastScroll = currentScroll;
});

/* =========================
   INIT
========================= */
document.addEventListener("DOMContentLoaded", () => {
    playTyping();
    initScrollReveal();
    initRippleEffect();
});
