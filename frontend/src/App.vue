<script setup>
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
  --main-color: #42b983;
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
  text-align: center;
}
</style>
