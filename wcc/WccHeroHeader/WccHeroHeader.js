// подключить: <script data-wcc type="module" src="wcc/WccHeroHeader/WccHeroHeader.js"></script>
const myTemplate = ``; // для прод, вставить сюда содержимое файла WccHeroHeader.html
//
export class WccHeroHeader extends BaseComponent {

}

BaseComponent.registerWcc(WccHeroHeader, import.meta.url, myTemplate);
