<script setup lang="ts">
import useAppThemeStore from '../stores/useAppThemeStore';

const $theme = useAppThemeStore();

defineProps<{
  libraries: string[];
}>();
</script>

<template>
  <ul class="LibraryListVue" :class="$theme.theme">
    <li v-for="library in libraries" :key="library">
      {{ library }}
    </li>
  </ul>
</template>

<style scoped>
.LibraryListVue {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 5px;
}

.LibraryListVue li {
  padding: 3px 5px;
  border-radius: 5px;
  transition: all var(--transition-time) ease;
}

.LibraryListVue.dark li {
  background-color: var(--active-text-dark-theme);
  color: black;
}

.LibraryListVue.light li {
  background-color: var(--active-text-light-theme);
  color: white;
}
</style>
