import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRel = document.querySelector("div.gallery");
// let instance;

const markupElements = galleryItems
  .map(({ original, preview, description }) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
  })
  .join("");
galleryRel.insertAdjacentHTML("afterbegin", markupElements);

galleryRel.addEventListener("click", onepModal);

function onepModal(e) {
  if (e.target.nodeName !== "IMG") {
    return;
  }
  e.preventDefault();

  const newEl = e.target;

  openModal(takeBigUrl(newEl));
}

function takeBigUrl(el) {
  const urlEl = el.dataset.source;
  return urlEl;
}

function openModal(result) {
  const instance = basicLightbox.create(`
    <img src="${result}">
`);
  instance.show();

  window.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      instance.close();
    }
  });
}

// function closeBigImg(evt) {
//   if (!instance.visible) {
//     return;
//   }
//   if (evt.code !== "Escape") {
//     return;
//   }
//   instance.close();
// }

// window.addEventListener("keydown", closeBigImg);
