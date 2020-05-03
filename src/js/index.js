//import './plugins';
import App from './controller/app';


document.addEventListener('DOMContentLoaded', () => {
  // const valueInput = document.querySelector('.form__input').value
  // form.addEventListener('submit', () => {
  //  moviesStore.searchMovies(valueInput);
  // });
  //moviesStore.searchMovies();

  new App().init();

});