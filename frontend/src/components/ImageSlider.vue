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
  openModal: {
    type: Function,
    required: false,
  },
  modalActive: {
    type: Boolean,
    required: false,
  },
  imageIndex: {
    type: Number,
    required: false,
  },
});
const $theme = useAppThemeStore();
const visibleImageIndex = ref(props.imageIndex || 0);
const isArrowActive = ref(false);
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
const changeImage = (delta) => {
  const newIndex = visibleImageIndex.value + delta;
  if (newIndex >= 0 && newIndex < props.data.length) {
    visibleImageIndex.value = newIndex;
  }
};
const swapImage = (index, length) => {
  if (index < length) {
    visibleImageIndex.value++;
  } else {
    visibleImageIndex.value = 0;
  }
};
</script>

<template>
  <section class="ImageSliderVue" :class="{ modalActive }">
    <ul class="ul">
      <li v-for="(image, index) in data" :key="image" class="li">
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
          <span class="arrow-span"> &#8249; </span>
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
          <span class="arrow-span"> &#8250; </span>
        </div>
        <img
          v-show="index === visibleImageIndex"
          :src="URL + '/images/' + path + '/' + image"
          :alt="image.substring(0, image.indexOf('.'))"
          @click="
            openModal ? openModal(index) : swapImage(index, data.length - 1)
          "
        />
      </li>
    </ul>
    <div class="buttons" :class="{ modalActive }">
      <button
        v-show="!modalActive || !isMobile"
        class="button"
        v-for="(image, index) in data"
        :key="image"
        @click="visibleImageIndex = index"
        :class="[$theme.theme, { active: index === visibleImageIndex }]"
      ></button>
    </div>
    <slot></slot>
  </section>
</template>

<style scoped>
.ImageSliderVue {
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  max-width: 100%;
}

.ImageSliderVue.modalActive {
  @media (max-width: 724px) {
    max-width: 600px;
  }

  @media (min-width: 725px) and (max-width: 1279px) {
    max-width: 700px;
  }

  @media (min-width: 1280px) {
    max-width: 800px;
  }
}

.ul {
  display: flex;
  height: 92%;
  max-width: 100%;
}

.li {
  max-height: 100%;
  max-width: 100%;
  line-height: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  max-width: 100%;
  max-height: 100%;
  user-select: none;
  cursor: pointer;
}

.buttons {
  display: flex;
  gap: 2px;
  position: absolute;
  bottom: 0;
}

.buttons.modalActive {
  bottom: -18px;
}

.button {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 2px solid;
  outline: none;
  transition: all var(--transition-time) ease;
  cursor: pointer;
}

.button.dark {
  border-color: var(--active-text-dark-theme);
  background-color: white;
}

.button.light {
  border-color: var(--active-text-light-theme);
  background-color: var(--background-light-theme);
}

.button.dark.active {
  background-color: var(--active-text-dark-theme);
}

.button.light.active {
  background-color: var(--active-text-light-theme);
}

.arrow {
  /* border: 1px solid red; */
  padding: 0 15px;
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
  transition: color var(--transition-time) ease;
}

.arrow.dark {
  color: white;
}

.arrow.light {
  color: var(--active-text-light-theme);
}

.arrow:not(.disabled):not(.modalActive):not(.active):hover .arrow-span {
  transform: translateY(-50%) scale(1.3);
}

.arrow.modalActive:not(.disabled):not(.active):hover .arrow-span {
  transform: scale(1.3);
}

.arrow.modalActive {
  width: 50%;
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
  left: 0;
}

.arrow-right {
  right: 0;
}

.arrow.disabled {
  opacity: 0.5;
}

.arrow.modalActive.disabled {
  opacity: 0;
  cursor: default;
}

.arrow:not(.disabled).modalActive:hover {
  opacity: 1;
  background-color: rgb(255, 255, 255, 0.01);
}
</style>
