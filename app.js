const menuEl = document.querySelector(".menu");
const closeEl = document.querySelector(".close");

const list = document.querySelector(".nav__list");
const listItem = document.querySelector(".nav__item");
const productImgs = document.querySelectorAll(".product__img");
const productThumbnails = document.querySelectorAll(".product__thumbnail-img");
const productActive = document.querySelector(".product__active-img");
const overlay = document.querySelector(".overlay");

const modals = document.querySelector(".product__modals");
const btnCloseModal = document.querySelector(".product__modals-close");

const modalActive = document.querySelector(".product__modalimg--active");
const modalThumbnails = document.querySelectorAll(
  ".product__modalimg--thumbnail"
);

const modalRswap = document.querySelector(".product__modals-swiperight");
const modalLswap = document.querySelector(".product__modals-swipeleft");

const productSwipteL = document.querySelector(".product__swipeleft");
const productSwipteR = document.querySelector(".product__swiperight");

let currentModal = 1;

menuEl.addEventListener("click", () => {
  list.classList.add("responsive-list");
  closeEl.classList.remove("hidden");
  menuEl.classList.add("hidden");
});

closeEl.addEventListener("click", () => {
  list.classList.remove("responsive-list");
  closeEl.classList.add("hidden");
  menuEl.classList.remove("hidden");
});

for (let i = 0; i < productThumbnails.length; i++) {
  console.log(productThumbnails[i]);
  productThumbnails[i].addEventListener("click", () => {
    console.log(productThumbnails[i].src);
    productActive.src = productThumbnails[i].src;
    modalActive.src = productThumbnails[i].src;
  });
}

for (let i = 0; i < modalThumbnails.length; i++) {
  console.log(modalThumbnails[i]);
  modalThumbnails[i].addEventListener("click", () => {
    console.log(modalThumbnails[i].src);
    modalActive.src = modalThumbnails[i].src;
    console.log(modalActive.src);
  });
}

productActive.addEventListener("click", () => {
  modals.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

btnCloseModal.addEventListener("click", (e) => {
  e.preventDefault();
  modals.classList.add("hidden");
  overlay.classList.add("hidden");
});

overlay.addEventListener("click", () => {
  modals.classList.add("hidden");
  overlay.classList.add("hidden");
});

modalRswap.addEventListener("click", () => {
  currentModal = currentModal === 4 ? 1 : ++currentModal;
  console.log(currentModal);
  modalActive.src = `images/image-product-${currentModal}.jpg`;
});

modalLswap.addEventListener("click", () => {
  currentModal = currentModal === 1 ? 4 : --currentModal;
  console.log(currentModal);
  modalActive.src = `images/image-product-${currentModal}.jpg`;
});

let transform = 0;

productSwipteR.addEventListener("click", () => {
  transform = transform === -300 ? 0 : transform - 100;
  console.log(transform);

  for (let i = 0; i < productImgs.length; i++) {
    productImgs[i].style.transform = `translateX(${transform}%)`;
  }
});

productSwipteL.addEventListener("click", () => {
  transform = transform === 0 ? -300 : transform + 100;
  console.log(transform);

  for (let i = 0; i < productImgs.length; i++) {
    productImgs[i].style.transform = `translateX(${transform}%)`;
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 448) {
    for (let i = 0; i < productImgs.length; i++) {
      productImgs[i].style.transform = `translateX(0)`;
    }

    // productActive.classList.add("hidden");
  }

  if (window.innerWidth > 640) {
    list.classList.remove("responsive-list");
    closeEl.classList.add("hidden");
    menuEl.classList.remove("hidden");
  }
});
