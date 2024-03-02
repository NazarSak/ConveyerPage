// popup

document.addEventListener("DOMContentLoaded", function () {
  const infoCircle = document.querySelector(".conveyor-width-title svg");
  const infoPopup = document.querySelector(".info-popup");

  infoCircle.addEventListener("mouseover", function () {
    infoPopup.classList.add("active");
  });

  infoCircle.addEventListener("mouseout", function () {
    infoPopup.classList.remove("active");
  });
});

// Conveyor Belt Width

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".conveyor-width-list button");

  function selectButton(button) {
    buttons.forEach((btn) => btn.classList.remove("selected"));
    button.classList.add("selected");
    const selectedWidth = button.textContent.trim();
    sessionStorage.setItem("selectedWidth", selectedWidth);
  }

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      selectButton(this);
    });
  });

  sessionStorage.removeItem("selectedWidth");
});

// Conveyor Belt Width Custom

document.addEventListener("DOMContentLoaded", function () {
  const customButton = document.getElementById("customButton");
  const customCounter = document.querySelector(
    ".conveyor-width-counter-custom"
  );
  const widthButtons = document.querySelectorAll(".conveyor-width-list button");
  const buttonsArray = Array.from(widthButtons);
  const buttonsExceptLast = buttonsArray.slice(0, -1);

  customButton.addEventListener("click", function () {
    customCounter.style.display = "flex";
  });

  buttonsExceptLast.forEach(function (button) {
    button.addEventListener("click", function () {
      console.log("object");
      customCounter.style.display = "none";
    });
  });
});

// counter for bed and conveyer

document.addEventListener("DOMContentLoaded", function () {
  const bedCounter = {
    decrementButton: document.querySelector(
      ".bed-length-counter-controls .decrementButton"
    ),
    incrementButton: document.querySelector(
      ".bed-length-counter-controls .incrementButton"
    ),
    counter: document.querySelector(".bed-length-counter-controls .counter"),
  };

  const conveyorCounter = {
    decrementButton: document.querySelector(
      ".conveyor-width-counter-custom .decrementButton"
    ),
    incrementButton: document.querySelector(
      ".conveyor-width-counter-custom .incrementButton"
    ),
    counter: document.querySelector(".conveyor-width-counter-custom .counter"),
  };

  function updateCounter(counter, decrementButton) {
    const count = parseInt(counter.textContent);
    counter.textContent = count + "”";

    if (count === 0) {
      decrementButton.disabled = true;
      decrementButton.style.background = "#D6DCDD";
      decrementButton.querySelector("svg").setAttribute("fill", "none");
      decrementButton
        .querySelector("svg path")
        .setAttribute("stroke", "#FFFFFF");
      decrementButton.style.cursor = "default";
    } else {
      decrementButton.disabled = false;
      decrementButton.style.background = "";
      decrementButton.querySelector("svg").setAttribute("fill", "none");
      decrementButton
        .querySelector("svg path")
        .setAttribute("stroke", "#000000");
      decrementButton.style.cursor = "pointer";
    }
  }

  bedCounter.decrementButton.addEventListener("click", function () {
    let count = parseInt(bedCounter.counter.textContent);
    if (count > 0) {
      count--;
      bedCounter.counter.textContent = count + "”";
      updateCounter(bedCounter.counter, bedCounter.decrementButton);
    }
  });

  bedCounter.incrementButton.addEventListener("click", function () {
    let count = parseInt(bedCounter.counter.textContent);
    count++;
    bedCounter.counter.textContent = count + "”";
    updateCounter(bedCounter.counter, bedCounter.decrementButton);
  });

  conveyorCounter.decrementButton.addEventListener("click", function () {
    let count = parseInt(conveyorCounter.counter.textContent);
    if (count > 0) {
      count--;
      conveyorCounter.counter.textContent = count + "”";
      updateCounter(conveyorCounter.counter, conveyorCounter.decrementButton);
    }
  });

  conveyorCounter.incrementButton.addEventListener("click", function () {
    let count = parseInt(conveyorCounter.counter.textContent);
    count++;
    conveyorCounter.counter.textContent = count + "”";
    updateCounter(conveyorCounter.counter, conveyorCounter.decrementButton);
  });

  updateCounter(bedCounter.counter, bedCounter.decrementButton);
  updateCounter(conveyorCounter.counter, conveyorCounter.decrementButton);
});

// counter quantity

document.addEventListener("DOMContentLoaded", function () {
  const productQuantityContainer = {
    decrementButton: document.querySelector(
      ".product-quantity-container button:first-child"
    ),
    incrementButton: document.querySelector(
      ".product-quantity-container button:last-child"
    ),
    counter: document.querySelector(".product-quantity-container span"),
  };

  function updateCounter(counter, decrementButton) {
    const count = parseInt(counter.textContent);
    counter.textContent = count;

    if (count === 0) {
      decrementButton.disabled = true;
      decrementButton.style.background = "#D6DCDD";
      decrementButton.querySelector("svg path").setAttribute("stroke", "white");
      decrementButton.style.cursor = "default";
    } else {
      decrementButton.disabled = false;
      decrementButton.style.background = "";
      decrementButton.querySelector("svg path").setAttribute("stroke", "black");
      decrementButton.style.cursor = "pointer";
    }
  }

  productQuantityContainer.decrementButton.addEventListener(
    "click",
    function () {
      let count = parseInt(productQuantityContainer.counter.textContent);
      if (count > 0) {
        count--;
        productQuantityContainer.counter.textContent = count;
        updateCounter(
          productQuantityContainer.counter,
          productQuantityContainer.decrementButton
        );
      }
    }
  );

  productQuantityContainer.incrementButton.addEventListener(
    "click",
    function () {
      let count = parseInt(productQuantityContainer.counter.textContent);
      count++;
      productQuantityContainer.counter.textContent = count;
      updateCounter(
        productQuantityContainer.counter,
        productQuantityContainer.decrementButton
      );
    }
  );

  updateCounter(
    productQuantityContainer.counter,
    productQuantityContainer.decrementButton
  );
});

