<script lang="" setup>
const products = [
  {
    id: "1",
    img: "/our-products/project-banner3.jpg",
    name: "NextOxy",
    title: "Build your Website with NextOxy",
    description:
      "Nextoxy brings your business online in just 10 minutes without hassle.",
    website: "www.nextoxy.com",
  },
  {
    id: "2",
    img: "/our-products/project-banner-1.jpg",
    name: "NextOxy",
    title: "Build your Website with NextOxy",
    description:
      "NextOxy brings your business online in just 10 minutes without hassle.",
    website: "www.nextoxy.com",
  },
  {
    id: "3",
    img: "/our-products/project-banner2.jpg",
    name: "NextOxy",
    title: "Build your Website with NextOxy",
    description:
      "NextOxy brings your business online in just 10 minutes without hassle.",
    website: "www.nextoxy.com",
  },
];
</script>

<template>
  <section class="bg-[#f9f6f2] py-8 md:pt-20 md:pb-48">
    <UContainer>
      <CommonHomeTitle
        alignment="text-center"
        preTitle="OUR PRODUCTS"
        title="See Best of Our Developer"
      />

      <div class="flex flex-wrap gap-5 mb-10">
        <div v-for="product in products" :key="product.id">
          <div class="relative flex flex-col justify-center hover:opacity-50">
            <img class="rounded-2xl mx-2" :src="product.img" alt="Image" />
            <div
              class="md:absolute -bottom-5 bg-white -mt-10 mb-12 mx-4 md:mx-8 p-8 rounded-2xl shadow-lg space-y-4 md:-bottom-52"
            >
              <h1 class="uppercase text-gray-700 text-xl font-medium">
                {{ product.name }}
              </h1>
              <h1 class="text-2xl font-semibold">{{ product.title }}</h1>
              <p>
                {{ product.description }}
              </p>
              <p>{{ product.website }}</p>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<style></style>
