<script setup>
import ImageSliderWithModal from '@/hocs/ImageSliderWithModal.vue';
import LibraryList from '@/components/LibraryList.vue';
import VideoList from '@/components/VideoList.vue';
import URL from '@/server_data';
const images = {
  gbu: ['gbu-01.jpg', 'gbu-02.jpg'],
  music: [
    'music-00.jpg',
    'music-01.jpg',
    'music-02.jpg',
    'music-03.jpg',
    'music-04.jpg',
    'music-06.jpg',
    'music-07.jpg',
    'music-08.jpg',
    'music-11.jpg',
    'music-09.jpg',
  ],
};
const videos = [
  {
    'I Hate myself for loving you':
      'https://www.youtube.com/watch?v=vexbrLkSivo',
  },
  // { 'Всадник Из Льда': 'https://vk.com/video796268_456240150' },
  { 'Господин горных дорог': 'https://vk.com/video796268_456240149' },
  // { 'Blood Bound': 'https://vk.com/video-167307197_456239023' },
  // { 'Prima Victoria': 'https://vk.com/video16543317_456239230' },
  // { 'I love Rock and Roll': 'https://vk.com/video97889238_456239419' },
  // { ['Ром']: 'https://vk.com/video-167307197_456239025' },
];
const stack = [
  'GIT',
  'Node.js',
  'Webpack',
  'JavaScript',
  'TypeScript',
  'HTML',
  'CSS',
  'SQL',
  'React',
  'Vue3',
  'Redux (RTK Query)',
  'VueX',
  'Pinia',
  'Express.js',
];
</script>

<template>
  <section class="home">
    <img :src="URL + '/images/me.jpg'" alt="рабочее место" class="me" />
    <h1>Привет!</h1>
    <h2 class="h2">Меня зовут Олег, я frontend-fullstack разработчик</h2>
    <br />
    <p>Нахожусь в поисках работы!</p>
    <p>Имею коммерческий опыт (2023), 2012-2016 фриланс</p>
    <br />
    <LibraryList :libraries="stack" />
    <br />
    <section class="about">
      <h2 class="about__title">Немного обо мне:</h2>
      <ImageSliderWithModal
        :data="images.gbu"
        path="gbu"
        class="slider gbu-slider"
      />
      <p class="gbu-description">
        В 17, учась в лицее, увлёкся программированием. Поступил на бюджет в
        МЭИ, на кафедру АВТИ. Институт не окончил, рано пошел работать по
        специальности
      </p>
      <p class="music-description">
        В 23 года увлекся игрой на электрогитаре - начался новый виток моей
        жизни. Собрал свою музыкальную кавер-группу, с которой играли на сцене в
        пабах
      </p>
      <ImageSliderWithModal
        :data="images.music"
        path="music"
        class="slider music-slider"
      />
    </section>
    <VideoList class="video-list" :data="videos" :title="'Немного видео:'" />
    <p>
      На прошлой работе сделал
      <a
        href="https://disk.yandex.ru/d/N3LYOAiA720oyQ"
        target="_blank"
        rel="noreferrer"
      >
        аудио-подложку</a
      >
      под стихи в видео-поздравлении на 8 марта
    </p>
    <br />
    <p>
      Затем начался ковид. Не лучший период в моей жизни, я подсел на ММО... По
      прошествию нескольких лет пришло осознание - так жить больше нельзя,
      пришло время что-то менять
    </p>
    <br />
    <p>Возвращение к истокам</p>
    <p>
      В 2023 году работал в ООО Платформа на должности инженер-программист.
      Разрабатывал таблицы (аналог excel, только в браузере) по заказу Москвы,
      занимался разработкой корпоративного софта
    </p>
    <br />
    <h2>Рабочее место:</h2>
    <img
      :src="URL + '/images/workplace.jpg'"
      alt="рабочее место"
      class="workplace"
    />
    <p>
      Подъёмный стол, два монитора: 2560х1080, 1920х1200 и яндекс музыка делают
      работу комфортной и приянтой ♫ ♪ ♫ ♪
    </p>
  </section>
</template>

<style scoped>
.home {
  position: relative;
}
.me {
  position: absolute;
  right: 0;
  top: 0;
  border-radius: 50%;
  width: 120px;
}

.h2 {
  max-width: 75%;
}
.workplace {
  width: 100%;
}
.about {
  display: grid;
  grid-template-columns: repeat(2, minmax(min-content, max-content));
  grid-template-rows: repeat(4, minmax(min-content, max-content));
  grid-template-areas:
    'title title'
    'gbu-slider gbu-description'
    'gbu-slider music-slider'
    'music-description music-slider';
  row-gap: 20px;
  column-gap: 5px;
  @media (min-width: 500px) and (max-width: 768px) {
    grid-template-columns: max-content minmax(min-content, max-content);
    grid-template-areas:
      'title title'
      'gbu-slider gbu-description'
      'gbu-slider music-description'
      'music-slider music-slider';
    row-gap: 15px;
    column-gap: 0;
  }
  @media (max-width: 499) {
    grid-template-columns: max-content minmax(min-content, max-content);
    grid-template-areas:
      'title title'
      'gbu-slider gbu-description'
      'gbu-slider music-description'
      'music-slider music-slider';
    row-gap: 15px;
    column-gap: 2px;
  }
}

.about__title {
  grid-area: title;
}

.gbu-slider {
  grid-area: gbu-slider;
  margin: 0 50px;
  @media (max-width: 1279px) {
    margin: 0;
    grid-template-columns: 4fr 1fr;
  }
}

.gbu-description {
  grid-area: gbu-description;
}

.music-slider {
  grid-area: music-slider;
}

.music-description {
  grid-area: music-description;
}

.slider {
  height: 250px;
  @media (min-width: 1024px) and (max-width: 1279px) {
    height: 280px;
  }
  @media (min-width: 1280px) {
    height: 300px;
  }
}

.video-list {
  margin-left: var(--text-indent);
}

p {
  text-indent: var(--text-indent);
}
</style>
