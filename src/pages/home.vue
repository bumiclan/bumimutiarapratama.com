<template>
  <!-- Hero Start -->
  <section class="relative">
    <div class="container-fluid">
      <div class="relative table h-[768px] w-full overflow-hidden shadow-md">
        <div class="absolute inset-0 overflow-hidden">
          <div
            id="home"
            class="image-wrap absolute m-auto h-auto min-h-full w-auto min-w-full overflow-hidden"
          ></div>
        </div>
        <!--end container-->
      </div>
    </div>
    <!--end Container-->
  </section>
  <!-- Hero End -->

  <div id="about" class="container mt-16 pt-24 md:mt-24">
    <div class="mt-16 grid grid-cols-1 items-center gap-[30px] md:grid-cols-2">
      <div
        class="wow animate__animated animate__fadeInLeft relative"
        data-wow-delay=".3s"
      >
        <img
          src="../assets/images/home/about.jpeg"
          class="rounded-lg shadow-md dark:shadow-gray-800"
          alt=""
        />
        <div
          class="-z-1 absolute bottom-0 left-0 h-[320px] w-[320px] rotate-45 overflow-hidden rounded-3xl bg-indigo-600/5 lg:h-[400px] lg:w-[400px]"
        ></div>
      </div>

      <div
        class="wow animate__animated animate__fadeInRight lg:ml-8"
        data-wow-delay=".3s"
      >
        <h4 class="font-poppins mb-4 text-4xl font-extrabold">
          PT. Bumi Mutiara Pratama
        </h4>
        <p class="text-slate-500">
          Kami bergerak di bidang pembangunan pembangunan seperti Proyek Gedung
          Perkantoran, Industri, Gudang, Perumahan.
        </p>
        <p class="mt-4 text-slate-500">
          Kami percaya bahwa setiap perkembangan adalah bagian dari pertumbuhan.
          Kami juga percaya bahwa fisik dan mentalitas dapat memberikan hasil
          perkembangan yang terbaik.
        </p>
        <p class="mt-4 text-slate-500">
          Dari situ kami yakin bahwa seluruh inovasi dan ketulusan akan membuat
          pembangunan berkelanjutan baik dalam produk, hubungan, layanan dan
          keuntungan dalam skala global
        </p>
      </div>
    </div>
  </div>
  <!--end container-->

  <div id="portfolio" class="container mt-16 pt-24 lg:mt-24">
    <div class="grid grid-cols-1 pb-8 text-center">
      <h3
        class="font-poppins mb-4 text-4xl font-extrabold leading-normal md:leading-normal"
      >
        Our Portfolio
      </h3>

      <p class="mx-auto max-w-2xl text-slate-500">
        Sebagian dari kita beranggapan bahwa kontraktor yang bagus, pasti
        harganya lebih mahal. Kami adalah profesional dan ahli di bidangnya
        dengan harga terjangkau.
      </p>
    </div>
    <!--end grid-->

    <div class="mt-8 grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-4">
      <template v-for="portfolio in portfolios" :key="portfolio.name">
        <router-link
          v-if="portfolio.link"
          :to="`portfolio/${portfolio.link}`"
          class="group overflow-hidden rounded-md bg-white shadow-sm duration-500 ease-in-out hover:shadow-xl dark:bg-slate-900 dark:shadow-gray-800 dark:hover:shadow-xl dark:hover:shadow-gray-700"
        >
          <div class="relative">
            <img :src="portfolio.thumbnail" :alt="portfolio.name" />
          </div>

          <div class="p-6">
            <div class="text-center">
              <div
                class="font-poppins duration-500 ease-in-out hover:text-indigo-600"
              >
                {{ portfolio.name }}
              </div>
            </div>
          </div>
        </router-link>
        <div v-else
          class="group overflow-hidden rounded-md bg-white shadow-sm duration-500 ease-in-out hover:shadow-xl dark:bg-slate-900 dark:shadow-gray-800 dark:hover:shadow-xl dark:hover:shadow-gray-700"
        >
          <div class="relative">
            <img :src="portfolio.thumbnail" :alt="portfolio.name" />
          </div>

          <div class="p-6">
            <div class="text-center">
              <div
                class="font-poppins duration-500 ease-in-out hover:text-indigo-600"
              >
                {{ portfolio.name }}
              </div>
            </div>
          </div>
        </div>
      </template>
      <!--end property content-->
    </div>
    <!--en grid-->
  </div>
  <!--end container-->

  <br />
  <br />
  <a
    href="https://wa.me/6282226115758"
    target="_blank"
    rel="noopener noreferrer"
    class="fixed bottom-4 right-4 z-99999 bg-[#25D366] rounded-full py-2 px-4"
  >
    <div class="flex items-center gap-1">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        class="w-6 h-6"
      /> 
      <span>contact us</span>
    </div>
  </a>
</template>

<script setup lang="ts">
import { easy_background } from '../assets/js/easy_background.js';
import { onMounted } from 'vue';

const portfolios = [
  {
    name: 'PT. NIRAMAS PANDAAN SEJAHTERA',
    link: 'pt-niramas-pandaan-sejahtera',
    thumbnail:
      '/assets/images/portfolio/pergudangan/pt-niramas-pandaan-sejahtera/thumbnail.jpg',
  },
  {
    name: 'PT. BUMI INDO JAYA',
    link: 'pt-bumi-indo-jaya',
    thumbnail:
      '/assets/images/portfolio/pergudangan/pt-bumi-indo-jaya/thumbnail.jpg',
  },
  {
    name: 'PT. BUMIKREASI PRIMA',
    link: 'pt-bumi-kreasi-prima',
    thumbnail:
      '/assets/images/portfolio/pergudangan/pt-bumi-kreasi-prima/thumbnail.jpg',
  },
  {
    name: 'BALE KECANDRAN HILLS',
    link: 'bale-kecandran-hills',
    thumbnail:
      '/assets/images/portfolio/perumahan/bale-kecandran-hills/thumbnail.jpg',
  },
  {
    name: 'CV. DUA SAUDARA SUKSES',
    link: '',
    thumbnail:
      '/assets/images/portfolio/pergudangan/cv-dua-saudara-sukses/thumbnail.jpg',
  },
  {
    name: 'CV.TATA BUMI BERSAMA',
    link: '',
    thumbnail:
      '/assets/images/portfolio/pergudangan/cv-tata-bumi-bersama/thumbnail.jpg',
  },
  {
    name: 'PT. BINA INSAN MANDIRI',
    link: '',
    thumbnail:
      '/assets/images/portfolio/pergudangan/pt-bina-insan-mandiri/thumbnail.jpg',
  },
  {
    name: 'PT.BUMI INDO',
    link: '',
    thumbnail:
      '/assets/images/portfolio/pergudangan/pt-bumi-indo/thumbnail.jpg',
  },
];

onMounted(() => {
  easy_background('#home', {
    slide: ['/assets/images/home/hero-1.jpg', '/assets/images/home/hero-2.jpg'],
    delay: [5000, 5000],
  });
});
</script>
