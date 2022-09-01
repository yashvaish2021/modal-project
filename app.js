const openModelBtn = window.document.querySelector(".modal-btn");

const closeBtn = window.document.querySelector(".close-btn");

const modelOverLay = window.document.querySelector(".modal-overlay");

openModelBtn.addEventListener("click", function () {
  modelOverLay.classList.add("open-modal");
});

closeBtn.addEventListener("click", function () {
  modelOverLay.classList.remove("open-modal");
});
