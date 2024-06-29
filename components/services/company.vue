<template>
  <section class="bg-gradient-to-b from-[#00AEF03D] to-[#8541CC17] pt-24 pb-44">
    <div class="text-center mb-8">
      <!-- Title -->
      <PublicTitle
        heading="Top Clients"
        title="solutions for...	"
        title2="We've built "
        :reverse="true"
      />
      <p class="font-semibold text-lg mt-4">
        Design anything from simple icons to fully featured websites and
        applications.
      </p>
    </div>

    <div
      class="container flex flex-col md:flex-row w-fit mx-auto max-w-7xl gap-5"
    >
      <div class="px-10 py-12 bg-[#8541CC17] rounded-2xl">
        <img
          class="w-44 h-22"
          src="/services/companies/brands.png"
          alt="image"
        />
      </div>
      <div class="px-10 py-12 bg-[#8541CC17] rounded-2xl">
        <img
          class="w-44 h-22"
          src="/services/companies/brands-1.png"
          alt="image"
        />
      </div>
      <div class="px-10 py-12 bg-[#8541CC17] rounded-2xl">
        <img
          class="w-44 h-22"
          src="/services/companies/brands-2.png"
          alt="image"
        />
      </div>
      <div class="px-10 py-10 bg-[#8541CC17] rounded-2xl">
        <img
          class="w-44 h-22"
          src="/services/companies/brands-3.png"
          alt="image"
        />
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style></style>
