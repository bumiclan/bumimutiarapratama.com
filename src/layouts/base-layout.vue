<template>
  <nav id="topnav" class="defaultscroll is-sticky bg-white shadow">
    <div class="container">
      <!-- Logo container-->
      <a class="logo" href="#">
        <img
          src="@/assets/logo.png"
          class="inline-block h-10 dark:hidden"
          alt=""
        />
        <img
          src="@/assets/logo-dark.png"
          class="hidden dark:inline-block"
          alt=""
        />
        <span class="ml-4 pt-4 text-sm md:text-lg">
          PT. Bumi Mutiara Pratama
        </span>
      </a>

      <!-- End Logo container-->
      <div class="menu-extras">
        <div class="menu-item">
          <!-- Mobile menu toggle-->
          <a id="isToggle" class="navbar-toggle" @click="toggleMenu">
            <div class="lines">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </a>
          <!-- End mobile menu toggle-->
        </div>
      </div>

      <div id="navigation" ref="navigation">
        <!-- Navigation Menu-->
        <ul class="navigation-menu">
          <li>
            <router-link to="/#home" class="sub-menu-item" @click="toggleMenu">
              Home
            </router-link>
          </li>
          <li>
            <router-link to="/#about" class="sub-menu-item" @click="toggleMenu">
              About
            </router-link>
          </li>
          <li>
            <router-link
              to="/#portfolio"
              class="sub-menu-item"
              @click="toggleMenu"
            >
              Portfolio
            </router-link>
          </li>
          <li>
            <router-link
              to="/#footer"
              class="sub-menu-item"
              @click="toggleMenu"
            >
              Contact
            </router-link>
          </li>
        </ul>
        <!--end navigation menu-->
      </div>
      <!--end navigation-->
    </div>
    <!--end container-->
  </nav>

  <router-view />

  <component :is="BaseFooter" />
</template>

<script setup>
import BaseFooter from './base-footer.vue';

function toggleMenu() {
  document.getElementById('isToggle').classList.toggle('open');
  var isOpen = document.getElementById('navigation');
  if (isOpen.style.display === 'block') {
    isOpen.style.display = 'none';
  } else {
    isOpen.style.display = 'block';
  }
}
</script>
