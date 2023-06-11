import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryListRef = document.querySelector(".gallery");
const galleryItemsMurkup = makeCardsMurkup(galleryItems);

galleryListRef.insertAdjacentHTML("afterbegin", galleryItemsMurkup);

function makeCardsMurkup(galleryItems) {
  return galleryItems
    .map(
      ({ description, original, preview }) =>
        `<li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              alt="${description}"
            />
          </a>
        </li>`
    )
    .join("");
}

var lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});