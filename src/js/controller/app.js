import '../plugins';
import clearInputBtn from '../views/clearInputBtn';
import info from '../views/info';
import formUI from '../views/form';
import movieUI from '../views/moviesView';
import moviesStore from '../store/movieStore';
import glideSlider from '../plugins/glideSlider';


export default class App {
  constructor() {
    this.slider = null;
    this.forUI = formUI;
    this.movieUI = movieUI;
    this.moviesStore = moviesStore;
  }

  init() {
    this.slider = new glideSlider();
    this.formSubmitInit();
    this.initEventListeners();
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
      this.slider.destroy();
      this.slider = null;
    }
    this.movieUI.clearSliderContainer();

    this.movieUI.renderLoader();
    const currentSearchReponse = await moviesStore.searchMovies(userInputValue);
    console.log('currentSearchReponse = ' + currentSearchReponse);
    this.movieUI.clearSliderContainer();

    if (!currentSearchReponse) {
      info.setInfoText(userInputValue);
      return;
    }

    this.movieUI.renderSliderMovieItems(currentSearchReponse);
    this.slider = new glideSlider();
    console.log(currentSearchReponse);
  }
}