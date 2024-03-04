document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const thumbnails = document.querySelectorAll(".thumbnail-container img");
  const prevButton = document.querySelector(".prev-button");
  const nextButton = document.querySelector(".next-button");
  const fullscreenButton = document.querySelector(".fullscreen-button");
  const fullscreenOverlay = document.querySelector(".fullscreen-overlay");
  const counter = document.querySelector(".slide-counter span");

  let currentSlideIndex = 0;

  // Function to show a specific slide by its index
  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });
    counter.textContent = `${index + 1} / ${slides.length}`;

    thumbnails.forEach((thumbnail, i) => {
      if (i === index) {
        thumbnail.classList.add("active");
      } else {
        thumbnail.classList.remove("active");
      }
    });
  }

  // Function to show the next slide
  function showNextSlide() {
    currentSlideIndex++;
    if (currentSlideIndex >= slides.length) {
      currentSlideIndex = 0;
    }
    showSlide(currentSlideIndex);
  }

  // Function to show the previous slide
  function showPrevSlide() {
    currentSlideIndex--;
    if (currentSlideIndex < 0) {
      currentSlideIndex = slides.length - 1;
    }
    showSlide(currentSlideIndex);
  }

  // Function to toggle fullscreen mode
  function toggleFullscreen() {
    const sliderContainer = document.querySelector(".slider-container");
    if (sliderContainer.classList.contains("fullscreen")) {
      exitFullscreen();
    } else {
      enterFullscreen();
    }
  }

  // Function to enter fullscreen mode
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

  // Function to exit fullscreen mode
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

  // Function to exit fullscreen mode on pressing Escape key
  function exitOnEsc(event) {
    if (event.key === "Escape") {
      exitFullscreen();
    }
  }

  fullscreenButton.addEventListener("click", toggleFullscreen);
  prevButton.addEventListener("click", showPrevSlide);
  nextButton.addEventListener("click", showNextSlide);
  fullscreenOverlay.addEventListener("click", exitFullscreen);
  slides.forEach((slide) => {
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

//  mini-slider

document.addEventListener("DOMContentLoaded", function () {
  let numVisibleThumbnails = calculateNumVisibleThumbnails();

  const thumbnails = document.querySelectorAll(".thumbnail-container img");
  const leftArrowButton = document.querySelector(".left-arrow-button");
  const rightArrowButton = document.querySelector(".right-arrow-button");
  let currentThumbnailIndex = 0;

  // Function to show thumbnails based on current index
  function showThumbnails(startIndex) {
    thumbnails.forEach((thumbnail) => (thumbnail.style.display = "none"));
    for (
      let i = startIndex;
      i < startIndex + numVisibleThumbnails && i < thumbnails.length;
      i++
    ) {
      thumbnails[i].style.display = "block";
    }
    checkButtonStates();
  }

  // Function to check and update button states
  function checkButtonStates() {
    if (currentThumbnailIndex === 0) {
      leftArrowButton.classList.add("disabled");
    } else {
      leftArrowButton.classList.remove("disabled");
    }

    if (currentThumbnailIndex + numVisibleThumbnails >= thumbnails.length) {
      rightArrowButton.classList.add("disabled");
    } else {
      rightArrowButton.classList.remove("disabled");
    }
  }

  // Function to calculate the number of visible thumbnails based on window width
  function calculateNumVisibleThumbnails() {
    return window.innerWidth <= 360 ? 6 : 5;
  }

  // Function to handle window resize and adjust thumbnail visibility
  function handleResize() {
    numVisibleThumbnails = calculateNumVisibleThumbnails();
    currentThumbnailIndex = 0;
    showThumbnails(currentThumbnailIndex);
  }

  // Event listeners for navigation buttons
  leftArrowButton.addEventListener("click", () => {
    if (currentThumbnailIndex > 0) {
      currentThumbnailIndex--;
      showThumbnails(currentThumbnailIndex);
    }
  });

  rightArrowButton.addEventListener("click", () => {
    if (currentThumbnailIndex < thumbnails.length - numVisibleThumbnails) {
      currentThumbnailIndex++;
      showThumbnails(currentThumbnailIndex);
    }
  });

  // Event listener for window resize
  window.addEventListener("resize", handleResize);

  showThumbnails(currentThumbnailIndex);
});
