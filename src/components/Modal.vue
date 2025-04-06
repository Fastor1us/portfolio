<script setup>
import { onMounted, onUnmounted } from 'vue';
defineProps({
  show: {
    type: Boolean,
    required: true,
  },
});
const emit = defineEmits();
onMounted(() => {
  const escClickHandler = (e) => {
    if (e.key === 'Escape') {
      emit('update:show', false);
    }
  };
  document.addEventListener('keydown', escClickHandler);
  onUnmounted(() => {
    document.removeEventListener('keydown', escClickHandler);
  });
});
</script>

<template>
  <section class="ModalVue" v-if="show" @click="$emit('update:show', false)">
    <div v-on:click.stop class="content">
      <slot></slot>
    </div>
  </section>
</template>

<style scoped>
.ModalVue {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  z-index: 1000;
}

.content {
  margin: auto;
  border-radius: 12px;
  min-height: 50px;

  @media (max-width: 724px) {
    max-width: 100%;
  }

  @media (min-width: 725px) and (max-width: 1279px) {
    max-width: 90%;
  }

  @media (min-width: 1280px) {
    max-width: 1200px;
  }
}
</style>
