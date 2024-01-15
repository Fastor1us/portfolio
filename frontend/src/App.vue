<script setup>
import { watchEffect } from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import { getAllProjects } from '@/utils/api/projects-api';
import useProjectsStore from './stores/useProjectsStore';
const { data, isLoading, error } = getAllProjects();
const $projects = useProjectsStore();
watchEffect(() => {
  $projects.setData({ data, isLoading, error });
});
</script>

<template>
  <Header />
  <main>
    <router-view />
  </main>
  <Footer />
</template>

<style>
:root {
  --active-text-dark-theme: #42b983;
  --active-text-light-theme: Crimson;
  --background-light-theme: rgb(230, 230, 230);
  --background-dark-theme: rgb(36, 36, 36);
  --max-main-width: 960px;
  --transition-time: 0.5s;

  @media (min-width: 412px) and (max-width: 767px) {
    --max-main-width: 412px;
  }

  @media (min-width: 768px) and (max-width: 959px) {
    --max-main-width: 768px;
  }

  @media (min-width: 960px) {
    --max-main-width: 960px;
  }
}

html {
  margin: 0;
  padding: 0;
  width: 100%;
}

body {
  margin: 0;
  padding: 0;
  width: 100%;
  box-sizing: border-box;
  transition: all var(--transition-time) ease;
  display: flex;
  flex-direction: column;
  align-items: center;
}

body.dark {
  background-color: var(--background-dark-theme);
  color: white;
}

body.light {
  background-color: var(--background-light-theme);
  color: black;
}

main {
  max-width: var(--max-main-width);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

p,
a,
li,
h1,
h2,
h3 {
  margin: 0;
  padding: 0;
}
</style>
