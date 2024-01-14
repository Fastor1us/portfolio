import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { VueQueryPlugin } from 'vue-query'


createApp(App)
  .use(createPinia())
  .use(router)
  .use(VueQueryPlugin)
  .mount('#app')
