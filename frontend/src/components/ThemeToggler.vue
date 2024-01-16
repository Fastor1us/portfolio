<script setup>
import useAppThemeStore from '@/stores/useAppThemeStore';

const $theme = useAppThemeStore();
</script>

<template>
  <button @click="$theme.toggleTheme" :class="$theme.theme">
    <div class="icon" :class="'icon-' + $theme.theme">
      {{ $theme.theme === 'dark' ? '🌙' : '☀️' }}
    </div>
  </button>
  <div></div>
</template>

<style scoped>
button {
  border: 2px solid;
  border-radius: 30px;
  padding: 0;
  margin: 0;
  cursor: pointer;
  outline: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 40px;
  border-radius: 20px;
  transition: all var(--transition-time) ease;
}

button.dark {
  border-color: var(--active-text-dark-theme);
  background-color: #a8ffd8;
}

button.light {
  border-color: var(--active-text-light-theme);
  background-color: LightCoral;
}

.icon {
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 3px;
  font-size: 10px;
  user-select: none;
  transition: all var(--transition-time) ease;
}

.icon-dark {
  background-color: var(--active-text-dark-theme);
  border: 1px solid white;
  transform: scale(1.4);
}

.icon-light {
  background-color: var(--active-text-light-theme);
  border: 1px solid black;
  transform: scale(1.4) translateX(calc(100% - 8px));
}
</style>
