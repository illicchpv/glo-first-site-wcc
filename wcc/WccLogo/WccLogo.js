// подключить: <script data-wcc type="module" src="wcc/WccLogo/WccLogo.js"></script>
const myTemplate = ``; // для прод, вставить сюда содержимое файла WccLogo.html
//
export class WccLogo extends BaseComponent {

}

BaseComponent.registerWcc(WccLogo, import.meta.url, myTemplate);
