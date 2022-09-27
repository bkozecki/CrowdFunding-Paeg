const element = document.querySelectorAll(".selection_modal_element");
const backedNumber = document.getElementById("backed");
const total = document.getElementById("total");
const successModal = document.querySelector(".success_modal");
const btnSuccess = document.querySelector(".btn_success");
const selectionModal = document.querySelector(".selection_modal");
const btnContinue = document.querySelectorAll(".continue");
const backdrop = document.querySelector(".backdrop");
const rewardBtn = document.querySelectorAll(".reward_btn");
const selectAction = document.querySelectorAll(".selection_actions");
const numbers = document.querySelectorAll(".number").value;
const btnBack = document.querySelector(".btn_back");
const bookmarkDiv = document.querySelector(".bookmark");
const bookmarkImg = document.querySelector(".icon_bookmark");
const range = document.querySelector(".range");
const inputSelection = document.querySelectorAll(".input_selection");
let totalNum = document.getElementById("total");
let mainValue = document.querySelector(".value");
let value = document.querySelector(".value").innerHTML;

/// FUNCTIONALITY -------

const showVal = function (val) {
  let x = (Number(val) / 1000).toFixed();
  range.style.background = `linear-gradient( 90deg, hsl(176, 50%, 47%) ${x}%, #ededed ${x}%)`;
};

let displayVal = (range.value = value);

showVal(displayVal);

btnBack.addEventListener("click", () => {
  document
    .querySelector(".main_content")
    .scrollIntoView({ behavior: "smooth" });
});

const showModal = function () {
  backdrop.style.display = "block";
  selectionModal.style.display = "flex";
};

backdrop.addEventListener("click", () => {
  backdrop.style.display = "none";
  selectionModal.style.display = "none";
  successModal.style.display = "none";
});

rewardBtn.forEach((btn) => btn.addEventListener("click", showModal));

selectionModal.addEventListener("click", (e) => {
  const click = e.target.closest(".selection_modal_element");
  const inputSection = e.target.closest(".reward_label").lastElementChild;

  if (!inputSection) return;

  element.forEach((el) => el.classList.remove("active"));

  click.classList.add("active");
  selectionModal.classList.add(".selection_modal-active");
  inputSection.classList.add("section-active");
});

bookmarkDiv.addEventListener("click", () => {
  bookmarkDiv.classList.toggle("colorChange");
  bookmarkImg.classList.toggle("colorChangeImg");
});

const clearChoice = function () {
  selectionModal.classList.remove(".selection_modal-active");
  element.forEach((el) => el.classList.remove("active"));
  inputSelection.forEach((el) => (el.value = ""));
  selectAction.forEach((el) => el.classList.remove("section-active"));
  document.querySelectorAll(".reward").forEach((el) => (el.checked = false));
};

btnContinue.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const clicked = e.target;
    const input = btn.previousElementSibling;
    const inputValue = input.lastElementChild.value;
    const addingToSum = () => {
      totalNumNew++;
      totalNum.innerHTML = totalNumNew;
      showVal(newVal);
      selectionModal.style.display = "none";
      successModal.style.display = "flex";
    };
    let totalNumNew = Number(totalNum.innerHTML);

    if (inputValue < input.lastElementChild.min) {
      alert(`Please put in valid amount (${input.lastElementChild.min}$)`);
      return;
      ///temporary solution
    }
    let newVal = Number(mainValue.innerHTML) + Number(inputValue);
    let displayNum = document.getElementById(`num-${clicked.dataset.set - 1}`);

    mainValue.innerHTML = newVal;

    let selectNum = document.querySelector(
      `.number-set-${clicked.dataset.set}`
    );

    if (!selectNum) {
      addingToSum();
    } else {
      displayNum.innerHTML = document.querySelector(
        `.number-set-${clicked.dataset.set}`
      ).innerHTML = Number(selectNum.innerHTML) - 1;
    }
    addingToSum();
  })
);
btnSuccess.addEventListener("click", () => {
  backdrop.style.display = "none";
  successModal.style.display = "none";
  document.querySelector("main").scrollIntoView({ behavior: "smooth" });
  clearChoice();
});
