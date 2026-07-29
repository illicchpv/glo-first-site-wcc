// подключить: <script data-wcc type="module" src="wcc-section/WccProjects/WccProjects.js"></script>
const myTemplate = ``; // для прод, вставить сюда содержимое файла WccProjects.html
//
export class WccProjects extends BaseComponent {

}

BaseComponent.registerWcc(WccProjects, import.meta.url, myTemplate);