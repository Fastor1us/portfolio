<script setup>
import URL from '@/server_data';
import { ref } from 'vue';
import useAppThemeStore from '@/stores/useAppThemeStore';
const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});
const $theme = useAppThemeStore();
const visibleImageIndex = ref(0);
const changeImage = (delta) => {
  const newIndex = visibleImageIndex.value + delta;
  if (newIndex >= 0 && newIndex < props.project.images.length) {
    visibleImageIndex.value = newIndex;
  }
};
</script>

<template>
  <section>
    <ul style="display: inline-block">
      <li v-for="(image, index) in project.images" :key="image">
        <div
          class="arrow arrow-left"
          :class="{ disabled: index === 0 }"
          v-show="index === visibleImageIndex"
          @click="changeImage(-1)"
        >
          &#8249;
        </div>
        <div
          class="arrow arrow-right"
          :class="{ disabled: index === project.images.length - 1 }"
          v-show="index === visibleImageIndex"
          @click="changeImage(1)"
        >
          &#8250;
        </div>
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
  <div></div>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

li {
  position: relative;
}

.arrow {
  padding: 5px;
  box-sizing: border-box;
  font-size: 40px;
  position: absolute;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  top: 50%;
  transform: translateY(-50%);
}

.arrow-left {
  left: 10px;
}

.arrow-right {
  right: 10px;
}

.arrow.disabled {
  opacity: 0.5;
}

ul {
  text-align: center;
}

img {
  max-width: 80%;
  border: 2px solid;
  transition: border-color var(--transition-time) ease;
  user-select: none;
}

img.dark {
  border-color: var(--active-text-dark-theme);
}

img.light {
  border-color: var(--active-text-light-theme);
}

button {
  width: 15px;
  height: 15px;
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
  gap: 4px;
  margin-top: 4px;
}
</style>
