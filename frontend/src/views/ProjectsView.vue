<script setup>
import { storeToRefs } from 'pinia';
import useAppThemeStore from '@/stores/useAppThemeStore';
import useProjectsStore from '@/stores/useProjectsStore';
import ImageSlider from '@/components/ImageSlider.vue';
import LibraryList from '@/components/LibraryList.vue';

const $theme = useAppThemeStore();
const $projects = useProjectsStore();
const { projects, isLoading, error } = storeToRefs($projects);
</script>

<template>
  <h1>Мои пет-проекты:</h1>
  <section v-if="projects">
    <ul>
      <li
        v-for="project in projects"
        :key="project.title"
        :class="$theme.theme"
      >
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
h1 {
  margin-bottom: 30px;
}

ul {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

li {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-bottom: 30px;
  border-bottom: 2px solid;
  transition: border-color var(--transition-time) ease;
}

li.light {
  border-color: var(--active-text-light-theme);
}

li.dark {
  border-color: var(--active-text-dark-theme);
}

li:last-child {
  border-bottom: none;
}
</style>
