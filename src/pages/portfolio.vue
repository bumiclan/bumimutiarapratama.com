<template>
  <div id="portfolio" class="container mt-16 pt-24 lg:mt-24">
    <div class="grid grid-cols-1 pb-8 text-center">
      <h3
        class="font-poppins mb-4 text-4xl font-extrabold leading-normal md:leading-normal"
      >
        {{ portfolio[0].name }}
      </h3>
    </div>

    <masonry-wall
      :items="portfolio[0].photos"
      :ssr-columns="3"
      :column-width="300"
      :gap="16"
    >
      <template #default="{ item, index }">
        <div>
          <img :src="item" />
        </div>
      </template>
    </masonry-wall>
  </div>

  <br />

  <div class="my-16 w-full text-center">
    <router-link
      to="/#portfolio"
      class="m-4 bg-black py-3 px-8 text-center text-white"
    >
      Back
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const slug = route.params.slug;

const portfolios = [
  {
    name: 'PT. NIRAMAS PANDAAN SEJAHTERA',
    link: 'pt-niramas-pandaan-sejahtera',
    thumbnail:
      '/assets/images/portfolio/pergudangan/pt-niramas-pandaan-sejahtera/thumbnail.jpg',
    photos: [
      '/assets/images/portfolio/pergudangan/pt-niramas-pandaan-sejahtera/1.jpeg',
      '/assets/images/portfolio/pergudangan/pt-niramas-pandaan-sejahtera/2.jpeg',
      '/assets/images/portfolio/pergudangan/pt-niramas-pandaan-sejahtera/3.jpeg',
      '/assets/images/portfolio/pergudangan/pt-niramas-pandaan-sejahtera/4.jpeg',
      '/assets/images/portfolio/pergudangan/pt-niramas-pandaan-sejahtera/5.jpeg',
      '/assets/images/portfolio/pergudangan/pt-niramas-pandaan-sejahtera/6.jpeg',
      '/assets/images/portfolio/pergudangan/pt-niramas-pandaan-sejahtera/7.jpeg',
      '/assets/images/portfolio/pergudangan/pt-niramas-pandaan-sejahtera/8.jpeg',
      '/assets/images/portfolio/pergudangan/pt-niramas-pandaan-sejahtera/9.jpeg',
      '/assets/images/portfolio/pergudangan/pt-niramas-pandaan-sejahtera/10.jpeg',
      '/assets/images/portfolio/pergudangan/pt-niramas-pandaan-sejahtera/11.jpeg',
      '/assets/images/portfolio/pergudangan/pt-niramas-pandaan-sejahtera/12.jpeg',
    ],
  },
  {
    name: 'PT. BUMI JAYA INDO',
    link: 'pt-bumi-indo-jaya',
    thumbnail:
      '/assets/images/portfolio/pergudangan/pt-bumi-indo-jaya/thumbnail.jpg',
    photos: [
      '/assets/images/portfolio/pergudangan/pt-bumi-indo-jaya/1.jpeg',
      '/assets/images/portfolio/pergudangan/pt-bumi-indo-jaya/2.jpeg',
      '/assets/images/portfolio/pergudangan/pt-bumi-indo-jaya/3.jpeg',
      '/assets/images/portfolio/pergudangan/pt-bumi-indo-jaya/4.jpeg',
      '/assets/images/portfolio/pergudangan/pt-bumi-indo-jaya/5.jpeg',
      '/assets/images/portfolio/pergudangan/pt-bumi-indo-jaya/6.jpeg',
      '/assets/images/portfolio/pergudangan/pt-bumi-indo-jaya/7.jpeg',
      '/assets/images/portfolio/pergudangan/pt-bumi-indo-jaya/8.jpeg',
    ],
  },
  {
    name: 'PT. BUMIKREASI PRIMA',
    link: 'pt-bumi-kreasi-prima',
    thumbnail:
      '/assets/images/portfolio/pergudangan/pt-bumi-kreasi-prima/thumbnail.jpg',
    photos: [
      '/assets/images/portfolio/pergudangan/pt-bumi-kreasi-prima/1.jpeg',
      '/assets/images/portfolio/pergudangan/pt-bumi-kreasi-prima/2.jpeg',
      '/assets/images/portfolio/pergudangan/pt-bumi-kreasi-prima/3.jpeg',
      '/assets/images/portfolio/pergudangan/pt-bumi-kreasi-prima/4.jpeg',
      '/assets/images/portfolio/pergudangan/pt-bumi-kreasi-prima/5.jpeg',
      '/assets/images/portfolio/pergudangan/pt-bumi-kreasi-prima/6.jpeg',
      '/assets/images/portfolio/pergudangan/pt-bumi-kreasi-prima/7.jpeg',
      '/assets/images/portfolio/pergudangan/pt-bumi-kreasi-prima/8.jpeg',
      '/assets/images/portfolio/pergudangan/pt-bumi-kreasi-prima/9.jpeg',
    ],
  },
  {
    name: 'Bale Kecandran Hills',
    link: 'bale-kecandran-hills',
    thumbnail:
      '/assets/images/portfolio/perumahan/bale-kecandran-hills/thumbnail.jpg',
    photos: [
      '/assets/images/portfolio/perumahan/bale-kecandran-hills/1.jpeg',
      '/assets/images/portfolio/perumahan/bale-kecandran-hills/2.jpeg',
      '/assets/images/portfolio/perumahan/bale-kecandran-hills/3.jpeg',
      '/assets/images/portfolio/perumahan/bale-kecandran-hills/4.jpeg',
      '/assets/images/portfolio/perumahan/bale-kecandran-hills/5.jpeg',
      '/assets/images/portfolio/perumahan/bale-kecandran-hills/6.jpeg',
      '/assets/images/portfolio/perumahan/bale-kecandran-hills/7.jpeg',
      '/assets/images/portfolio/perumahan/bale-kecandran-hills/8.jpeg',
    ],
  },
];

const portfolio = portfolios.filter((el) => el.link === slug);

onMounted(() => {});
</script>
