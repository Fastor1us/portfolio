<script setup lang="ts">
import ThemeToggler from './ThemeToggler.vue';
import useAppThemeStore from '../stores/useAppThemeStore';

const $themeStore = useAppThemeStore();
</script>

<template>
  <header>
    <ThemeToggler />
    <nav class="nav">
      <router-link to="/" :class="$themeStore.theme">
        {{ 'Обо мне' }}
      </router-link>
      |
      <router-link to="/projects" :class="$themeStore.theme">
        {{ 'Мои проекты' }}
      </router-link>
      |
      <router-link to="/contacts" :class="$themeStore.theme">
        {{ 'Контакты' }}
      </router-link>
    </nav>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  margin: 25px 0;
}

.nav a {
  font-weight: bold;
  color: white;
  transition: color var(--transition-time) ease;
}

.nav a.dark {
  color: white;
}

.nav a.light {
  color: black;
}

.nav a.router-link-exact-active {
  color: var(--active-text-dark-theme);
}

.nav a.router-link-exact-active.light {
  color: var(--active-text-light-theme);
}
</style>
