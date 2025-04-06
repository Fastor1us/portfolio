<script setup lang="ts">
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
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
  --app-padding: 20px;
  --max-app-width: 1200px;
  --max-main-width: 1080px;
  --text-indent: 12px;
  --transition-time: 0.5s;
}

html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}

body.transition-enabled {
  transition: background-color var(--transition-time) ease,
    color var(--transition-time) ease;
}

body.dark {
  background-color: var(--background-dark-theme);
  color: white;
}

body.light {
  background-color: var(--background-light-theme);
  color: black;
}

a {
  transition: color var(--transition-time) ease;
}

body.dark a {
  color: var(--active-text-dark-theme);
}

body.light a {
  color: var(--active-text-light-theme);
}

main {
  max-width: var(--max-main-width);
  width: 100%;
  margin-bottom: 20px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  padding: 0 var(--app-padding);
  max-width: var(--max-app-width);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100%;
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
h3,
button {
  margin: 0;
  padding: 0;
}
</style>
