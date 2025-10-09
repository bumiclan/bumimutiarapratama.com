<template>
  <!-- Footer Start -->
  <footer
    id="footer"
    class="footer bg-dark-footer text-gray-200 dark:text-gray-200"
  >
    <div class="container">
      <div class="grid grid-cols-12">
        <div class="col-span-12">
          <div class="py-[60px] px-0">
            <div class="grid grid-cols-1 gap-[30px] md:grid-cols-12">
              <div class="md:col-span-12 lg:col-span-4">
                <a href="#" class="text-[22px] focus:outline-none">
                  <img src="@/assets/logo-dark.png" alt="" />
                </a>
                <p class="mt-6 text-gray-300">
                  We are engaged in the construction developing such an Office
                  Building, Industry, Warehouse, Residential project.
                </p>
                <!--end icon-->
              </div>
              <!--end col-->

              <div class="md:col-span-4 lg:col-span-4">
                <h5 class="font-semibold tracking-[1px] text-gray-100">
                  Contact
                </h5>
                <ul class="footer-list mt-6 list-none">
                  <li class="mt-[10px]">
                    <a
                      href="#"
                      class="flex items-center space-x-1 text-gray-300 duration-500 ease-in-out hover:text-gray-400"
                    >
                      <OfficeBuildingIcon class="h-6 w-6 text-white" />
                      <span>Office Surabaya</span>
                    </a>
                    <p class="mt-2">
                      Jalan Musi no. 21 RT. 002 RW. 014 Kel. DR. sutomo, Kec.
                      Tegalsari Kota Surabaya
                    </p>
                  </li>
                </ul>
              </div>
              <div class="md:col-span-4 lg:col-span-4">
                <h5 class="font-semibold tracking-[1px] text-gray-100">
                  &nbsp;
                </h5>
                <ul class="footer-list mt-6 list-none">
                  <li class="mt-[10px] space-y-2">
                    <a
                      href="mailto:bumimutiarapratama@gmail.com"
                      class="flex items-center space-x-1 text-gray-300 duration-500 ease-in-out hover:text-gray-400"
                    >
                      <MailIcon class="h-6 w-6 text-white" />
                      <span>bumimutiarapratama@gmail.com</span>
                    </a>
                    <a
                      href="tel:+6282226115758"
                      class="flex items-center space-x-1 text-gray-300 duration-500 ease-in-out hover:text-gray-400"
                    >
                      <PhoneIcon class="h-6 w-6 text-white" />
                      <span>082226115758</span>
                    </a>
                  </li>
                </ul>
              </div>
              <!--end col-->
            </div>
            <!--end grid-->
          </div>
          <!--end col-->
        </div>
      </div>
      <!--end grid-->
    </div>
    <!--end container-->

    <div class="border-t border-slate-800 py-[30px] px-0">
      <div class="container text-center">
        <div class="grid items-center md:grid-cols-2">
          <div class="text-center md:text-left">
            <p class="mb-0">©2022 PT Bumi Mutiara Pratama</p>
          </div>
        </div>
        <!--end grid-->
      </div>
      <!--end container-->
    </div>
  </footer>
  <!--end footer-->
  <!-- Footer End -->
</template>

<script setup>
import { MailIcon } from '@heroicons/vue/outline';
import { PhoneIcon } from '@heroicons/vue/outline';
import { OfficeBuildingIcon } from '@heroicons/vue/outline';
</script>
