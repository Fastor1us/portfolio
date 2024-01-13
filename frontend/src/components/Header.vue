<script setup>
import { useAppThemeStore } from '@/stores/app-theme';
import { watchEffect } from 'vue';
const store = useAppThemeStore();

watchEffect(() => {
  document.querySelector('body').className = store.theme;
});
</script>


<template>
  <header>
    <button @click="store.toggleTheme">
      Toggle Theme
    </button>
    <nav>
      <router-link to="/" :class="store.theme">
        {{ 'Обо мне' }}
      </router-link> |
      <router-link to="/projects" :class="store.theme">
        {{ 'Мои проекты' }}
      </router-link> |
      <router-link to="/contacts" :class="store.theme">
        {{ 'Контакты' }}
      </router-link>
    </nav>
  </header>
</template>


<style scoped>
header {
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: white;
}

nav a.dark {
  color: white;
}

nav a.light {
  color: black;
}

nav a.router-link-exact-active {
  color: #42b983;
}

nav a.router-link-exact-active.light {
  color: #ff0000;
}
</style>
