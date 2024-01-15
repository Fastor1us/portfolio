<script setup>
import URL from '@/server_data';
import { ref } from 'vue';
import useAppThemeStore from '@/stores/useAppThemeStore';
defineProps({
  project: {
    type: Object,
    required: true,
  },
});
const $theme = useAppThemeStore();
const visibleImageIndex = ref(0);
</script>

<template>
  <section>
    <ul style="display: inline-block">
      <li v-for="(image, index) in project.images" :key="image">
        <img
          v-show="index === visibleImageIndex"
          :src="URL + '/images/' + project.title + '/' + image"
          alt="project.title"
          :class="$theme.theme"
        />
      </li>
    </ul>
    <div class="buttons">
      <button
        v-for="(image, index) in project.images"
        :key="image"
        @click="visibleImageIndex = index"
        :class="[$theme.theme, { active: index === visibleImageIndex }]"
      ></button>
    </div>
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

ul {
  text-align: center;
}

img {
  max-width: 40%;
  border: 2px solid;
}

img.dark {
  border-color: var(--active-text-dark-theme);
}

img.light {
  border-color: var(--active-text-light-theme);
}

button {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid;
  outline: none;
  transition: all var(--transition-time) ease;
  cursor: pointer;
}

button.dark {
  border-color: var(--active-text-dark-theme);
  background-color: white;
}

button.light {
  border-color: var(--active-text-light-theme);
  background-color: var(--background-light-theme);
}

button.dark.active {
  background-color: var(--active-text-dark-theme);
}

button.light.active {
  background-color: var(--active-text-light-theme);
}

.buttons {
  display: flex;
  gap: 3px;
}
</style>
