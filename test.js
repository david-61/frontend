 let counter = 1;
const maxCounter = 4;

function scrollToNextSection() {
  if (counter >= maxCounter) {
    return;
  }

  let currentSection = document.querySelector("section:not([style='display: none;'])");
  let nextSection = currentSection.nextElementSibling;

  if (nextSection !== null) {
    nextSection.style.display = "block";
    currentSection.style.display = "none";
    nextSection.scrollIntoView({ behavior: "smooth" });
    counter++;

    if (counter >= maxCounter) {
      document.getElementById("nextBtn").disabled = true;
    }

    document.getElementById("prevBtn").disabled = false;
  }
}

function scrollToPrevSection() {
  if (counter <= 1) {
    return;
  }

  let currentSection = document.querySelector("section:not([style='display: none;'])");
  let prevSection = currentSection.previousElementSibling;

  if (prevSection !== null) {
    prevSection.style.display = "block";
    currentSection.style.display = "none";
    prevSection.scrollIntoView({ behavior: "smooth", block: "end" });
    counter--;

    if (counter <= 1) {
      document.getElementById("prevBtn").disabled = true;
    }

    document.getElementById("nextBtn").disabled = false;
  }
}


/*
 
 document.addEventListener("DOMContentLoaded", () => {
  new fullpage("#fullpage", {
    lazyLoading: true,
    anchors: ["page1", "page2", "page3", "page4"]
  });

  let controlB = document.querySelector("#controlButtons");
  let buttons = document.querySelectorAll(".btn");
  let inputs = document.querySelectorAll(".required");

  // Previous and next Buttons

  let num = 1;

  $(document).on("click", "#next", function () {
    console.log("Next Click");

    if (num == 17) {
      $("#nextB").off("click");
    }
    fullpage_api.moveTo(`page${num++}`);
  });

  $(document).on("click", "#preB", function () {
    console.log("Previous Click");
    if (num == 0) {
      $("#previous").off("click");
    } else {
      fullpage_api.moveTo(`page${num--}`);
    }
  });

  // On User Input

  inputs.forEach((input) => {
    input.addEventListener("keydown", function (ev) {
      var keyCode = ev.keyCode || ev.which;
      if (keyCode === 13 && input.value > 1) {
        ev.preventDefault();
        fullpage_api.moveTo(`page${num++}`);
      }
    });
  });

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      console.log("Clicked");
      fullpage_api.moveTo(`page${num++}`);
    });
  });
});
*/