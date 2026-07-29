// подключить: <script data-wcc type="module" src="wcc-section/WccHero/WccHeroHeader/WccHeroHeader.js"></script>
const myTemplate = `<style>
  wcc-hero-header {
    display: block;
  }

  .wccHeroHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0;
  }
</style>
<div class="wccHeroHeader">
  <img class="wccLogo" src="img/logoEx.svg" alt="Glo Academy">
  
  <wcc-social></wcc-social>
</div>

<body></body>
`; // для прод, вставить сюда содержимое файла WccHeroHeader.html
//
export class WccHeroHeader extends BaseComponent {

}

BaseComponent.registerWcc(WccHeroHeader, import.meta.url, myTemplate);
