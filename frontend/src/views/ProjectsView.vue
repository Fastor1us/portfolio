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

        <div class="libraries">
          <LibraryList :libraries="project.libraries" />
        </div>

        <div class="images">
          <ImageSlider :project="project" />
        </div>

        <div class="descriptions">
          <p v-for="description in project.descriptions" :key="description">
            {{ description }}
          </p>
        </div>
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
  grid-area: title;
}

li {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-bottom: 30px;
  border-bottom: 2px solid;
  transition: border-color var(--transition-time) ease;
  @media (min-width: 601px) {
    display: grid;
    grid-template-columns: 4fr 5fr;
    grid-template-rows: min-content minmax(min-content, max-content) 1fr;
    grid-template-areas:
      'title title'
      'images libraries'
      'images description';
  }
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

.content {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.descriptions {
  grid-area: description;
}

p {
  text-indent: 12px;
  margin-bottom: 5px;
}

p:last-of-type {
  margin-bottom: 0;
}

.libraries {
  grid-area: libraries;
}

.images {
  grid-area: images;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
