<script setup></script>

<template>
  <UContainer>
    <section class="py-14 bg-black px-4">
      <div class="grid grid-cols-1 gap-6 border-b border-gray-800 pb-16">
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
              ><a href="mailto:support@lyriczsoftwares.com" target="_blank">
                support@lyriczsoftwares.com</a
              >
            </li>
          </ul>
        </div>
        <!-- Online Platform -->
        <div>
          <p class="text-white font-semibold text-2xl mb-4">Online Platform</p>
          <ul class="text-gray-300 space-y-2">
            <li><n-link to="about-us-two">About Us</n-link></li>
            <li><n-link to="/services">Our Services</n-link></li>
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
            <li><n-link to="/faq">FAQ's</n-link></li>
            <li><n-link to="/privacy-policy">Privacy Policy</n-link></li>
            <li>
              <n-link to="/terms-condition">Terms &amp; Condition</n-link>
            </li>
            <li><n-link to="/contact-us">Contact Us</n-link></li>
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
            <li>
              <input
                class="w-full py-2 rounded-lg px-2"
                placeholder="enter your email....."
                type="email"
              />
            </li>
            <li
              class="bg-[#ee4a62] text-white font-semibold text-md text-center py-2 rounded-lg hover:bg-[#f74661]"
            >
              Subscribe
              <UIcon name="material-symbols:arrow-right-alt" dynamic />
            </li>
          </ul>
        </div>
      </div>

      <p class="text-gray-400 text-center mt-4">
        Copyright © {{ new Date().getFullYear() }}
        <nuxt-link to="/" class="text-blue-400">Lyricz Softwares</nuxt-link>
        All Rights Reserved
      </p>
    </section>
  </UContainer>
</template>
