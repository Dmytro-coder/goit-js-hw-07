import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainerItem = document.querySelector(".gallery");
const itemsMarkup = createItemsMarkup(galleryItems);
galleryContainerItem.insertAdjacentHTML("beforeend",  itemsMarkup);

// Rendered items
function createItemsMarkup(item) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `<ul class="gallery">
                <li>
                    <a class="gallery__item" href="${original}">
                        <img
                            class="gallery__image"
                            src="${preview}"          
                            alt="${description}"
                        />
                    </a>
                </li>
            </ul>`;
        })
        .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionType: "alt",
    fadeSpeed: 300,
    captionPosition: 'bottom',
    captionDelay: 250,
    showCounter: false,
    loop: false,
});