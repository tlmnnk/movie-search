class FormUI {
  constructor() {
    this._form = document.querySelector('.form');
    this._inputValue = document.querySelector('.form__input');
  }
  get form() {
    return this._form;
  }
  get inputValue() {
    return this._inputValue.value;
  }
}
const formUI = new FormUI();
export default formUI;