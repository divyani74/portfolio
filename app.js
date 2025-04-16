// GSAP Timeline Animation for Navbar
const tl = gsap.timeline();

tl.from(".nav h1", {
    y: -20,
    opacity: 0,
    duration: 1,
    delay: 1
});

tl.from(".nav h3", {
    y: -20,
    opacity: 0,
    duration: 1,
    stagger: 0.3
});

tl.from("h2", {
    y: 20,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    stagger: 0.3
});

// Light/Dark Mode Toggle
const darkModeToggle = document.getElementById("dark-mode");
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Optional Form Submission Prevention (if there's a form with id="myForm")
const myForm = document.querySelector("#myForm");
if (myForm) {
    myForm.addEventListener("submit", function (e) {
        e.preventDefault();
        console.log("Form submission prevented");
    });
}

// Home Section Animations
gsap.from(".home h2", {
    y: -30,
    opacity: 0,
    duration: 0.5,
    delay: 1
});

gsap.from(".home h1", {
    opacity: 0,
    duration: 0.5,
    delay: 1.2
});

gsap.from(".home button", {
    opacity: 0,
    duration: 0.5,
    delay: 1.4
});

// Projects Section Animation
gsap.from(".projects h1", {
    y: 10,
    opacity: 0,
    duration: 0.5,
    delay: 1
});
