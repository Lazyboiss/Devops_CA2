const greetings = [
    "Welcome back, ",
    "Let's generate something amazing, ",
    "Your imagination starts here, ",
    "Scribbly is ready for you, ",
];

let currentSlide = 0;
let autoScrollInterval;

/* Function to update greeting */
function setRandomGreeting() {
    const greetingElement = document.getElementById("greeting");
    const username = greetingElement.getAttribute("data-username"); // Retrieve username
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    greetingElement.innerText = `${randomGreeting}${username}! 🔮`;
}

/* Function to update the carousel */
function updateCarousel() {
    const images = [
        { src: "/static/images/placeholder1.png", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { src: "/static/images/placeholder2.png", text: "Curabitur eget sapien nec eros tincidunt suscipit." },
        { src: "/static/images/placeholder3.png", text: "Suspendisse potenti. Pellentesque habitant morbi tristique." }
    ];

    const imageElement = document.getElementById("carousel-image");
    const textElement = document.getElementById("carousel-text");

    imageElement.style.opacity = "0";
    textElement.style.opacity = "0";

    setTimeout(() => {
        imageElement.src = images[currentSlide].src;
        textElement.innerText = images[currentSlide].text;

        imageElement.style.opacity = "1";
        textElement.style.opacity = "1";
    }, 300);
}

/* Function to go to the previous slide */
function prevSlide() {
    currentSlide = (currentSlide === 0) ? 2 : currentSlide - 1;
    updateCarousel();
    resetAutoScroll();
}

/* Function to go to the next slide */
function nextSlide() {
    currentSlide = (currentSlide === 2) ? 0 : currentSlide + 1;
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

/* Start auto-scrolling and set greeting when page loads */
document.addEventListener("DOMContentLoaded", () => {
    setRandomGreeting();
    updateCarousel();
    startAutoScroll();
});
