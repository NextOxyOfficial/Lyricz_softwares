<script lang="" setup></script>

<template>
  <section class="py-14 bg-[#111212] px-4">
    <UContainer>
      <div
        class="grid grid-cols-1 gap-6 border-b border-gray-800 pb-16 md:grid-cols-4 bg"
      >
        <!-- Description -->
        <div>
          <NuxtImg src="/logo/dark-logo.png" class="w-36 pb-4" />
          <p class="text-gray-300 font-sans">
            Lyricz software is a comprehensive website builder, CMS and content
            management system with advanced tecchnology
          </p>
          <ul class="text-gray-300 font-sans py-4 space-y-2">
            <li>
              <span>Add:</span> H116 Office Building 1st Floor, Sewria
              Kushtia-7001 Bangladesh
            </li>
            <li>
              <span>Call:</span
              ><a href="tel:+8801972272835"> +88 019 7227 2835</a>
            </li>
            <li>
              <span>Email:</span
              ><a href="mailto:contact@lyriczsoftwares.com" target="_blank">
                contact@lyriczsoftwares.com</a
              >
            </li>
          </ul>
        </div>
        <!-- Online Platform -->
        <div>
          <p class="text-white font-semibold text-2xl mb-4">Online Platform</p>
          <ul class="text-gray-300 space-y-2">
            <li><NuxtLink to="#">About Us</NuxtLink></li>
            <li><NuxtLink to="#">Our Services</NuxtLink></li>
            <li>
              <a target="_blank" href="https://www.oxymanager.com/login"
                >Business Management</a
              >
            </li>
            <li><a target="_blank" href="https://nextoxy.com/">NextOxy</a></li>
          </ul>
        </div>
        <!-- Links -->
        <div>
          <p class="text-white font-semibold text-2xl mb-4">Links</p>
          <ul class="text-gray-300 space-y-2">
            <li><NuxtLink to="#">FAQ's</NuxtLink></li>
            <li><NuxtLink to="#">Privacy Policy</NuxtLink></li>
            <li>
              <NuxtLink to="#">Terms &amp; Condition</NuxtLink>
            </li>
            <li><NuxtLink to="#">Contact Us</NuxtLink></li>
          </ul>
        </div>
        <!-- Contacts -->
        <div>
          <p class="text-white font-semibold text-xl">Contacts</p>
          <ul class="space-y-2 text-gray-300 mt-4">
            <li>
              Enter your email address to register to our newsletter
              subscription
            </li>
            <div class="space-y-2 md:flex md:items-center gap-4 md:space-y-0">
              <li>
                <input
                  class="w-full py-2 rounded-lg px-2"
                  placeholder="enter your email....."
                  type="email"
                />
              </li>
              <li
                class="bg-[#ee4a62] text-white font-semibold text-md text-center py-2 rounded-lg hover:bg-[#f74661] md:w-1/2"
              >
                Subscribe
                <UIcon name="material-symbols:arrow-right-alt" dynamic />
              </li>
            </div>
          </ul>
        </div>
      </div>

      <p class="text-gray-400 text-center mt-4">
        Copyright © {{ new Date().getFullYear() }}
        <nuxt-link to="/" class="text-blue-400">Lyricz Softwares</nuxt-link>
        All Rights Reserved
      </p>
    </UContainer>
  </section>
</template>
