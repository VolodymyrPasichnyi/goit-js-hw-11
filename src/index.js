import { fetchImages } from './js/fetch';
import { imagesList } from './js/markup';
import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const search = document.querySelector('.search-input')
const searchBtn = document.querySelector('.search-button')
export const gallery = document.querySelector('.gallery')
const loadmoreBtn = document.querySelector('.load-more')
let simpleLightbox = new SimpleLightbox('.gallery a')

loadmoreBtn.style.display = 'none'
let page = 1


searchBtn.addEventListener('click', e => {
  e.preventDefault()
  gallery.innerHTML = ''
  page = 1
  loadmoreBtn.style.display = 'none'
  const value = search.value.trim()
  if (value !== '') {
    fetchImages(value, page)
      .then(data => {
       if (data.hits.length === 0) {
        Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.")
       } else {
        imagesList(data.hits)
        Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`)
        loadmoreBtn.style.display = 'block'
        simpleLightbox.refresh()
       }
      })
  }
})


loadmoreBtn.addEventListener('click', () => {
  page++
  const value = search.value.trim()
  loadmoreBtn.style.display = 'none'
  fetchImages(value, page)
    .then(data => {
     if (data.hits.length === 0) {
      Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.")
     } else {
      imagesList(data.hits)
      Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`)
      loadmoreBtn.style.display = 'block'
      simpleLightbox.refresh()
     }
    })
})


