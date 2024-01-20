<script setup>
import ImageSlider from '@/components/ImageSlider.vue';
import Modal from '@/components/Modal.vue';
import { ref } from 'vue';
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
const dialogVisible = ref({
  gbu: false,
  music: false,
});
</script>

<template>
  <section>
    <h1>Привет!</h1>
    <h2>Меня зовут Олег, я fullstack разработчик</h2>
    <br />
    <h2>Немного обо мне:</h2>
    <ImageSlider
      :data="images.music"
      :path="'music'"
      v-model:showModal="dialogVisible.music"
    />
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
  <div v-for="key in Object.keys(images)" :key="key">
    <Modal v-model:show="dialogVisible[key]">
      <ImageSlider :data="images[key]" :path="key" :modalActive="true" />
    </Modal>
  </div>
</template>

<style scoped>
p {
  padding: 10px 0;
  text-indent: 12px;
}
</style>
