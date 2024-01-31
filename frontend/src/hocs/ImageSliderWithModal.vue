<script setup>
import { ref } from 'vue';
import ImageSlider from '@/components/ImageSlider.vue';
import Modal from '@/components/Modal.vue';

defineProps({
  data: { type: Object, required: true },
  path: { type: String, required: true },
});

const showModal = ref(false);
const imageIndex = ref(0);
const openModal = (index) => {
  imageIndex.value = index;
  showModal.value = true;
};
</script>

<template>
  <ImageSlider :data="data" :path="path" :openModal="openModal">
    <Modal v-model:show="showModal">
      <ImageSlider
        :data="data"
        :path="path"
        :modalActive="true"
        :imageIndex="imageIndex"
      />
    </Modal>
  </ImageSlider>
</template>

<style scoped></style>
