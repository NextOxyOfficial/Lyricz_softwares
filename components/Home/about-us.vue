<template>
  <section class="w-full h-[1100px] md:h-[800px] relative">
    <UContainer>
      <div class="relative z-10">
        <div
          class="flex flex-col-reverse md:flex-row mb-12 md:mb-72 mt-12 md:mt-32 absolute z-40"
        >
          <div class="md:w-1/2 mt-14">
            <div class="relative">
              <img
                class="rounded-2xl"
                src="/home/about-us-img/about-image.jpg"
                alt="image"
              />
              <img
                class="absolute rounded-2xl hidden md:block right-48 -bottom-20 md:right-24 md:-bottom-24"
                src="/home/about-us-img/about-image2.jpg"
                alt="image"
              />
            </div>
          </div>

          <div class="md:w-1/2">
            <CommonHomeTitle
              alignment="md:!text-left "
              preTitle="ABOUT US"
              title="Comprehensive Software Development Company"
            />
            <p class="text-[#858585]">
              A software development company that offers a wide range of
              services including website creation, content management systems
              (CMS), search engine optimization (SEO) marketing, domain
              services, and more. We are dedicated to delivering innovative and
              comprehensive solutions to help businesses establish a strong
              online presence and drive their digital transformation. With a
              team of skilled developers and marketing specialists, our company
              ensures to deliver top-notch quality and results-driven services
              that meet the specific needs of their clients.
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

        <!-- Parallax Scenes 1 -->
        <CommonParallaxScene
          class="hidden md:block absolute md:top-36 md:left-72"
        >
          <div data-depth="0.1" class="-z-20">
            <NuxtImg src="/home/about-us-img/shape-39.png" alt="Image" />
          </div>
          <div data-depth="0.4" class="">
            <NuxtImg src="/home/about-us-img/shape1.png" alt="Image" />
          </div>
        </CommonParallaxScene>

        <!-- Parallax Scenes 2 -->
        <CommonParallaxScene
          class="hidden md:block absolute top-[400px] md:-left-4"
        >
          <div data-depth="0.1">
            <NuxtImg src="/home/about-us-img/shape-07.png" alt="Image" />
          </div>
        </CommonParallaxScene>

        <!-- Parallax Scenes 3 -->
        <CommonParallaxScene
          class="hidden md:block absolute top-[400px] md:left-[250px] border-2 rounded-full size-[250px]"
        >
          <div data-depth="0.1" class="bg-gray-200"></div>
        </CommonParallaxScene>
      </div>
    </UContainer>

    <!-- Parallax Scenes Animate Spin -->
    <CommonParallaxScene
      class="hidden md:block absolute top-8 left-8 md:left-8 animate-spin-slow"
    >
      <div data-depth="0.1">
        <NuxtImg src="/home/about-us-img/shape1.png" alt="Image" />
      </div>
    </CommonParallaxScene>
  </section>
</template>

<script setup></script>

<style></style>
