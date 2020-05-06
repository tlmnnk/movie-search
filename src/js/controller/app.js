import '../plugins';
import clearInputBtn from '../views/clearInputBtn';
import info from '../views/info';
import formUI from '../views/form';
import movieUI from '../views/moviesView';
import moviesStore from '../store/movieStore';
import translate from '../store/translate';
import mySwiper from '../plugins/swiper';


export default class App {
  constructor() {
    this.forUI = formUI;
    this.movieUI = movieUI;
    this.moviesStore = moviesStore;
    this.currentSearch = 'kill bill';
    this.currentPage = 1;
    this.totalSearchResults = null;
  }

  init() {
    this.startUpPageInit();
    this.formSubmitInit();
    this.initEventListeners();
    
  }

  async startUpPageInit() {
    this.preRenderSliderHandler();
    const currentSearchReponse = await moviesStore.searchMovies(this.currentSearch);

    
    if (!currentSearchReponse) {
      info.setInfoText('Something went wrong...');
      return;
    }
    if (currentSearchReponse.Response && !JSON.parse(currentSearchReponse.Response.toLowerCase())) {
      info.setInfoText(currentSearchReponse.Error);
      return;
    }
    this.totalSearchResults = moviesStore.getTotalResults();
    info.deleteLoader();
    this.movieUI.renderSliderMovieItems(currentSearchReponse);
    this.imgSmoothLoadHandler();
    mySwiper.update();
  }

  initEventListeners() {
    document.addEventListener('click', (e) => {
      clearInputBtn.clearInputTextHandler(e, this.forUI.input);
    });

    mySwiper.on('reachEnd', () => {
      this.loadNextTenMovies();
    });
  }

  formSubmitInit() {
    const form = this.forUI.form;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.onFormSubmit();
    });
  }

  imgSmoothLoadHandler() {
    document.querySelectorAll('img:not(.load)').forEach((item) => {
      ['load', 'error'].forEach((event) => {
        item.addEventListener(event, (e) => {
          if (!e.target.classList.contains('load')) {
            e.target.parentNode.classList.add('visible');
            e.target.classList.add('load');
          }
        });
      });
    });
  }

  preRenderSliderHandler() {
    this.currentPage !== 1 ? this.currentPage = 1 : null;
    info.renderLoader();
    this.movieUI.clearSliderContainer();
    mySwiper.slideTo(0);
    mySwiper.update();
  }

  async loadNextTenMovies() {
    console.log('swiper active index');
    console.log(mySwiper.activeIndex);
    if ([0, 1].includes(mySwiper.activeIndex)) {
      return;
    }
    if (this.currentPage > Math.floor(this.totalSearchResults / 10)) {
      info.setInfoText(`No more results for "${this.currentSearch}"`);
      return;
    }
    
    this.currentPage += 1;
    info.renderLoader();
    const currentSearchReponse = await moviesStore.searchMovies(this.currentSearch, this.currentPage);
 
    this.movieUI.renderSliderMovieItems(currentSearchReponse);
    this.imgSmoothLoadHandler();
    mySwiper.update();
    info.deleteLoader();
    if (/[а-яА-Я]/g.test(formUI.inputValue)) info.setInfoText(`Showing result for "${formUI.inputValue}"`);
  }

  async isRusInput(input) {
    if (/[а-яА-Я]/g.test(input)) {
      return translate.translateWord(input);
    }
  }

  async onFormSubmit() {
    let userInputValue = formUI.inputValue;
    const translated = await this.isRusInput(userInputValue);

    translated ? userInputValue = translated : null;
    
    userInputValue !== '' ? this.currentSearch = userInputValue : null;
    this.preRenderSliderHandler();
    
    const currentSearchReponse = await moviesStore.searchMovies(userInputValue);
    this.totalSearchResults = moviesStore.getTotalResults();
    console.log(currentSearchReponse);

    info.deleteLoader();
    translated ? info.setInfoText(`Showing result for "${formUI.inputValue}"`) : null;

    if (!currentSearchReponse) {
      info.setInfoText(`Sorry, no results for "${this.currentSearch}"`);
      mySwiper.removeAllSlides();
      return;
    }
    if (currentSearchReponse.Response && !JSON.parse(currentSearchReponse.Response.toLowerCase())) {
        info.setInfoText(currentSearchReponse.Error);
      return;
    }
    

    this.movieUI.renderSliderMovieItems(currentSearchReponse);
    this.imgSmoothLoadHandler();
    mySwiper.update();
  }
}