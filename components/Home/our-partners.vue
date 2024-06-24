<script setup></script>

<template>
  <CommonSectionTitle
    preTitle="our partners"
    title="See Our Partners"
    alignment="text-center"
  />
  <UContainer>
    <section
      class="grid grid-cols-2 gap-4 justify-center items-center pb-10 md:grid-cols-4"
    >
      <nuxt-link to="https://nextoxy.com"
        ><nuxtImg src="/brand/brand1.png" class="w-32 mx-auto"
      /></nuxt-link>

      <nuxt-link to="https://lyriczmotors.com"
        ><nuxtImg src="/brand/brand2.png" class="w-32 mx-auto"
      /></nuxt-link>

      <nuxt-link to="https://oxyous.com"
        ><nuxtImg src="/brand/brand3.png" class="w-32 mx-auto"
      /></nuxt-link>

      <nuxt-link to="https://uscodes.com"
        ><nuxtImg src="/brand/brand4.png" class="w-32 mx-auto"
      /></nuxt-link>
    </section>
  </UContainer>
</template>
