<script setup>
import ThemeToggler from './ThemeToggler.vue';
import useAppThemeStore from '@/stores/useAppThemeStore';
const $theme = useAppThemeStore();
</script>

<template>
  <header>
    <ThemeToggler />
    <nav>
      <router-link to="/" :class="$theme.theme">
        {{ 'Обо мне' }}
      </router-link>
      |
      <router-link to="/projects" :class="$theme.theme">
        {{ 'Мои проекты' }}
      </router-link>
      |
      <router-link to="/contacts" :class="$theme.theme">
        {{ 'Контакты' }}
      </router-link>
    </nav>
  </header>
  <div></div>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  margin: 30px 0 40px;
}

nav a {
  font-weight: bold;
  color: white;
  transition: color var(--transition-time) ease;
}

nav a.dark {
  color: white;
}

nav a.light {
  color: black;
}

nav a.router-link-exact-active {
  color: var(--active-text-dark-theme);
}

nav a.router-link-exact-active.light {
  color: var(--active-text-light-theme);
}
</style>
