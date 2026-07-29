// подключить: <script data-wcc type="module" src="wcc-section/WccFeatures/WccFeatures.js"></script>
const myTemplate = `<style>
  wcc-feature {
    display: block;
  }

  .wccFeatures {
    display: block;
    background-color: #000;
  }
</style>
<section class="wccFeatures section">
  <div class="container">
    <wcc-section-title>Со мной удобно работать</wcc-section-title>

    <wcc-features-block></wcc-features-block>
  </div>
</section>

<body></body>
`; // для прод, вставить сюда содержимое файла WccFeatures.html
//
export class WccFeatures extends BaseComponent {

}

BaseComponent.registerWcc(WccFeatures, import.meta.url, myTemplate);