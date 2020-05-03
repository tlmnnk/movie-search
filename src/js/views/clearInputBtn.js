class ClearInputBtn {
  constructor () {
    this.clearBtn = document.querySelector('.from__clear');
  }
  clearInputTextHandler(e, input) {
    if (e.target.classList.contains('form__clear')) {
      console.log('click...');
      console.log(input);
      input.value = '';
    }
  }
}
const clearInputBtn = new ClearInputBtn();

export default clearInputBtn;