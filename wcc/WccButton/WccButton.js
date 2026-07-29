// подключить: <script data-wcc type="module" src="wcc/WccButton/WccButton.js"></script>
const myTemplate = `<style>
  wcc-button {
    display: block;
  }

  .wccButton {
    padding: 24px 42px;

    border-radius: 5px 5px 10px 10px;
    box-shadow: 0 4px 0 0 #b68500;
    background: linear-gradient(180deg, #fdde76 0%, #ffbb01 100%);
    border: none;

    font-weight: 700;
    font-size: 12px;
    text-transform: uppercase;
    text-align: center;
    color: #2e2e30;
  }
</style>
<button class="wccButton">
  <slot name=""></slot>
</button>

<body></body>
`; // для прод, вставить сюда содержимое файла WccButton.html
//
export class WccButton extends BaseComponent {

}

BaseComponent.registerWcc(WccButton, import.meta.url, myTemplate);
