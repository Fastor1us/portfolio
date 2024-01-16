<script setup>
import URL from '@/server_data';
import { ref } from 'vue';
import useAppThemeStore from '@/stores/useAppThemeStore';
const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
  showModal: {
    type: Boolean,
  },
  modalActive: {
    type: Boolean,
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
    <ul>
      <li v-for="(image, index) in project.images" :key="image">
        <div
          class="arrow arrow-left"
          :class="[{ disabled: index === 0 }, { modalActive }]"
          v-show="index === visibleImageIndex"
          @click="changeImage(-1)"
        >
          &#8249;
        </div>
        <div
          class="arrow arrow-right"
          :class="[
            { disabled: index === project.images.length - 1 },
            { modalActive },
          ]"
          v-show="index === visibleImageIndex"
          @click="changeImage(1)"
        >
          &#8250;
        </div>
        <img
          v-show="index === visibleImageIndex"
          :src="URL + '/images/' + project.title + '/' + image"
          alt="project.title"
          :class="[$theme.theme, { modalActive }]"
          @click="showModal !== undefined && $emit('update:showModal', true)"
        />
      </li>
    </ul>
    <div class="buttons" :class="{ modalActive }">
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
  transition: opacity var(--transition-time) ease;
}

.arrow.modalActive {
  width: 8%;
  font-size: 60px;
  top: 0;
  transform: translate(0);
  justify-content: center;
  opacity: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.arrow-left {
  left: 10px;
}

.arrow-right {
  right: 10px;
}

.arrow-left.modalActive {
  left: 0;
}

.arrow-right.modalActive {
  right: 0;
}

.arrow.disabled {
  opacity: 0.7;
}

.arrow.modalActive.disabled {
  opacity: 0;
}

li:hover .arrow.modalActive.disabled {
  opacity: 0;
}

li:hover .arrow.modalActive {
  opacity: 0.5;
}

img:hover .arrow.modalActive {
  opacity: 0.5;
}

ul {
  text-align: center;
}

img {
  box-sizing: border-box;
  max-width: 80%;
  border: 2px solid;
  transition: border-color var(--transition-time) ease;
  user-select: none;
  max-height: 235px;
}

img.modalActive {
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  height: auto;
  /* transform: scale(0.9); */
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

.buttons.modalActive {
  padding-bottom: 5px;
}
</style>
