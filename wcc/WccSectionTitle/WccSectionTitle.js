// подключить: <script data-wcc type="module" src="wcc/WccSectionTitle/WccSectionTitle.js"></script>
const myTemplate = `<style>
  wcc-section-title {
    display: inline-block;
  }

  .wccSectionTitle {
    display: inline-block;
    font-weight: 700;
    font-size: 36px;
    color: #fff;
    margin-bottom: 70px;
  }
</style>
<h2 class="wccSectionTitle">
  <slot name=""></slot>
</h2>

<body></body>
`; // для прод, вставить сюда содержимое файла WccSectionTitle.html
//
export class WccSectionTitle extends BaseComponent {

}

BaseComponent.registerWcc(WccSectionTitle, import.meta.url, myTemplate);
