<script setup>
import useAppThemeStore from '@/stores/useAppThemeStore';
import ImageSlider from '@/components/ImageSlider.vue';
import ImageSliderWithModal from '@/hocs/ImageSliderWithModal.vue';
import LibraryList from '@/components/LibraryList.vue';
import { getAllProjects } from '@/utils/api/projects-api';
import { ref, watchEffect } from 'vue';
const { data: projects, isLoading, error } = getAllProjects();

const $theme = useAppThemeStore();

const dialogVisible = ref({});

watchEffect(() => {
  projects.value &&
    projects.value.forEach((project) => {
      dialogVisible.value[project.title] = false;
    });
});
</script>

<template>
  <h1 class="h1">Мои пет-проекты:</h1>
  <section v-if="projects">
    <ul class="ul">
      <li
        class="li"
        v-for="project in projects"
        :key="project.title"
        :class="$theme.theme"
      >
        <div class="title">
          <h2>{{ project.title }}</h2>
          <p>{{ project.created }}</p>
        </div>

        <ImageSliderWithModal
          :data="project.images"
          :path="project.title"
          class="images"
        />

        <LibraryList :libraries="project.libraries" class="libraries" />

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
.h1 {
  margin-bottom: 30px;
}

.ul {
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

.li {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-bottom: 30px;
  border-bottom: 2px solid;
  transition: border-color var(--transition-time) ease;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: min-content min-content 1fr;
    grid-template-areas:
      'title title'
      'images libraries'
      'images description';
    /* height: 250px; */
    /* align-content: start;
    grid-auto-rows: min-content; */
  }
}

.li.light {
  border-color: var(--active-text-light-theme);
}

.li.dark {
  border-color: var(--active-text-dark-theme);
}

.li:last-child {
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
  /* display: flex;
  justify-content: center;
  align-items: center; */
  /* height: 100%; */
  /* height: 250px; */
  height: 250px;
  @media (min-width: 1024px) and (max-width: 1279px) {
    height: 280px;
  }
  @media (min-width: 1280px) {
    height: 300px;
  }
}
</style>
