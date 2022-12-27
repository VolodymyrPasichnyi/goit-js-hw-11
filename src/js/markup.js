import { gallery } from "..";

export function imagesList(images) {
    const markup = images
      .map(i => {
        return `
        <div class="photo-card">
         <a href="${i.largeImageURL}">
         <img class="photo" src="${i.webformatURL}" alt="${i.tags}" title="${i.tags}" loading="lazy"/>
         </a>
          <div class="info">
            <p class="info-item">
              <b>Likes</b> 
                <span> ${i.likes} </span>
            </p>
            <p class="info-item">
              <b>Views</b> 
                <span>${i.views}</span>  
              </p>
            <p class="info-item">
              <b>Comments</b> 
                <span>${i.comments}</span>  
            </p>
            <p class="info-item">
              <b>Downloads</b> 
                <span>${i.downloads}</span> 
            </p>
          </div>
        </div>
        `
      })
      .join('')
      gallery.innerHTML += markup
  }


