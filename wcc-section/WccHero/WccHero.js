// подключить: <script data-wcc type="module" src="wcc-section/WccHero/WccHero.js"></script>
const myTemplate = ``; // для прод, вставить сюда содержимое файла WccHero.html
//
export class WccHero extends BaseComponent {

}

BaseComponent.registerWcc(WccHero, import.meta.url, myTemplate);
