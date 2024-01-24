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
  { 'Всадник Из Льда': 'https://vk.com/video796268_456240150' },
  { 'Господин горных дорог': 'https://vk.com/video796268_456240149' },
  { 'Blood Bound': 'https://vk.com/video-167307197_456239023' },
  { 'Prima Victoria': 'https://vk.com/video16543317_456239230' },
  { 'I love Rock and Roll': 'https://vk.com/video97889238_456239419' },
  { ['Ром']: 'https://vk.com/video-167307197_456239025' },
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
        Впервые увлёкся программированием в 17 лет когда учился в лицее. Затем
        поступил в МЭИ на бюджет на кафедру АВТИ. Институт не окончил, рано
        пошел работать по специальности - разработчиком. Работал на фрилансе
        около 4 лет.
      </p>
      <p class="music-description">
        В 23 года впервые "пощупал" электрогитару - начался новый виток -
        увлечение музыкой. Собрал свою музыкальную кавер-группу, отыграл на
        сцене довольно большой перечень песен.
      </p>
      <ImageSliderWithModal
        :data="images.music"
        path="music"
        class="slider music-slider"
      />
    </section>
    <VideoList :data="videos" :title="'Видео выступлений:'" />
    <p>
      На прошлой работе сделал аудио-подложку
      (https://disk.yandex.ru/d/N3LYOAiA720oyQ) под стихи в видео-поздравлении
      на 8 марта
    </p>
    <p>Затем начался ковид.</p>
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
  @media (min-width: 500px) and (max-width: 768px) {
    grid-template-columns: max-content minmax(min-content, max-content);
    grid-template-areas:
      'title title'
      'gbu-slider gbu-description'
      'gbu-slider music-description'
      'music-slider music-slider';
    row-gap: 15px;
  }
  @media (max-width: 499) {
    grid-template-columns: max-content minmax(min-content, max-content);
    grid-template-areas:
      'title title'
      'gbu-slider gbu-description'
      'gbu-slider music-description'
      'music-slider music-slider';
    row-gap: 15px;
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
    padding-right: 10px;
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

p {
  text-indent: 12px;
}
</style>
