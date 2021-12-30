// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const gallery = document.querySelector('.gallery');
const imageMarcup = createGalleryMarkup(galleryItems);

gallery.insertAdjacentHTML('beforeend', imageMarcup);

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    }).join('');
    
};
function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    }).join('');
};
let image = '';
let lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay:250,});
lightbox.on('show.simplelightbox', function (e) {
    image = `<div class = "modal"><img src = "${e.target.dataset.source}"</div>`;
});