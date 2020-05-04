class Info {
  constructor() {
    this.infoElement = document.querySelector('.info');
  }
  setInfoText(search) {
    this.infoElement.innerText = `Sorry, no movies for your request "${search}"`;
  }
  
  clearInfoText() {
    !!this.infoElement.innerText ? this.infoElement.innerText = '' : null;
  }
  renderLoader() {
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