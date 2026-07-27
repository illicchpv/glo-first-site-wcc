// подключить: <script data-wcc type="module" src="wcc/WccSectionTitle/WccSectionTitle.js"></script>
const myTemplate = ``; // для прод, вставить сюда содержимое файла WccSectionTitle.html
//
export class WccSectionTitle extends BaseComponent {

}

BaseComponent.registerWcc(WccSectionTitle, import.meta.url, myTemplate);
