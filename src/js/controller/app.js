import '../plugins';
import clearInputBtn from '../views/clearInputBtn';
import info from '../views/info';
import formUI from '../views/form';
import movieUI from '../views/moviesView';
import moviesStore from '../store/movieStore';
import mySwiper from '../plugins/swiper';


export default class App {
  constructor() {
    this.slider = null;
    this.forUI = formUI;
    this.movieUI = movieUI;
    this.moviesStore = moviesStore;
    this.currentSearch = 'movie';
    this.currentPage = 1;
    this.totalSearchResults = null;
  }

  init() {
    this.startUpPageInit();
    this.formSubmitInit();
    this.initEventListeners();
    
  }

  async startUpPageInit() {
    movieUI.clearSliderContainer();
    info.renderLoader();

    const currentSearchReponse = await moviesStore.searchMovies(this.currentSearch);
    this.totalSearchResults = moviesStore.getTotalResults();
    console.log(this.totalSearchResults);

    info.deleteLoader();
    this.movieUI.renderSliderMovieItems(currentSearchReponse);
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

  swiperReachEndDetectInit() {
    
  }

  formSubmitInit() {
    const form = this.forUI.form;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.onFormSubmit();
    });
  }

  async loadNextTenMovies() {
    if (mySwiper.activeIndex === 1) {
      return;
    }
    if (this.currentPage > Math.floor(this.totalSearchResults / 10)) {
      return;
    }
    if (Math.floor(20/10)) {}
    this.currentPage += 1;
    info.renderLoader();
    const currentSearchReponse = await moviesStore.searchMovies(this.currentSearch, this.currentPage);
 
    this.movieUI.renderSliderMovieItems(currentSearchReponse);
    mySwiper.update();
    info.deleteLoader();
  }

  async onFormSubmit() {
    const userInputValue = formUI.inputValue;
    this.currentPage !== 1 ? this.currentPage = 1 : null;
    userInputValue !== '' ? this.currentSearch = userInputValue : null;
 
    info.renderLoader();
    this.movieUI.clearSliderContainer();
    mySwiper.slideTo(0);
    const currentSearchReponse = await moviesStore.searchMovies(userInputValue);
    this.totalSearchResults = moviesStore.getTotalResults();
    console.log(this.totalSearchResults);

    info.deleteLoader();

    if (!currentSearchReponse) {
      info.setInfoText(userInputValue);
      return;
    }
    this.movieUI.renderSliderMovieItems(currentSearchReponse);
    mySwiper.update();
  }
}