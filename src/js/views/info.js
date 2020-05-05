class Info {
  constructor() {
    this.infoElement = document.querySelector('.info');
  }
  setInfoText(text) {
    this.infoElement.innerText = text;
  }
  
  clearInfoText() {
    !!this.infoElement.innerText ? this.infoElement.innerText = '' : null;
  }
  renderLoader() {
    this.clearInfoText();
    this.infoElement.insertAdjacentHTML('afterbegin', '<div class="lds-ring"><div></div><div></div><div></div><div></div></div>');
  }
  deleteLoader() {
    while(this.infoElement.firstChild) {
      this.infoElement.removeChild(this.infoElement.lastChild);
    }
  }
}

const info = new Info();

export default info;