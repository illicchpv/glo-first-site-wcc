// подключить: <script data-wcc type="module" src="wcc/WccButton/WccButton.js"></script>
const myTemplate = ``; // для прод, вставить сюда содержимое файла WccButton.html
//
export class WccButton extends BaseComponent {

}

BaseComponent.registerWcc(WccButton, import.meta.url, myTemplate);
