<script setup>
import useAppThemeStore from '@/stores/useAppThemeStore';
const $theme = useAppThemeStore();
defineProps({
  data: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <section class="video-links">
    <span class="title">
      {{ title }}
      &nbsp;
    </span>
    <ul class="ul">
      <template v-for="(video, index) in data" :key="Object.keys(video)[0]">
        <li class="li">
          <a
            :href="Object.values(video)[0]"
            target="_blank"
            rel="noreferrer"
            class="a"
            :class="$theme.theme"
          >
            {{ Object.keys(video)[0] }}
          </a>
          <span v-if="index < data.length - 1">, </span>
          <span v-else>.</span>
        </li>
      </template>
    </ul>
  </section>
</template>

<style scoped>
.ul {
  display: flex;
  flex-wrap: wrap;
  white-space: pre;
}

.li {
  display: inline-block;
}

.video-links {
  padding: 20px 0;

  display: flex;
  flex-wrap: wrap;
}

.a {
  transition: color var(--transition-time) ease;
}

.a.dark {
  color: var(--active-text-dark-theme);
}

.a.light {
  color: var(--active-text-light-theme);
}
</style>
