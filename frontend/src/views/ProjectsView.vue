<script setup>
import { storeToRefs } from 'pinia';
import useProjectsStore from '@/stores/useProjectsStore';
import ImageSlider from '@/components/ImageSlider.vue';
import LibraryList from '@/components/LibraryList.vue';

const $projects = useProjectsStore();
const { projects, isLoading, error } = storeToRefs($projects);
</script>

<template>
  <h1>Мои пет-проекты:</h1>
  <section v-if="projects">
    <ul class="ul">
      <li v-for="project in projects" :key="project.title" class="li">
        <div class="title">
          <h2>{{ project.title }}</h2>
          <p>{{ project.created }}</p>
        </div>

        <LibraryList :libraries="project.libraries" />

        <ImageSlider :project="project" />

        <p>{{ project.description }}</p>
      </li>
    </ul>
  </section>
  <p v-if="isLoading">Загрузка...</p>
  <p v-if="error">{{ error }}</p>
</template>

<style scoped>
.ul {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.li {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
