// подключить: <script data-wcc type="module" src="wcc/WccSlide/WccSlide.js"></script>
const myTemplate = `<style>
  wcc-slide {
    display: block;
  }

  .wccSlide {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .wccSlide__text {
    flex-basis: 60%;
    display: flex;
    flex-wrap: wrap;
    row-gap: 40px;
  }

  .wccSlide__title {
    flex-basis: 100%;
    font-weight: 700;
    font-size: 24px;
    color: #fff;
  }

  .wccSlide__textItem {
    display: flex;
    align-items: flex-start;
    column-gap: 16px;
  }

  .wccSlide__time,
  .wccSlide__cost {
    flex-basis: 50%;
  }

  .wccSlide__cost {}

  .wccSlide__feedback {}

  .wccSlide__subTitle {
    font-weight: 700;
    font-size: 18px;
    color: #fff;
    margin-bottom: 7px;
  }

  .wccSlide__subText {
    display: block;
    font-weight: 400;
    font-size: 16px;
    color: #fff;
  }

  .wccSlide__img {
    flex-basis: 30%;
  }
</style>
<div class="wccSlide">
  <img class="wccSlide__img" src="img/projects/project-img.jpg" alt="Сайт строительной фирмы “Велстрой”">

  <div class="wccSlide__text">
    <h3 class="wccSlide__title">Сайт строительной фирмы “Велстрой”</h3>

    <div class="wccSlide__textItem wccSlide__time">
      <img src="img/icons/time-icon.svg" alt="Время ">
      <div class="wccSlide__description">
        <h4 class="wccSlide__subTitle">Сроки</h4>
        <p class="wccSlide__subText">4 рабочих дня</p>
      </div>
    </div>

    <div class="wccSlide__textItem wccSlide__cost">
      <img src="img/icons/cost-icon.svg" alt="Цена ">
      <div class="wccSlide__description">
        <h4 class="wccSlide__subTitle">Стоимость</h4>
        <p class="wccSlide__subText">140 000 рублей </p>
      </div>
    </div>

    <div class="wccSlide__textItem wccSlide__feedback">
      <img src="img/icons/feedback-icon.svg" alt="Отзыв ">
      <div class="wccSlide__description">
        <h4 class="wccSlide__subTitle">Отзыв клиента</h4>
        <p class="wccSlide__subText">
          <slot>
          </slot>
        </p>
      </div>
    </div>
  </div>
</div>

<body></body>
`; // для прод, вставить сюда содержимое файла WccSlide.html
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
