// подключить: <script data-wcc type="module" src="wcc-section/WccProjects/WccSlide/WccSlide.js"></script>
const myTemplate = ``; // для прод, вставить сюда содержимое файла WccSlider.html
//
export class WccSlider extends BaseComponent {

}

BaseComponent.registerWcc(WccSlider, import.meta.url, myTemplate);