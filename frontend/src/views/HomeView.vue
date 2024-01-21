<script setup>
import ImageSlider from '@/components/ImageSlider.vue';
const images = {
  gbu: ['gbu-01.jpg', 'gbu-02.jpg'],
  music: [
    'music-00.jpg',
    'music-01.jpg',
    'music-02.jpg',
    'music-03.jpg',
    'music-04.jpg',
  ],
};
</script>

<template>
  <section>
    <h1>Привет!</h1>
    <h2>Меня зовут Олег, я fullstack разработчик</h2>

    <ImageSlider :data="images.gbu" path="gbu" class="gbu" />

    <br />
    <h2>Немного обо мне:</h2>
    <p>
      Впервые увлёкся программированием в 17 лет когда учился в лицее. Затем
      поступил в МЭИ на бюджет на кафедру АВТИ. Институт не окончил, рано пошел
      работать по специальности - разработчиком. Работал на фрилансе около 4
      лет.
    </p>
    <p>
      В 23 года впервые пощупал электрогитару - начался новый виток моей жизни -
      увлечение музыкой. По итогу: собрал свою музыкальную кавер-группу, отыграл
      на сцене довольно большой перечень песен.
    </p>
    <p>Затем начался ковид.</p>
  </section>
</template>

<style scoped>
.gbu {
  height: 250px;
  /* width: 250px; */
}

p {
  padding: 10px 0;
  text-indent: 12px;
}
</style>
