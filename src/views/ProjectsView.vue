<script setup lang="ts">
import useAppThemeStore from '../stores/useAppThemeStore';
import { data } from '../data/data';
import ImageSliderWithModal from '../hocs/ImageSliderWithModal.vue';
import LibraryList from '../components/LibraryList.vue';

const $themeStore = useAppThemeStore();
</script>

<template>
  <h1 class="h1">Мои пет-проекты:</h1>
  <section>
    <ul class="ul">
      <li
        class="li"
        v-for="project in data.projects"
        :key="project.title"
        :class="$themeStore.theme"
      >
        <div class="title">
          <h2>
            <a :href="project.link" target="_blank" rel="noreferrer">
              {{ project.title }}
            </a>
          </h2>
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
  }
}

.li:last-of-type {
  padding-bottom: 20px;
  border-bottom: none;
}

.li.light {
  border-color: var(--active-text-light-theme);
}

.li.dark {
  border-color: var(--active-text-dark-theme);
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
  text-indent: var(--text-indent);
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
  height: 250px;
  @media (min-width: 1024px) and (max-width: 1279px) {
    height: 280px;
  }
  @media (min-width: 1280px) {
    height: 300px;
  }
}
</style>
