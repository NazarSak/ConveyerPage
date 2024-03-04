document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const thumbnails = document.querySelectorAll(".thumbnail-container img");
    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");
    const fullscreenButton = document.querySelector(".fullscreen-button");
    const fullscreenOverlay = document.querySelector(".fullscreen-overlay");
    const counter = document.querySelector(".slide-counter span");

    let currentSlideIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = "block";
            } else {
                slide.style.display = "none";
            }
        });
        counter.textContent = `${index + 1} / ${slides.length}`;
        
        thumbnails.forEach((thumbnail, i) => {
            if (i === index) {
                thumbnail.classList.add('active');
            } else {
                thumbnail.classList.remove('active');
            }
        });
    }

    function showNextSlide() {
        currentSlideIndex++;
        if (currentSlideIndex >= slides.length) {
            currentSlideIndex = 0;
        }
        showSlide(currentSlideIndex);
    }

    function showPrevSlide() {
        currentSlideIndex--;
        if (currentSlideIndex < 0) {
            currentSlideIndex = slides.length - 1;
        }
        showSlide(currentSlideIndex);
    }

    function toggleFullscreen() {
        const sliderContainer = document.querySelector(".slider-container");
        if (sliderContainer.classList.contains("fullscreen")) {
            exitFullscreen();
        } else {
            enterFullscreen();
        }
    }

    function enterFullscreen() {
        const sliderContainer = document.querySelector(".slider-container");
        const slide = document.querySelector(".slide");
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        const widthPercentage = 70;
        const heightPercentage = 70;

        slide.style.width = `${(windowWidth * widthPercentage) / 100}px`;
        slide.style.height = `${(windowHeight * heightPercentage) / 100}px`;

        sliderContainer.classList.add("fullscreen");
        document.addEventListener("keydown", exitOnEsc);
    }

    function exitFullscreen() {
        const sliderContainer = document.querySelector(".slider-container");
        const slide = document.querySelector(".slide");
        const widthPercentage = 100;
        const heightPercentage = 100;

        slide.style.width = `${widthPercentage}%`;
        slide.style.height = `${heightPercentage}%`;

        sliderContainer.classList.remove("fullscreen");
        document.removeEventListener("keydown", exitOnEsc);
    }

    function exitOnEsc(event) {
        if (event.key === "Escape") {
            exitFullscreen();
        }
    }

    fullscreenButton.addEventListener("click", toggleFullscreen);

    prevButton.addEventListener("click", showPrevSlide);
    nextButton.addEventListener("click", showNextSlide);

    fullscreenOverlay.addEventListener("click", exitFullscreen);

    slides.forEach(slide => {
        slide.addEventListener("click", exitFullscreen);
    });

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener("click", () => {
            currentSlideIndex = index;
            showSlide(currentSlideIndex);
        });
    });

    showSlide(currentSlideIndex);
});
