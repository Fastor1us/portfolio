<script setup>
import { storeToRefs } from 'pinia';
import useAppThemeStore from '@/stores/useAppThemeStore';
import useProjectsStore from '@/stores/useProjectsStore';

const $theme = useAppThemeStore();
const $projects = useProjectsStore();
const { projects, isLoading, error } = storeToRefs($projects);
</script>


<template>
  <h1>Мои пет-проекты:</h1>
  <section v-if="projects">
    <ul>
      <li v-for="project in projects" :key="project.title">
        <div class="header">
          <h2>{{ project.title }}</h2>
          <p>{{ project.created }}</p>
        </div>
        <ul class="libraries" :class="$theme.theme">
          <li v-for="library in project.libraries" :key="library">
            {{ library }}
          </li>
        </ul>
        <p>{{ project.description }}</p>
      </li>
    </ul>
  </section>
  <p v-if="isLoading">Загрузка...</p>
  <p v-if="error">{{ error }}</p>
</template>


<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.libraries {
  display: flex;
  justify-content: flex-start;
  gap: 5px;
}

.libraries li {
  background-color: red;
  padding: 3px 5px;
  border-radius: 5px;
}

.libraries.dark li {
  background-color: var(--ative-text-dark-theme);
  color: black;
}

.libraries.light li {
  background-color: var(--ative-text-light-theme);
  color: white;
}
</style>
