const btns = document.querySelectorAll("[data-target]");
const close_btns = document.querySelectorAll(".modal-btn");


btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(btn.dataset.target).classList.add("active");
 
  });

});

close_btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(btn.dataset.target).classList.remove("active");
   
  });

});