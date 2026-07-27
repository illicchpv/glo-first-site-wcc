// подключить: <script data-wcc type="module" src="wcc-section/WccFeatures/WccFeatures.js"></script>
const myTemplate = ``; // для прод, вставить сюда содержимое файла WccFeatures.html
//
export class WccFeatures extends BaseComponent {

}

BaseComponent.registerWcc(WccFeatures, import.meta.url, myTemplate);
