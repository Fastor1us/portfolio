<script setup>
import URL from '@/server_data';
import useAppThemeStore from '@/stores/useAppThemeStore';
const $theme = useAppThemeStore();
const links = [
  ['вконтакте', 'https://vk.com/id16543317'],
  ['GitHub', 'https://github.com/Fastor1us'],
];
</script>

<template>
  <section class="container">
    <img :src="URL + '/images/me.jpg'" alt="рабочее место" class="me" />
    <ul class="ul" :class="$theme.theme">
      <li>
        <div class="link">
          <img
            :src="require(`@/assets/icons/email-${$theme.theme}.svg`)"
            alt="github"
            class="icon"
          />
          <a href="mailto:fewgwer3@ya.ru" class="a" :class="$theme.theme">
            fewgwer3@ya.ru
          </a>
        </div>
      </li>
      <li>
        <div class="link">
          <img
            :src="require(`@/assets/icons/vk-${$theme.theme}.svg`)"
            alt="github"
            class="icon"
          />
          <a
            href="https://vk.com/id16543317"
            target="_blank"
            rel="noreferrer"
            class="a"
            :class="$theme.theme"
          >
            вконтакте
          </a>
        </div>
      </li>
    </ul>
    <p>Больше проектов:</p>
    <div class="link">
      <img
        :src="require(`@/assets/icons/github-${$theme.theme}.svg`)"
        alt="github"
        class="icon"
      />
      <a
        href="https://github.com/Fastor1us"
        target="_blank"
        rel="noreferrer"
        class="a"
        :class="$theme.theme"
      >
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

.a {
  transition: color var(--transition-time) ease;
  display: inline-block;
}

.a.dark {
  color: var(--active-text-dark-theme);
}

.a.light {
  color: var(--active-text-light-theme);
}
</style>
