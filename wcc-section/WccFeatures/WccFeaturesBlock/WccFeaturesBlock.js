// подключить: <script data-wcc type="module" src="wcc-section/WccFeatures/WccFeaturesBlock/WccFeaturesBlock.js"></script>
const myTemplate = `<style>
  wcc-features-block {
    display: block;
  }
  .wccFeaturesBlock {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    grid-gap: 60px 30px;
  }
</style>
<div class="wccFeaturesBlock">
  <wcc-features-item image="offer-img.svg" title="По договору" text="Предоставлю все документы для бухгалтерии: договоры, счета и акты. Работаю как ИП без НДС."></wcc-features-item>
  <wcc-features-item image="deadline-img.svg" title="Точно в срок" text="В договоре прописана моя  ответственность за срок проекта. Если просрочу — плачу неустойку." ></wcc-features-item>
  <wcc-features-item image="agreement-img.svg" title="Ценник под вас" text="Если у вас нетиповой проект, сделаю расчет цены за работу и объясню, как складывается цена."></wcc-features-item>
  <wcc-features-item image="steps-img.svg" title="Промежуточные итоги" text="Показываю работу поэтапно, а не в последний момент перед крайним сроком. "></wcc-features-item>
  <wcc-features-item image="storage-img.svg" title="Хостинг и домен" text="Если мы договорились о цене проекта, в неё входит всё: домен и хостинг на год + SSL сертификат."></wcc-features-item>
  <wcc-features-item image="conversation-img.svg" title="Не брошу после сдачи" text="Научу вас или вашего сотрудника пользоваться сайтом, запишу видео-инструкции."></wcc-features-item>
</div>
<body></body>
`; // для прод, вставить сюда содержимое файла WccFeaturesBlock.html
//
export class WccFeaturesBlock extends BaseComponent {
  constructor() {
    super(); this._refs = {};
  }
  connectedCallback() {
    this.loadTemplate(import.meta.url);
  }
  static get properties() {
    return {
      // counterValue: {type: Number, attribute: 'counter-value', default: 0},
    };
  }

  render() {
    super.render();
    // this._initView();       // <--- Раскомментировать для Шага 2
    // this._initListeners();  // <--- Раскомментировать для Шага 3
  }

  // ============================================================
  // Шаг 2: Кэширование и обновление отображения
  // ============================================================

  // _initView() {
  //   this._cacheElements();
  //   this.updateView();
  // }

  // _cacheElements() {
  //   this._refs = {
  //     value: this.querySelector('.counter-value'),
  //     btnInc: this.querySelector('.counter-inc'),
  //   };
  // }

  // propertyChangedCallback(name, oldValue, newValue) {
  //   if (this.html) {
  //     this.updateView();
  //   }
  // }

  // updateView() {
  //   const {value} = this._refs;
  //   if (!value) return;
  //   value.textContent = this.counterValue;
  // }

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

BaseComponent.registerWcc(WccFeaturesBlock, import.meta.url, myTemplate);
