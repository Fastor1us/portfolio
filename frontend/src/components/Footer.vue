<script setup>
import useAppThemeStore from '@/stores/useAppThemeStore';
import packageJson from '../../../package.json';
const $theme = useAppThemeStore();
</script>

<template>
  <footer :class="$theme.theme">
    {{ new Date().getFullYear() }} ©&nbsp;
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
