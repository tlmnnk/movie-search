/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
class ClearInputBtn {
  constructor() {
    this.clearBtn = document.querySelector('.from__clear');
  }

  clearInputTextHandler(e, input) {
    if (e.target.classList.contains('form__clear')) {
      input.value = '';
      input.focus();
    }
  }
}
const clearInputBtn = new ClearInputBtn();

export default clearInputBtn;
