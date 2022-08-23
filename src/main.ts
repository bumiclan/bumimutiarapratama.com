import { createApp } from 'vue';
import App from './App.vue';
import './assets/scss/tailwind.scss';
import router from './router';
import MasonryWall from '@yeger/vue-masonry-wall';

createApp(App).use(router).use(MasonryWall).mount('#app');
