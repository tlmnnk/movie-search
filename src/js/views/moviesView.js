class MoviesUI {
  constructor() {
    this.moviesContainer = document.querySelector('.glide__slides');
  }

  renderSliderMovieItems(slides) {
    let fragment = '';
    slides.forEach(slide => {
      fragment += this.renderSlide(slide);
    });
    this.moviesContainer.insertAdjacentHTML('afterbegin', fragment);
  }

  renderSlide(slide) {
    return `<li class="glide__slide">
    <div class="slide__container">
      <p class="slide__title">${slide.title}</p>
      <img class="slide__poster" src="${slide.poster}" alt="">
      <p class="slide__year">${slide.year}</p>
      <div class="slide__rate">${slide.rating}</div>
    </div>
  </li>`;
  }

  clearSliderContainer() {
    if (this.moviesContainer.children.length) {
      while(this.moviesContainer.firstChild) {
        this.moviesContainer.removeChild(this.moviesContainer.lastChild);
      }
    }
  }
  
  renderLoader() {
    this.moviesContainer.insertAdjacentHTML('afterbegin', '<div class="lds-ring"><div></div><div></div><div></div><div></div></div>');
  }
}

const moviesUI = new MoviesUI();

export default moviesUI;