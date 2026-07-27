// подключить: <script data-wcc type="module" src="wcc/WccContactsForm/WccContactsForm.js"></script>
const myTemplate = ``; // для прод, вставить сюда содержимое файла WccContactsForm.html
//
export class WccContactsForm extends BaseComponent {

}

BaseComponent.registerWcc(WccContactsForm, import.meta.url, myTemplate);
