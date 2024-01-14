<script setup>
import useAppThemeStore from '@/stores/useAppThemeStore';
import { watchEffect } from 'vue';
const $theme = useAppThemeStore();

watchEffect(() => {
  document.querySelector('body').className = $theme.theme;
});
</script>


<template>
  <header>
    <button @click="$theme.toggleTheme">
      Toggle Theme
    </button>
    <nav>
      <router-link to="/" :class="$theme.theme">
        {{ 'Обо мне' }}
      </router-link> |
      <router-link to="/projects" :class="$theme.theme">
        {{ 'Мои проекты' }}
      </router-link> |
      <router-link to="/contacts" :class="$theme.theme">
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
  color: var(--ative-text-dark-theme);
}

nav a.router-link-exact-active.light {
  color: var(--ative-text-light-theme);
}
</style>
