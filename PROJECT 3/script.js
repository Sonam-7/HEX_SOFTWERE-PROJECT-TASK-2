function donateNow() {
    alert("Thank you for your interest in donating! Visit our donation page to proceed.");
}

// Animation on scroll
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('.section');
    sections.forEach(sec => {
        const position = sec.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (position < screenPosition) {
            sec.style.opacity = "2";
            sec.style.transform = "translateY(1)";
        }
    });
});

