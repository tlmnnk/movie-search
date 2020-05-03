class Info {
  constructor() {
    this.infoElement = document.querySelector('.info');
  }
  setInfoText(search) {
    this.infoElement.innerText = `Sorry, no movies for your request ${search}`;
  }
  
  clearInfoText() {
    !!this.infoElement.innerText ? this.infoElement.innerText = '' : null;
  }
}

const info = new Info();

export default info;