const images = [
    {
        src: "/static/images/homepage_slide1.png",
        text: "Scribbly is designed for rapid image generation. Within seconds, transform your ideas into stunning visuals using advanced AI."
    },
    {
        src: "/static/images/homepage_slide2.png",
        text: "Never lose track of your creativity! Scribbly keeps a history of your past generations, allowing you to revisit, refine, and reimagine your artwork anytime."
    },
    {
        src: "/static/images/homepage_slide3.png",
        text: "Curious about how AI generates images? Scribbly helps you learn fundamental GenAI concepts through an interactive and engaging experience."
    }
];

let currentSlide = 0;
let autoScrollInterval;

/* Function to update the carousel with transition */
function updateCarousel() {
    const imageElement = document.getElementById("carousel-image");
    const textElement = document.getElementById("carousel-text");

    // Add fade-out effect
    imageElement.style.opacity = "0";
    textElement.style.opacity = "0";

    setTimeout(() => {
        imageElement.src = images[currentSlide].src;
        textElement.innerText = images[currentSlide].text;

        // Add fade-in effect
        imageElement.style.opacity = "1";
        textElement.style.opacity = "1";
    }, 300);
}

/* Function to go to the previous slide */
function prevSlide() {
    currentSlide = (currentSlide === 0) ? images.length - 1 : currentSlide - 1;
    updateCarousel();
    resetAutoScroll();
}

/* Function to go to the next slide */
function nextSlide() {
    currentSlide = (currentSlide === images.length - 1) ? 0 : currentSlide + 1;
    updateCarousel();
    resetAutoScroll();
}

/* Function to start auto-scrolling */
function startAutoScroll() {
    autoScrollInterval = setInterval(nextSlide, 5000);
}

/* Function to reset auto-scroll when manually navigating */
function resetAutoScroll() {
    clearInterval(autoScrollInterval);
    startAutoScroll();
}

/* Start auto-scrolling when the page loads */
document.addEventListener("DOMContentLoaded", () => {
    updateCarousel();
    startAutoScroll();
});
