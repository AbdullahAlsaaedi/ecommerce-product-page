const menuEl = document.querySelector(".menu");
const closeEl = document.querySelector(".close");

const list = document.querySelector(".nav__list");
const listItem = document.querySelector(".nav__item");

menuEl.addEventListener("click", () => {
  list.classList.add("responsive-list");
  //   listItem.style.display = "block";
  console.log(list);

  closeEl.style.display = "block";
  menuEl.style.display = "none ";
});

closeEl.addEventListener("click", () => {
  list.classList.remove("responsive-list");

  closeEl.style.display = "none";
  menuEl.style.display = "block ";
});
