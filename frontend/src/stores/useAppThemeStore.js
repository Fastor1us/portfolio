import { defineStore } from 'pinia';
import { ref } from 'vue';

const useAppThemeStore = defineStore('app-theme', () => {
  const browserTheme = window.matchMedia ?
    (window.matchMedia('(prefers-color-scheme: dark)').matches ?
      'dark' : 'light') : 'light';
  const theme = ref(localStorage.getItem('theme') || browserTheme);
  function toggleTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', theme.value);
  }
  return {
    theme,
    toggleTheme
  }
});

export default useAppThemeStore;
