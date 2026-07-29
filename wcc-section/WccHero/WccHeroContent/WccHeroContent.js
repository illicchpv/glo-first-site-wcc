// подключить: <script data-wcc type="module" src="wcc-section/WccHero/WccHeroContent/WccHeroContent.js"></script>
const myTemplate = ``; // для прод, вставить сюда содержимое файла WccHeroContent.html
//
export class WccHeroContent extends BaseComponent {

}

BaseComponent.registerWcc(WccHeroContent, import.meta.url, myTemplate);