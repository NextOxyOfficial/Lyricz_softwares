<script setup></script>

<template>
  <section class="mt-20">
    <CommonHomeTitle
      preTitle="our partners"
      title="See Our Partners"
      alignment="text-center"
    />

    <UContainer>
      <section
        class="grid grid-cols-2 gap-4 justify-center items-center pb-10 md:grid-cols-4"
      >
        <nuxt-link to="https://nextoxy.com"
          ><NuxtImg
            src="/home/partners/partner1.png"
            alt="Image"
            class="w-32 md:w-40 mx-auto"
        /></nuxt-link>

        <nuxt-link to="https://lyriczmotors.com"
          ><NuxtImg
            src="/home/partners/partner2.png"
            class="w-32 md:w-40 mx-auto"
        /></nuxt-link>

        <nuxt-link to="https://oxyous.com"
          ><NuxtImg
            src="/home/partners/partner3.png"
            class="w-32 md:w-40 mx-auto"
        /></nuxt-link>

        <nuxt-link to="https://uscodes.com"
          ><NuxtImg
            src="/home/partners/partner4.png"
            class="w-32 md:w-40 mx-auto"
        /></nuxt-link>
      </section>
    </UContainer>
  </section>
</template>
