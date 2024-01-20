<script setup>
import URL from '@/server_data';
import { ref } from 'vue';
import useAppThemeStore from '@/stores/useAppThemeStore';
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
  path: {
    type: String,
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
const isArrowActive = ref(false);
const changeImage = (delta) => {
  const newIndex = visibleImageIndex.value + delta;
  if (newIndex >= 0 && newIndex < props.data.length) {
    visibleImageIndex.value = newIndex;
  }
};
</script>

<template>
  <section>
    <ul :class="[$theme.theme, { modalActive }]">
      <li v-for="(image, index) in data" :key="image">
        <div
          class="arrow arrow-left"
          :class="[
            $theme.theme,
            { disabled: index === 0 },
            { modalActive },
            { active: isArrowActive },
          ]"
          v-show="index === visibleImageIndex"
          @click="changeImage(-1)"
          @mousedown="isArrowActive = true"
          @mouseup="isArrowActive = false"
        >
          &#8249;
        </div>
        <div
          class="arrow arrow-right"
          :class="[
            $theme.theme,
            { disabled: index === data.length - 1 },
            { modalActive },
            { active: isArrowActive },
          ]"
          v-show="index === visibleImageIndex"
          @click="changeImage(1)"
          @mousedown="isArrowActive = true"
          @mouseup="isArrowActive = false"
        >
          &#8250;
        </div>
        <img
          v-show="index === visibleImageIndex"
          :src="URL + '/images/' + props.path + '/' + image"
          alt="image.substring(0, image.indexOf('.'))"
          :class="[$theme.theme, { modalActive }]"
          @click="showModal !== undefined && $emit('update:showModal', true)"
        />
      </li>
    </ul>
    <div class="buttons" :class="{ modalActive }">
      <button
        v-for="(image, index) in data"
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
  margin: auto;
  align-items: center;
  width: 100%;
}

ul {
  text-align: center;
  border: 2px solid;
  max-width: 80%;
  width: 100%;
  min-height: 285px;
  max-height: 285px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

ul.modalActive {
  max-width: 100%;
  /* тут добавить width в зависимости от ширины экрана */
  /* если экран не широкий, то 100% */
  width: 100%;
  /* если широкий, то задать ограничение в пикселях */

  /* min-height: 600px;
  max-height: 600px;
  height: 100%; */
}

ul.dark {
  border-color: var(--active-text-dark-theme);
}

ul.light {
  border-color: var(--active-text-light-theme);
}

li {
  position: relative;
  line-height: 0;
  /* max-height: 285px; */
  height: 100%;
  width: 100%;
  /* overflow: hidden; */
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
  /* transition: opacity var(--transition-time) ease; */
  @media (min-width: 768px) {
    padding: 15px;
  }
}

.arrow:not(.disabled):not(.modalActive):not(.active):hover {
  transform: translateY(-50%) scale(1.3);
}

.arrow.modalActive:not(.disabled):not(.active):hover {
  transform: scale(1.3);
}

.arrow.modalActive {
  width: 8%;
  font-size: 60px;
  top: 0;
  transform: translate(0);
  justify-content: center;
  opacity: 0;
}

.arrow.modalActive.dark {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.arrow.modalActive.light {
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

.arrow-left {
  left: 10px;
  @media (min-width: 475px) {
    left: -30px;
  }
}

.arrow-right {
  right: 10px;
  @media (min-width: 475px) {
    right: -30px;
  }
}

.arrow-left.modalActive {
  left: 0;
}

.arrow-right.modalActive {
  right: 0;
}

.arrow.disabled {
  opacity: 0.5;
}

.arrow.modalActive.disabled {
  opacity: 0;
  cursor: default;
}

li:hover .arrow:not(.disabled).modalActive {
  opacity: 1;
}

img {
  /* box-sizing: border-box; */
  object-fit: scale-down;
  /* border: 2px solid; */
  transition: border-color var(--transition-time) ease;
  user-select: none;
  max-width: 100%;
  max-height: 285px;
  /* max-height: 235px;
  @media (min-width: 768px) {
    max-height: 300px;
    max-width: 100%;
  } */
}

img.modalActive {
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  height: auto;
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
