import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
galleryEl.style.listStyle = 'none';

const addImages = galleryItems.map(image => {
  const createEl = document.createElement('li');
  const createLink = document.createElement('a');
  const createImg = document.createElement('img');

  createEl.classList.add('gallery__item');
  createEl.append(createLink);

  createLink.classList.add('gallery__link');
  createLink.setAttribute('href', image.original);
  createLink.append(createImg);

  createLink.addEventListener('click', event => event.preventDefault());

  createImg.classList.add('gallery__image');
  createImg.setAttribute('src', image.preview);
  createImg.setAttribute('alt', image.description);

  galleryEl.append(createEl);
});

let lightbox = new SimpleLightbox('.gallery a', {
  captionSelector: e => e.firstChild,
  captionPosition: 'outside',
  captionsData: 'alt',
  captionDelay: 250,
  heightRatio: 0.85,
});
