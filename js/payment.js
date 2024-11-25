const prevbuttons = document.querySelectorAll(".buttonprev");
const nextbuttons = document.querySelectorAll(".buttonnext");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".formstep");
const progressSteps = document.querySelectorAll(".progressstep");

let formStepsNum = 0;

nextbuttons.forEach((button) => {
   button.addEventListener("click", () => {
    formStepsNum++;
    updateFormSteps();
    updateProgressbar();
  });
});

prevbuttons.forEach((button) => {
   button.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();
    updateProgressbar();
  });
});

function updateFormSteps() {
  formSteps.forEach((formStep) => {
    formStep.classList.contains("formstep1") &&
      formStep.classList.remove("formstep1");
  });

  formSteps[formStepsNum].classList.add("formstep1");
}

function updateProgressbar() {
  progressSteps.forEach((progressStep, idx) => {
    if (idx < formStepsNum + 1) {
      progressStep.classList.add("progressstep1");
    } else {
      progressStep.classList.remove("progressstep1");
    }
  });

  const progressActive = document.querySelectorAll(".progressstep1");

  progress.style.width =
    ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}

window.onload = init;

function init() {
   document.getElementById("Delivery").onclick = turnOnDelivery;
   document.getElementById("Pickup").onclick=turnOnPickup;
   document.getElementById("Cash").onclick = turnOnCash;
   document.getElementById("Debit Card").onclick=turnOnDebitCard;
}

function turnOnDelivery() {
   document.getElementById("address").disabled=false;
   document.getElementById("postcode").disabled=false;
}

function turnOnPickup() {
  document.getElementById("address").disabled=true;
  document.getElementById("postcode").disabled=true;

}

function turnOnCash() {
  document.getElementById("num").disabled=true;
  document.getElementById("exp").disabled=true;
  document.getElementById("cvv").disabled=true;

}

function turnOnDebitCard() {
  document.getElementById("num").disabled=false;
  document.getElementById("exp").disabled=false;
  document.getElementById("cvv").disabled=false;

}

function myFunction() {
  if (confirm("Cancel Your Order?")) {
    window.location="/html/detail_page.html";
  } else {
  }
}

