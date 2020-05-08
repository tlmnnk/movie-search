class Keyboard {
  constructor() {
      this.area = null;
      this.lang = 'eng';
      this.capslock = false;
      this.area = document.querySelector('.form__input');
      this.keyboard = document.querySelector('.keyboard');
      this.keyCodes = [["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace"], ["Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "IntlBackslash", "Delete"], ["CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter"], ["ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ArrowUp", "ShiftRight"], ["ControlLeft", "MetaLeft", "AltLeft", "Space", "AltRight", "ControlRight", "ArrowLeft", "ArrowDown", "ArrowRight"]];

      this.engKeys = [['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'], ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\','Del'], ['Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'], ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'Shift'], ['Ctrl', 'Lang', 'Alt', ' ', 'Alt', 'Ctrl', '←', '↓', '→']];

      this.rusKeys = [['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'], ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del'], ['Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'], ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '↑', 'Shift'], ['Ctrl', 'Lang', 'Alt', ' ', 'Alt', 'Ctrl', '←', '↓', '→']];

      this.engKeysUp = [['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'], ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del'], ['Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'], ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '↑', 'Shift'], ['Ctrl', 'Lang', 'Alt', ' ', 'Alt', 'Ctrl', '←', '↓', '→']];

      this.rusKeysUp = [['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'], ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del'], ['Caps Lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'], ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '↑', 'Shift'], ['Ctrl', 'Lang', 'Alt', ' ', 'Alt', 'Ctrl', '←', '↓', '→']];

      this.specKey = ['Tab', 'Backspace', 'Capslock', 'Shift', 'Enter', 'Control', 'Alt', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Delete'];


  }
  init() {
      this.initEventListeners();
  }
  initEventListeners() {
      document.querySelector('.keyboard').addEventListener('mousedown', (e) => {
          
          if (e.target.classList.contains('key') ) {
              if (!e.target.classList.contains('key--special')) {
                  this.area.setRangeText(e.target.innerHTML, this.area.selectionStart, this.area.selectionEnd, 'end');
              }
              this.capslockHandler(e);
              this.backspaceClickHandler(e);
              this.deleteClickHandler(e);
              this.enterClickHandler(e);
              this.tabClickHandler(e);
              this.arrowClickHandler(e);
              this.languageSwitch(e);
              e.target.classList.add('key--press');                   
          }
      });
      document.querySelector('.keyboard').addEventListener('mouseup', () => {
          
          document.querySelectorAll('.key').forEach(key => 
              key.classList.contains('key--press') ? key.classList.remove('key--press') : null);
              this.area.focus();
      });
  }
  capslockHandler(e) {
      if (e.target.getAttribute('data') === 'CapsLock') {
        console.log('capslock!/....');
          this.capslock ? this.capslock = false : this.capslock = true;
          if(this.lang === 'rus' && this.capslock) {
                  this.changeKeyboardLang(this.rusKeysUp);
                  this.lang = 'rus';
          }
          if (this.lang === 'rus' && !this.capslock) {
                  this.changeKeyboardLang(this.rusKeys);
                  this.lang = 'rus';
              }
          if (this.lang === 'eng' && this.capslock) {
              this.changeKeyboardLang(this.engKeysUp);
                  this.lang = 'eng';
          }
          if (this.lang === 'eng' && !this.capslock) {
                  this.changeKeyboardLang(this.engKeys);
                  this.lang = 'eng';
              }
          }
  }
  

  languageSwitch(e) {
      if (e.target.getAttribute('data') === 'MetaLeft') {
          console.log('meta .... . .. . ');
        if (this.lang === 'rus') {
            if (this.capslock) {
                this.changeKeyboardLang(this.engKeysUp);
                this.lang = 'eng';
            } else {
                this.changeKeyboardLang(this.engKeys);
                this.lang = 'eng';
            }
        } else {
            if (this.capslock) {
                this.changeKeyboardLang(this.rusKeysUp);
                this.lang = 'rus';
            } else {
                this.changeKeyboardLang(this.rusKeys);
                this.lang = 'rus';
                }
            }
      }
  }

  tabClickHandler(e) {
      if (e.target.getAttribute('data') === 'Tab') {
          this.area.setRangeText(' ', this.area.selectionStart, this.area.selectionEnd, 'end');
      }
  }

  backspaceClickHandler(e) {
      if (e.target.getAttribute('data') === 'Backspace') {
          if (this.area.value.length === 0) {
              return;
            }
            this.area.setRangeText('', this.area.selectionStart, this.area.selectionEnd, 'end');
            if (this.area.selectionStart === this.area.selectionEnd) {
              this.area.setRangeText('', this.area.selectionStart - 1, this.area.selectionEnd, 'end');
            }
      }
  }

  deleteClickHandler(e) {
      if (e.target.getAttribute('data') === 'Delete') {
          if (this.area.selectionStart === this.area.selectionEnd) {
              this.area.setRangeText('', this.area.selectionStart, this.area.selectionEnd + 1, 'end');
          } else if (this.area.selectionStart !== this.area.selectionEnd) {
              this.area.setRangeText('', this.area.selectionStart, this.area.selectionEnd, 'end');
          }
      }
  }

  enterClickHandler(e) {
    if (e.target.getAttribute('data') === 'Enter')
      document.querySelector('.form').dispatchEvent(new Event('submit'));
  }

  arrowClickHandler(e) {
      const keyData = e.target.getAttribute('data');
      this.cursorPosition = this.area.selectionStart;
      let selectionInRow = this.area.selectionStart;
      const rowsArea = this.area.value.split('\n');
      let positionInRow = this.area.selectionStart;
      const rows = this.area.value.split('\n');
      let i = 0;
      if (keyData.includes('Arrow')) {
      switch (keyData) {
          case 'ArrowLeft':
              this.area.selectionStart = this.cursorPosition - 1;
              this.area.selectionEnd = this.area.selectionStart;
              break;
          case 'ArrowRight':
              this.area.selectionStart = this.cursorPosition + 1;
              this.area.selectionEnd = this.area.selectionStart;
              break;
          case 'ArrowUp':
              
              if (this.area.selectionStart > rowsArea[0].length) {
                let i = 0;
                while (selectionInRow > rowsArea[i].length) {
                  selectionInRow -= (rowsArea[i].length + 1);
                  i += 1;
                }
                let newPosition = 0;
                let j = 0;
                while (j < i - 1) {
                  newPosition += rowsArea[j].length + 1;
                  j += 1;
                }
                const rowLength = (rowsArea[j].length > selectionInRow) ? selectionInRow : rowsArea[j].length;
                newPosition += rowLength;
                this.area.selectionStart = newPosition;
                this.area.selectionEnd = this.area.selectionStart;
              }
              break;
          case 'ArrowDown':  
              while (positionInRow > rows[i].length) {
                positionInRow -= (rows[i].length + 1);
                i += 1;
              }
              if (i < rows.length - 1) {
                let newPosition = 0;
                let j = 0;
                while (j < i + 1) {
                  newPosition += rows[j].length + 1;
                  j += 1;
                }
                const rowLength = (rows[j].length > positionInRow) ? positionInRow : rows[j].length;
                newPosition += rowLength;
                this.area.selectionStart = newPosition;
                this.area.selectionEnd = this.area.selectionStart;
              }
              break;
          default:
              break;
          }
      }  
  }

  addButtonHighlight(e) {
      document.querySelectorAll('.key').forEach(key => {
          if (key.getAttribute('data') === e.code) {
              key.classList.add('key--press');
          }
      });
  }

  removeButtonHighlight(e) {
      document.querySelectorAll('.key').forEach(key => {
          if (key.getAttribute('data') === e.code) {
              key.classList.remove('key--press');
          }
      });
  }

  changeKeyboardLang(layoutArray) {
      const keyElementsArray = this.getKeyElementsArray();
      layoutArray.forEach((row, i) => {
          row.forEach((key, j) => {
             keyElementsArray[i][j].innerText = key;
          });
      });
      this.capslock ? document.querySelector('span[data="CapsLock"]').classList.add('key--caps') : document.querySelector('span[data="CapsLock"]').classList.remove('key--caps');
  }

  addExtraKeyClasses() {
      document.querySelectorAll('.key').forEach((key,i,arr) => {
          if (key.innerText === 'Backspace' || key.innerText === 'Enter' || key.innerText === '') key.classList.add('key--wide');
          if((key.innerText === 'Shift' && arr[i - 1].innerText === 'Enter') || key.innerText === 'Enter') key.classList.add('key--shift');
          if (key.innerText === 'Backspace' || key.innerText === 'Tab' || key.innerText === 'Del' || key.innerText === 'Enter' || key.innerText === 'Shift' || key.innerText === 'Ctrl' || key.innerText === 'Win' || key.innerText === 'Alt' || key.innerText === 'Caps Lock' || key.getAttribute('data').includes('Arrow')) {
              key.classList.add('key--special');
          }
      });
  }
  
  getKeyElementsArray() {
      let arrayKeyElements = [];
      document.querySelectorAll('.row').forEach(row => {
          let rowArray = [];
          [...row.children].forEach(key => {
              rowArray.push(key);
          });
          arrayKeyElements.push(rowArray);
      });
      return arrayKeyElements;
  }

  toggleKeyboard() {
      this.keyboard.classList.toggle('keyboard--visible');
  }
}

const keyboard = new Keyboard();

export default keyboard;