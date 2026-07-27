// подключить: <script data-wcc type="module" src="wcc-section/WccContacts/WccContacts.js"></script>
const myTemplate = ``; // для прод, вставить сюда содержимое файла WccContacts.html
//
export class WccContacts extends BaseComponent {

}

BaseComponent.registerWcc(WccContacts, import.meta.url, myTemplate);
