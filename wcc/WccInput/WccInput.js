// подключить: <script data-wcc type="module" src="wcc/WccInput/WccInput.js"></script>
const myTemplate = `<style>
  wcc-input {
    display: inline-block;
  }

  .wccInput {
    display: inline-block;

    border-radius: 5px;
    width: 309px;
    height: 63px;

    box-shadow: inset 0 3px 10px 0 rgba(199, 199, 199, 0.25);
    background: #f8f8f8;

    font-weight: 400;
    font-size: 14px;
    line-height: 2;
    color: #949494;

    /* background-image: url('img/icons/user-icon.svg'); */
    background-repeat: no-repeat;
    background-position: center left 20px;
    padding: 18px 20px;
    padding-left: 50px;
    border: none;
  }
</style>
<!-- <div class="wccInput">
  WccInput
</div> -->
<input placeholder="WccInput" style="background-image: url('img/icons/user-icon.svg')" class="wccInput" type="text">

<body></body>
`; // для прод, вставить сюда содержимое файла WccInput.html
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
