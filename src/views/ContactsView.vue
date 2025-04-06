<script setup lang="ts">
import { getAssetUrl } from '../helpers/loadIconsHelper';
import useAppThemeStore from '../stores/useAppThemeStore';

const $themeStore = useAppThemeStore();

const links = [
  {
    text: 'o-kir@ro.ru',
    href: 'mailto:o-kir@ro.ru',
    icon: 'email',
  },
  {
    text: 'вконтакте',
    href: 'https://vk.com/id16543317',
    icon: 'vk',
  },
];
</script>

<template>
  <section class="container">
    <img
      :src="getAssetUrl('assets/images/me.jpg')"
      alt="Олег Кирюшин"
      class="me"
    />
    <ul class="ul" :class="$themeStore.theme">
      <li v-for="link in links" :key="link.icon">
        <div class="link">
          <img
            :src="
              getAssetUrl(`assets/icons/${link.icon}-${$themeStore.theme}.svg`)
            "
            :alt="`${link.icon}` + '-icon'"
            class="icon"
          />
          <a :href="link.href" target="_blank" rel="noreferrer">
            {{ link.text }}
          </a>
        </div>
      </li>
    </ul>
    <p>Больше проектов:</p>
    <div class="link">
      <img
        :src="getAssetUrl(`assets/icons/github-${$themeStore.theme}.svg`)"
        alt="github-icon"
        class="icon"
      />
      <a href="https://github.com/Fastor1us" target="_blank" rel="noreferrer">
        GitHub
      </a>
    </div>
  </section>
</template>

<style scoped>
.container {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.me {
  border-radius: 50%;
  width: 120px;
}

.ul {
  border-top: 1px solid;
  padding-top: 15px;
  transition: border-color var(--transition-time) ease;
}

.ul.dark {
  border-color: var(--active-text-dark-theme);
}

.ul.light {
  border-color: var(--active-text-light-theme);
}

.link {
  display: flex;
  align-items: center;
  gap: 5px;
}

.icon {
  width: 30px;
  height: 30px;
}
</style>
