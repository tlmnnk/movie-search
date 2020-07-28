/* eslint-disable no-underscore-dangle */
class FormUI {
  constructor() {
    this._form = document.querySelector('.form');
    this._inputValue = document.querySelector('.form__input');
    this._input = document.querySelector('.form__input');
  }

  get form() {
    return this._form;
  }

  get inputValue() {
    return this._inputValue.value;
  }

  get input() {
    return this._input;
  }
}
const formUI = new FormUI();
export default formUI;
