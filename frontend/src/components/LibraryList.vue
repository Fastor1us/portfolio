<script setup>
import useAppThemeStore from '@/stores/useAppThemeStore';

const $theme = useAppThemeStore();

defineProps({
  libraries: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <ul :class="$theme.theme">
    <li v-for="library in libraries" :key="library">
      {{ library }}
    </li>
  </ul>
  <div></div>
</template>

<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 5px;
}

ul li {
  background-color: red;
  padding: 3px 5px;
  border-radius: 5px;
  transition: all var(--transition-time) ease;
}

ul.dark li {
  background-color: var(--active-text-dark-theme);
  color: black;
}

ul.light li {
  background-color: var(--active-text-light-theme);
  color: white;
}
</style>
