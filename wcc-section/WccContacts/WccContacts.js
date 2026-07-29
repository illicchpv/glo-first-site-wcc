// подключить: <script data-wcc type="module" src="wcc-section/WccContacts/WccContacts.js"></script>
const myTemplate = `<style>
  wcc-contacts {
    display: block;
  }

  .wccContacts {
    display: block;
    padding-top: 57px;
    padding-bottom: 140px;
    /* background-color: #000; */

  }

  .wccContacts__block {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
<footer class="wccContacts section">
  <div class="container">
    <wcc-section-title>Свяжитесь со мной</wcc-section-title>

    <div class="wccContacts__block">
      <wcc-contacts-form></wcc-contacts-form>

      <wcc-contacts-text></wcc-contacts-text>
    </div>
  </div>

</footer>

<body></body>
`; // для прод, вставить сюда содержимое файла WccContacts.html
//
export class WccContacts extends BaseComponent {

}

BaseComponent.registerWcc(WccContacts, import.meta.url, myTemplate);