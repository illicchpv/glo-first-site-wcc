// подключить: <script data-wcc type="module" src="wcc-section/WccProjects/WccSlide/WccSlide.js"></script>
const myTemplate = `<style>
  wcc-slider {
    display: block;
  }

  .wccSlider {
    display: block;
    overflow-x: hidden;
  }

  /* Pagination */
  .projects-pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 44px;
  }

  .projects-bullet {
    width: 10px;
    height: 10px;
    border: 2px solid #FFBB01;
    border-radius: 50%;
    display: inline-block;
    margin-left: 10px;
  }

  .projects-bullet-active {
    background-color: #FFBB01;
  }
</style>
<div class="wccSlider swiper-container">
  <!-- Additional required wrapper -->
  <div class="swiper-wrapper">
    <!-- Slides -->
    <div class="swiper-slide">
      <wcc-slide img="project-img01.jpg" title="Сайт строительной фирмы “Велстрой”" time="4 рабочих дня"
        cost="14 000 рублей">
        Мне понравилось работать с “Свой Фио”, потому что он все время был на связи и
        предлагал свои решения, когда мы заходили в тупик с дизайном. Мне нужны были закрывающие документы для
        бухгалтерии, и Артем — тот редкий фрилансер, у которого с документами все в порядке
      </wcc-slide>
    </div>
    <div class="swiper-slide">
      <wcc-slide img="project-img02.jpg" title="Сайт строительной фирмы “Бад строй”" time="5 рабочих дня"
        cost="24 000 рублей">
        Работа с “Свой Фио” оставила только положительные впечатления. Он всегда оперативно отвечал и сам подкидывал идеи,
        когда дизайн-задачи зависали. Кроме того, мне требовались закрывающие акты для отчетности, и я был приятно
        удивлён — у Артема полностью прозрачная документация, что для фрилансера большая редкость.
      </wcc-slide>
    </div>
    <div class="swiper-slide">
      <wcc-slide img="project-img03.jpg" title="Сайт строительной фирмы “СтройМи”" time="7 рабочих дня"
        cost="33 000 рублей">
        Артем — специалист, с которым действительно комфортно взаимодействовать. Он не только всегда был на связи, но и
        активно предлагал варианты решения, когда мы упускались в дизайне. Отдельный плюс за подход к делу: мне нужны
        были документы для бухгалтерского учёта, и Артем предоставил всё в полном порядке, чего я точно не ожидал от
        фрилансера.
      </wcc-slide>
    </div>
    ...
  </div>
  <!-- If we need pagination -->
  <div class="projects-pagination"></div>
</div>

<body></body>
`; // для прод, вставить сюда содержимое файла WccSlider.html
//
export class WccSlider extends BaseComponent {

}

BaseComponent.registerWcc(WccSlider, import.meta.url, myTemplate);