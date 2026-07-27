// подключить: <script data-wcc type="module" src="wcc/WccAvatar/WccAvatar.js"></script>
const myTemplate = ``; // для прод, вставить сюда содержимое файла WccAvatar.html
//
export class WccAvatar extends BaseComponent {

}

BaseComponent.registerWcc(WccAvatar, import.meta.url, myTemplate);
