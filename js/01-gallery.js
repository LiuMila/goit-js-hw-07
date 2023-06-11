import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryListRef = document.querySelector(".gallery");
const galleryItemsMurkup = makeCardsMurkup(galleryItems);
let modalLightbox;

galleryListRef.insertAdjacentHTML("afterbegin", galleryItemsMurkup);

galleryListRef.addEventListener("click", onImageClick);

function makeCardsMurkup(galleryItems) {
  return galleryItems
    .map(
      ({ description, original, preview }) =>
        `<li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </li>`
    )
    .join("");
}

function onImageClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const originAtr = {};
  originAtr.src = evt.target.dataset.source;
  originAtr.alt = evt.target.alt;

  openModal(originAtr);
}

function openModal({ src, alt }) {
  modalLightbox = basicLightbox.create(
    `<img width="1400" height="900" src="${src}" alt="${alt}"/>`,
    {
      onShow: () => {
        window.addEventListener("keydown", onEscPressed);
      },
      onClose: () => {
        window.removeEventListener("keydown", onEscPressed);
      },
    }
  );

  return modalLightbox.show();
}

function onEscPressed(evt) {
  if (evt.code === "Escape") {
    modalLightbox.close();
  }
}