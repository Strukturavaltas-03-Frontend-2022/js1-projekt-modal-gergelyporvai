"use strict";

const modal = document.getElementById("myModal");
const modalContent = document.getElementById("modal-content");

const btn = document.getElementById("initiate__button");

const span = document.getElementsByClassName("close")[0];

const okButton = document.getElementById("ok__button");
const cancelButton = document.getElementById("cancel__button");

btn.onclick = function () {
  modal.style.display = "block";
  modal.classList.add("visible");
  modalContent.classList.add("visible");
  modal.classList.remove("invisible");
  modalContent.classList.remove("invisible");
  modal.style.zIndex = 99;
};

span.onclick = function () {
  modal.classList.remove("visible");
  modalContent.classList.remove("visible");
  modal.classList.add("invisible");
  modalContent.classList.add("invisible");
  modal.style.zIndex = 0;
};

okButton.onclick = function () {
  modal.classList.add("invisible");
  modalContent.classList.add("invisible");
  modal.style.zIndex = 0;
};

cancelButton.onclick = function () {
  modal.classList.add("invisible");
  modalContent.classList.add("invisible");
  modal.style.zIndex = 0;
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.classList.add("invisible");
    modalContent.classList.add("invisible");
    modal.style.zIndex = 0;
  }
};

modal.classList.remove("visible");
modalContent.classList.remove("visible");
modal.classList.add("invisible");
modalContent.classList.add("invisible");
modal.style.zIndex = 0;
