// подключить: <script data-wcc type="module" src="wcc-section/WccFeatures/WccFeaturesItem/WccFeaturesItem.js"></script>
const myTemplate = `<style>
  wcc-features-item {
    display: block;
  }

  .wccFeaturesItem {
    display: block;
    width: 288px;
  }

  .wccFeaturesItem__title {
    font-weight: 700;
    font-size: 24px;
    line-height: 1.16667;
    color: #fff;
    margin-top: 22px;
    margin-bottom: 16px;
  }

  .wccFeaturesItem__text {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.75;
    color: #fff;
  }
</style>
<div class="wccFeaturesItem">
  <img class="wccFeaturesItem__img" src="" alt="wccFeaturesItem__title">
  <h3 class="wccFeaturesItem__title">wccFeaturesItem__title</h3>
  <p class="wccFeaturesItem__text">Предоставлю все документы для бухгалтерии: договоры, счета и акты. Работаю как ИП без
    НДС.</p>
</div>

<body></body>
`; // для прод, вставить сюда содержимое файла WccFeaturesItem.html
//
export class WccFeaturesItem extends BaseComponent {
  constructor() {
    super(); this._refs = {};
  }
  connectedCallback() {
    this.loadTemplate(import.meta.url);
  }
  static get properties() {
    return {
      image: {type: String, attribute: 'image', default: ''},
      title: {type: String, attribute: 'title', default: ''},
      text: {type: String, attribute: 'text', default: ''},
    };
  }

  render() {
    super.render();
    this._initView();       // <--- Раскомментировать для Шага 2
    // this._initListeners();  // <--- Раскомментировать для Шага 3
  }

  // ============================================================
  // Шаг 2: Кэширование и обновление отображения
  // ============================================================

  _initView() {
    this._cacheElements();
    this.updateView();
  }

  _cacheElements() {
    this._refs = {
      imageEl: this.querySelector('.wccFeaturesItem__img'),
      titleEl: this.querySelector('.wccFeaturesItem__title'),
      textEl: this.querySelector('.wccFeaturesItem__text'),
    };
  }

  propertyChangedCallback(name, oldValue, newValue) {
    if (this.html) {
      this.updateView();
    }
  }

  updateView() {
    const {imageEl, titleEl, textEl} = this._refs;
    if (imageEl) {
      imageEl.src = 'img/blocks/' + this.image;
      if(this.title) imageEl.setAttribute('alt',this.title);
    }
    if(titleEl) titleEl.textContent = this.title;
    if(this.text) if(textEl) textEl.textContent = this.text;
  }

  // ============================================================
  // Шаг 3: Обработчики событий
  // ============================================================

  // _initListeners() {
  //   const {btnInc} = this._refs;
  //   this.onRef(btnInc, 'click', (e) => { // можно так: this.onRef('btnInc', 'click',...
  //     this.counterValue++;
  //     this.emit('event-name', {...this.values, component: this, event: e, });
  //   });
  // }
}

BaseComponent.registerWcc(WccFeaturesItem, import.meta.url, myTemplate);
