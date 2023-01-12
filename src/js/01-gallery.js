import { galleryItems } from "./gallery-items.js";
// Change code below this line

const qwe = galleryItems;
console.log(qwe);

const galleryItem = document.querySelector(".gallery");
galleryItem.classList = "gallery__item";

console.log(galleryItem);

for (const item of qwe) {
  const galleryLink = document.createElement("a");
  galleryLink.classList = "gallery__link";

  const galleryImage = document.createElement("img");
  galleryImage.classList = "gallery__image";

  galleryImage.src = item.original;
  galleryImage.alt = item.description;

  galleryItem.append(galleryLink);
  galleryLink.append(galleryImage);
}
