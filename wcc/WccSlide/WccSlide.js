// подключить: <script data-wcc type="module" src="wcc/WccSlide/WccSlide.js"></script>
const myTemplate = ``; // для прод, вставить сюда содержимое файла WccSlide.html
//
export class WccSlide extends BaseComponent {
  constructor() {
    super(); this._refs = {};
  }
  connectedCallback() {
    this.loadTemplate(import.meta.url);
  }
  static get properties() {
    return {
      img: {type: String},
      title: {type: String},
      time: {type: String},
      cost: {type: String},
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
      imgEl: this.querySelector('.wccSlide__img'),
      titleEl: this.querySelector('.wccSlide__title'),
      timeEl: this.querySelector('.wccSlide__time .wccSlide__subText'),
      costEl: this.querySelector('.wccSlide__cost .wccSlide__subText'),
    };
  }

  propertyChangedCallback(name, oldValue, newValue) {
    if (this.html) {
      this.updateView();
    }
  }

  updateView() {
    const {imgEl, titleEl, timeEl, costEl} = this._refs;
    if (imgEl && this.img) imgEl.src = 'img/projects/' + this.img;
    if (titleEl && this.title) titleEl.textContent = this.title;
    if (timeEl && this.time) timeEl.textContent = this.time;
    if (costEl && this.cost) costEl.textContent = this.cost;
  }
}

BaseComponent.registerWcc(WccSlide, import.meta.url, myTemplate);
