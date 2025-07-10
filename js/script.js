// ===== Typing Animation =====
// const typingText = "Aspiring Computer Science Engineer";
// let index = 0;
// function typeEffect() {
//     if (index < typingText.length) {
//         document.querySelector(".typing-text").textContent += typingText.charAt(index);
//         index++;
//         setTimeout(typeEffect, 100);
//     }
// }
// typeEffect();
const typingElements = document.querySelectorAll(".typing-text");
const texts = [
    "Aspiring Computer Science Engineer", // For the first <h2>
    "Web Developer | Laravel & JS Enthusiast" // For the second <h2>
];

typingElements.forEach((el, idx) => {
    let i = 0;
    function type() {
        if (i < texts[idx].length) {
            el.textContent += texts[idx].charAt(i);
            i++;
            setTimeout(type, 100);
        } else {
            // Optional: Loop after pause
            setTimeout(() => {
                el.textContent = "";
                i = 0;
                type();
            }, 2000);
        }
    }
    type();
});



// ===== Hamburger Menu Toggle =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// ===== Close Navbar on Link Click (Mobile) =====
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// ===== Smooth Scroll for Anchor Links =====
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
smoothScrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== Active Nav Link on Scroll =====
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY + 100;
    sections.forEach(section => {
        if (
            scrollPos >= section.offsetTop &&
            scrollPos < section.offsetTop + section.offsetHeight
        ) {
            navItems.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${section.id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// ===== Scroll Animation =====
const animatedSections = document.querySelectorAll('.about, .skills, .blog, .contact');
window.addEventListener('scroll', () => {
    animatedSections.forEach(section => {
        if (
            section.getBoundingClientRect().top < window.innerHeight * 0.8
        ) {
            section.classList.add('visible');
        }
    });
});
