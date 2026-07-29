// подключить: <script data-wcc type="module" src="wcc-section/WccHero/WccHeroContent/WccHeroContent.js"></script>
const myTemplate = `<style>
  wcc-hero-content {
    display: block;
  }

  .wccHeroContent {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .wccHeroContent__text {
    width: 420px;
  }

  .wccHeroContent_subTitle {
    display: block;
    font-weight: 400;
    font-size: 24px;
    color: #ffbb01;
    margin-bottom: 14px;
  }

  .wccHeroContent__title {
    display: block;
    font-weight: 700;
    font-size: 50px;
    color: #fff;
    margin-bottom: 20px;
  }

  .wccHeroContent__desc {
    display: block;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.75;
    color: #fff;
  }

  .wccHeroContent__button {
    margin-top: 38px;
  }
</style>
<div class="wccHeroContent">
  <div class="wccHeroContent__text">
    <div class="wccHeroContent_subTitle wow animate__animated animate__fadeInRight" data-wow-delay="2.2s">Фрилансер
    </div>

    <h1 class="wccHeroContent__title wow animate__animated animate__fadeInRight" data-wow-delay="2.4s">Свой Фио</h1>

    <p class="wccHeroContent__desc wow animate__animated animate__fadeInRight" data-wow-delay="2.6s">Разрабатываю сайты
      для малого и среднего бизнеса. У меня можно заказать дизайн и
      верстку небольшого сайта или интернет-магазина</p>

    <wcc-button class="wccHeroContent__button wow animate__animated animate__fadeInRight"
      data-wow-delay="2.8s">Бесплатная консультация</wcc-button>
  </div>

  <wcc-avatar></wcc-avatar>
</div>

<body></body>
`; // для прод, вставить сюда содержимое файла WccHeroContent.html
//
export class WccHeroContent extends BaseComponent {

}

BaseComponent.registerWcc(WccHeroContent, import.meta.url, myTemplate);