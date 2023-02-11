import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const itemsMarkup = createGalleryItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', itemsMarkup);

// Rendered items
function createGalleryItemsMarkup(items) {
  return items.map(({ preview, original, description }) => {
    return `<li>
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`
  }).join('');
}

// Create modal
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
  captionType: "alt",
  fadeSpeed: 250,
  loop: false,
//   showCounter: false
});