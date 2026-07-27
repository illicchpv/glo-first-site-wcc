// подключить: <script data-wcc type="module" src="wcc/WccInput/WccInput.js"></script>
const myTemplate = ``; // для прод, вставить сюда содержимое файла WccInput.html
//
export class WccInput extends BaseComponent {
  constructor() {
    super(); this._refs = {};
  }
  connectedCallback() {
    this.loadTemplate(import.meta.url);
  }
  static get properties() {
    return {
      // counterValue: {type: Number, attribute: 'counter-value', default: 0},
      placeholder: {type: String},
      icon: {type: String},
    };
  }

  render() {
    super.render();
    this._initView();       // <--- Раскомментировать для Шага 2
    // this._initListeners();  // <--- Раскомментировать для Шага 3
  }

  _initView() {
    this._cacheElements();
    this.updateView();
  }

  _cacheElements() {
    this._refs = {
      inputEl: this.querySelector('.wccInput'),
    };
  }

  propertyChangedCallback(name, oldValue, newValue) {
    if (this.html) {
      this.updateView();
    }
  }

  updateView() {
    const {inputEl} = this._refs;
    if (inputEl) {
      if(this.placeholder) {
        inputEl.placeholder = this.placeholder;
      }
      if(this.icon) {
        inputEl.style.backgroundImage = `url('img/icons/${this.icon}')`;
      }
    }
  }
}

BaseComponent.registerWcc(WccInput, import.meta.url, myTemplate);
