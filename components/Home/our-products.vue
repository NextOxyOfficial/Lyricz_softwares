<script lang="" setup>
const products = [
  { id: "1", img: "/our-products/project-banner3.jpg", title: "OxyManager" },
  { id: "2", img: "/our-products/project-banner-1.jpg", title: "OxyManager" },
  { id: "3", img: "/our-products/project-banner2.jpg", title: "OxyManager" },
];
</script>

<template>
  <section class="bg-[#f9f6f2] py-20">
    <UContainer>
      <CommonSectionTitle
        alignment="text-center"
        preTitle="OUR PRODUCTS"
        title="See Best of Our Developer"
      />

      <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
        <div v-for="product in products" :key="product.id">
          <div class="relative">
            <img class="rounded-2xl" :src="product.img" alt="Image" />
            <div class="absolute left-10 -bottom-5 bg-white m-10">
              <h1>{{ product.title }}</h1>
              <p>
                OxyManager is a Business all in one Management Tool A complete
                business management tool - which will make your life easier
                www.oxymanager.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<style></style>
