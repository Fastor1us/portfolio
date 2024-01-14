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
  --ative-text-dark-theme: #42b983;
  --ative-text-light-theme: Crimson;
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
}

body.dark {
  background-color: rgb(36, 36, 36);
  color: white;
}

body.light {
  background-color: white;
  color: black;
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
</style>
