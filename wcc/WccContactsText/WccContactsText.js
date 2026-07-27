// подключить: <script data-wcc type="module" src="wcc/WccContactsText/WccContactsText.js"></script>
const myTemplate = ``; // для прод, вставить сюда содержимое файла WccContactsText.html
//
export class WccContactsText extends BaseComponent {

}

BaseComponent.registerWcc(WccContactsText, import.meta.url, myTemplate);
