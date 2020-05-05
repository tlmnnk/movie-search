class MoviesUI {
  constructor() {
    this.moviesContainer = document.querySelector('.swiper-wrapper');
  }

  renderSliderMovieItems(slides) {
    let fragment = '';
    slides.forEach(slide => {
      fragment += this.renderSlide(slide);
    });
    this.moviesContainer.insertAdjacentHTML('beforeend', fragment);
  }

  renderSlide(slide) {
    return `<div class="swiper-slide">
    <div class="slide__container">
      <a href="${slide.titleLink}" class="slide__title" target="_blank">${slide.title}</a>
      <img class="slide__poster swiper-lazy" src="${slide.poster}" alt="">
      <p class="slide__year">${slide.year}</p>
      <div class="slide__rate">${slide.rating}</div>
    </div>
  </div>`;
  }

  clearSliderContainer() {
    if (this.moviesContainer.children.length) {
      while(this.moviesContainer.firstChild) {
        this.moviesContainer.removeChild(this.moviesContainer.lastChild);
      }
    }
  }
}

const moviesUI = new MoviesUI();

export default moviesUI;