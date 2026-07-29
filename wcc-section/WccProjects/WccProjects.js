// подключить: <script data-wcc type="module" src="wcc-section/WccProjects/WccProjects.js"></script>
const myTemplate = `<style>
  wcc-project {
    display: block;
  }

  .wccProjects {
    display: block;
    background: linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0) 95.44%);
  }
</style>
<section class="wccProjects section">
  <div class="container">
    <wcc-section-title>Последние проекты</wcc-section-title>

    <wcc-slider></wcc-slider>
  </div>
</section>

<body></body>
`; // для прод, вставить сюда содержимое файла WccProjects.html
//
export class WccProjects extends BaseComponent {

}

BaseComponent.registerWcc(WccProjects, import.meta.url, myTemplate);