<script setup></script>

<template>
  <div class="mb-20 bg-[url('/banner/banner.jpg')]">
    <UContainer>
      <div
        class="flex flex-col md:flex-row items-center bg-repeat-x bg-cover h-[500px] md:h-[700px] bg-center"
      >
        <div class="md:w-1/2 lg:w-2/3">
          <h1
            class="text-4xl md:text-6xl lg:text-7xl text-white font-bold mb-6"
          >
            Welcome to our <br class="hidden md:block" />
            <span class="text-indigo-500">Awesome</span> Website
          </h1>
          <p class="text-lg md:text-xl lg:text-2xl text-gray-400 mb-8">
            We create beautiful and functional websites for businesses of all
            sizes.
          </p>
          <div class="flex gap-2">
            <a
              href="#"
              class="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-md"
              >Get Started
            </a>
            <a
              href="#"
              class="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-md"
              >Learn More
            </a>
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>
