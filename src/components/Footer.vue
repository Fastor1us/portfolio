<script setup lang="ts">
import useAppThemeStore from '../stores/useAppThemeStore';
import packageJson from '../../package.json';

const $themeStore = useAppThemeStore();
</script>

<template>
  <footer :class="$themeStore.theme">
    {{ packageJson.lastEditDateYYYY }} ©&nbsp;
    <a href="https://portfolio-okir.onrender.com/contacts">
      {{ packageJson.author }}
    </a>
  </footer>
</template>

<style scoped>
footer {
  width: 100%;
  padding: 10px;
  margin-top: auto;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  border-top: 2px solid;
  transition: border-color var(--transition-time) ease;
}
footer.light {
  border-color: var(--active-text-light-theme);
}

footer.dark {
  border-color: var(--active-text-dark-theme);
}
</style>
