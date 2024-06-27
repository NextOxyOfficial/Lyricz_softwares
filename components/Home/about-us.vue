<template>
  <UContainer>
    <div
      class="flex flex-col-reverse md:flex-row mb-12 md:mb-72 mt-12 md:mt-32"
    >
      <div class="md:w-1/2 mt-14">
        <div class="relative">
          <img
            class="rounded-2xl"
            src="/about-us-img/about-image.jpg"
            alt="image"
          />
          <img
            class="absolute rounded-2xl hidden md:block right-48 -bottom-20 md:right-24 md:-bottom-24"
            src="/about-us-img/about-image2.jpg"
            alt="image"
          />
        </div>
      </div>

      <div class="md:w-1/2">
        <CommonSectionTitle
          alignment="md:!text-left "
          preTitle="ABOUT US"
          title="Comprehensive Software Development Company"
        />
        <p class="text-[#858585]">
          A software development company that offers a wide range of services
          including website creation, content management systems (CMS), search
          engine optimization (SEO) marketing, domain services, and more. We are
          dedicated to delivering innovative and comprehensive solutions to help
          businesses establish a strong online presence and drive their digital
          transformation. With a team of skilled developers and marketing
          specialists, our company ensures to deliver top-notch quality and
          results-driven services that meet the specific needs of their clients.
        </p>
        <div class="flex mt-10">
          <UIcon
            class="w-8 h-8 bg-[#ee4a62]"
            name="i-heroicons-check-16-solid"
          />
          <p class="mt-1 text-[#181818]">
            Fully managed complete solutions for your business
          </p>
        </div>

        <div class="flex">
          <UIcon
            class="w-8 h-8 bg-[#ee4a62]"
            name="i-heroicons-check-16-solid"
          />
          <p class="mt-1">Web software &amp; development</p>
        </div>
      </div>
    </div>
  </UContainer>
</template>

<script setup></script>

<style></style>
