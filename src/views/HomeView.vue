<script setup lang="ts">
import { data } from '../data/data';
import { getAssetUrl } from '../helpers/loadIconsHelper';
import LibraryList from '../components/LibraryList.vue';
import ImageSliderWithModal from '../hocs/ImageSliderWithModal.vue';
import VideoList from '../components/VideoList.vue';
</script>

<template>
  <section class="home">
    <img
      :src="getAssetUrl('assets/images/me.jpg')"
      alt="рабочее место"
      class="me"
    />
    <h1>Привет!</h1>
    <h2 class="h2">Меня зовут Олег, я frontend-fullstack разработчик</h2>
    <br />
    <p>Нахожусь в поисках работы!</p>
    <p>Имею коммерческий опыт (2023), 2012-2016 фриланс</p>
    <br />
    <LibraryList :libraries="data.stack" />
    <br />
    <section class="about">
      <h2 class="about__title">Немного обо мне:</h2>
      <ImageSliderWithModal
        :data="data.images.gbu"
        path="gbu"
        class="slider gbu-slider"
      />
      <div class="gbu-description">
        <p>
          В 17, учась в лицее, увлёкся программированием. Поступил на бюджет в
          МЭИ, на кафедру АВТИ. Институт не окончил, рано пошел работать по
          специальности
        </p>
      </div>
      <p class="music-description">
        В 23 года увлекся игрой на электрогитаре - начался новый виток моей
        жизни. Собрал свою музыкальную кавер-группу, с которой играли на сцене в
        пабах
      </p>
      <ImageSliderWithModal
        :data="data.images.music"
        path="music"
        class="slider music-slider"
      />
    </section>
    <VideoList
      class="video-list"
      :data="data.videos as any"
      :title="'Немного видео:'"
    />
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
    <p>
      С начала 2024 года по настоящее время работаю фулстек разработчиком в ООО
      MightyCall. Фронетенд - React + Redux/MobX, Vue + Pinia. Бекенд - ASP.NET
      Core, COM, RabbitMQ. Так же немного работал с python, powershell script, с
      БДшками (MSSQL, MySQL, SQLite) и с grafana
    </p>
    <br />
    <h2>Рабочее место:</h2>
    <img
      :src="getAssetUrl('assets/images/workplace.jpg')"
      alt="рабочее место"
      class="workplace"
    />
    <p>
      Подъёмный стол, два монитора и яндекс музыка делают работу комфортной и
      приянтой ♫ ♪ ♫ ♪
    </p>
    <br />
    <p>п.с. я не дизайнер, не судите строго за внешний вид сайта :)</p>
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
  display: flex;
  justify-content: center;
  align-items: center;
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
