<script setup></script>

<template>
  <div
    class="bg-[url('/banner/banner.jpg')] bg-no-repeat container mx-auto relative"
  >
    <!-- <div class="absolute w-full h-full bg-black opacity-50 bottom -z-10"></div> -->
    <UContainer>
      <div
        class="flex flex-col md:flex-row items-center bg-cover md:h-[700px] bg-center"
      >
        <div
          class="md:w-[50%] text-center md:text-left py-12 md:pt-0 px-4 space-y-4 md:space-y-8"
        >
          <h1 class="text-[#f8b81f] text-xl uppercase font-bold">
            Welcome To lyricz Softwares
          </h1>
          <h1 class="text-white font-bold text-4xl md:text-5xl">
            A mother software company? We don't just code, we care.
          </h1>
          <p class="text-white font-medium text-lg px-4 md:px-0">
            Our company provides software for entrepreneurs and startup to help
            with business and grow-plan duties.
          </p>
          <CommonButton
            label="Learn More"
            icon="material-symbols:arrow-right-alt-rounded"
          />
        </div>
      </div>
    </UContainer>

    <CommonParallaxScene class="absolute top-8 left-40 md:left-80">
      <NuxtImg src="/banner/shape2.png" alt="Image" />
    </CommonParallaxScene>

    <CommonParallaxScene class="absolute top-20 md:-left-4">
      <div data-depth="0.1">
        <NuxtImg src="/banner/shape1.png" alt="Image" />
      </div>
    </CommonParallaxScene>
  </div>
</template>
