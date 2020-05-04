import '../plugins';
import clearInputBtn from '../views/clearInputBtn';
import info from '../views/info';
import formUI from '../views/form';
import movieUI from '../views/moviesView';
import moviesStore from '../store/movieStore';


export default class App {
  constructor() {
    this.slider = null;
    this.forUI = formUI;
    this.movieUI = movieUI;
    this.moviesStore = moviesStore;
  }

  init() {
    this.startUpPageInit();
    this.formSubmitInit();
    this.initEventListeners();
  }

  async startUpPageInit() {
    movieUI.clearSliderContainer();
    info.renderLoader();
    const currentSearchReponse = await moviesStore.searchMovies('day');
    info.deleteLoader();
    this.movieUI.renderSliderMovieItems(currentSearchReponse);
  }

  initEventListeners() {
    document.addEventListener('click', (e) => {
      
      clearInputBtn.clearInputTextHandler(e, this.forUI.input);
    });
  }

  formSubmitInit() {
    const form = this.forUI.form;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.onFormSubmit();
    });
  }

  async onFormSubmit() {
    const userInputValue = formUI.inputValue;
    info.clearInfoText();
    if (this.slider) {
      //this.slider.destroy();
      this.slider = null;
    }
    info.renderLoader();
    this.movieUI.clearSliderContainer();
    
    const currentSearchReponse = await moviesStore.searchMovies(userInputValue);
    console.log('currentSearchReponse = ' + currentSearchReponse);
    info.deleteLoader();

    if (!currentSearchReponse) {
      info.setInfoText(userInputValue);
      return;
    }
    this.movieUI.renderSliderMovieItems(currentSearchReponse);
    //this.slider = new glideSlider();
    console.log(currentSearchReponse);
  }
}