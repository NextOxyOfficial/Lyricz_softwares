<template>
  <section class="py-10 bg-gradient-to-b from-[#00AEF03D] to-[#8541CC17]">
    <h4 class="text-center font-semibold">About us</h4>
    <h1 class="font-bold text-3xl md:text-5xl text-center">
      About
      <span class="border-b-2 border-white">
        Our <span class="text-[#8541CC]">Services</span></span
      >
    </h1>
    <div
      class="flex flex-col md:flex-row items-center mt-6 md:mt-10 max-w-7xl mx-auto space-x-16"
    >
      <div
        class="md:w-1/2 space-y-3 md:space-y-4 text-center md:text-left px-4"
      >
        <h3 class="font-bold text-xl md:text-3xl">
          Welcome to Lyricz Softwares
        </h3>
        <p class="text-black md:text-lg md:font-medium md:!mb-12">
          Where innovation meets creativity! We specialize in a range of
          services tailored to elevate your online presence. Our expert team
          crafts cutting-edge websites, ensuring seamless user experiences
          through top-notch UX/UI design. From captivating graphics that tell
          your brand story to strategic digital marketing campaigns that drive
          engagement and conversions, we’ve got you covered. Whether you’re a
          startup or an established enterprise, we deliver solutions that
          resonate with your audience and propel your business forward in the
          ever-evolving digital landscape. Let’s bring your digital vision to
          life, together!
        </p>
        <NuxtLink to="#quote"
          ><button
            class="bg-[#00B8FF] rounded-lg shadow-xl hover:bg-[#00aef3] px-12 py-3 text-sm md:text-2xl font-bold text-white md:py-5"
          >
            Get A Free Quote
          </button></NuxtLink
        >
      </div>
      <div class="w-1/2 hidden md:block">
        <img src="/services/about-img/flex.png" alt="image" />
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style></style>
