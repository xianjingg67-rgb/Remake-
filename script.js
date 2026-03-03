// MULTI TEXT TYPING
const words = [
"Lukman Al Khakim",
"Full Stack Developer",
"Graphic Designer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typingEffect() {
const target = document.getElementById("typing");
if (!target) return;

const current = words[wordIndex];

if (!deleting) {
target.textContent = current.slice(0, charIndex + 1);
charIndex++;
} else {
target.textContent = current.slice(0, charIndex - 1);
charIndex--;
}

let speed = deleting ? 70 : 120;

if (charIndex === current.length) {
deleting = true;
speed = 2000;
} else if (charIndex === 0) {
deleting = false;
wordIndex = (wordIndex + 1) % words.length;
speed = 500;
}

setTimeout(typingEffect, speed);
}

// REVEAL ON SCROLL
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
reveals.forEach(el => {
const windowHeight = window.innerHeight;
const elementTop = el.getBoundingClientRect().top;
if (elementTop < windowHeight - 100) {
el.classList.add("active");
}
});
});

document.addEventListener("DOMContentLoaded", typingEffect);
