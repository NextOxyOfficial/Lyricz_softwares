import type { UContainer } from "#build/components";

<script setup lang="">
const items = [
  "https://picsum.photos/1920/1080?random=1",
  "https://picsum.photos/1920/1080?random=2",
  "https://picsum.photos/1920/1080?random=3",
  "https://picsum.photos/1920/1080?random=4",
  "https://picsum.photos/1920/1080?random=5",
  "https://picsum.photos/1920/1080?random=6",
];

const carouselRef = ref();

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return;

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0);
    }

    carouselRef.value.next();
  }, 3000);
});
</script>

<template>
  <section class="mb-20 md:mb-28">
    <UContainer>
      <section class="md:flex">
        <div
          class="md:w-1/w md:flex-1 md:flex flex-col md:items-center md:justify-center"
        >
          <CommonSectionTitle
            preTitle="Testimonials"
            title="What Our Clients Say About Us"
            alignment="text-center"
          />

          <p class="text-gray-400 text-sm text-center px-2">
            We offer online business and website solutions that will help you
            grow your business. See what our client says about us
          </p>

          <CommonButton
            icon="material-symbols:arrow-right-alt-rounded"
            label="Learn More"
            class="block w-fit mx-auto mt-4"
          />
        </div>

        <div class="p-4 mt-8 flex-1 md:w-1/2">
          <UCarousel
            ref="carouselRef"
            v-slot="{ item }"
            :items="items"
            :ui="{
              wrapper: '!overflow-visible rounded-lg',
              container:
                'relative w-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth',
              item: 'basis-full',
              indicators: {
                wrapper:
                  'absolute flex items-center justify-center gap-3 -bottom-8 inset-x-0',
              },
            }"
            class="rounded-lg overflow-hidden"
            indicators
          >
            <div
              class="p-4 flex flex-col justify-center items-center gap-4 bg-gray-100 rounded-lg"
            >
              <img
                :src="item"
                class="rounded-full size-16 block mx-auto"
                draggable="false"
              />
              <p class="text-center text-gray-700">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Provident suscipit optio obcaecati expedita? Repellat odit
                asperiores obcaecati quia perspiciatis earum!
              </p>
              <div>
                <UIcon
                  class="text-yellow-500 text-2xl"
                  name="material-symbols:star"
                  dynamic
                />
                <UIcon
                  class="text-yellow-500 text-2xl"
                  name="material-symbols:star"
                  dynamic
                />
                <UIcon
                  class="text-yellow-500 text-2xl"
                  name="material-symbols:star"
                  dynamic
                />
                <UIcon
                  class="text-yellow-500 text-2xl"
                  name="material-symbols:star"
                  dynamic
                />
                <UIcon
                  class="text-yellow-500 text-2xl"
                  name="material-symbols:star"
                  dynamic
                />
              </div>
              <p class="font-medium text-2xl text-gray-600">Wilium Page</p>
              <p>Digital Marketer</p>
            </div>
          </UCarousel>
        </div>
      </section>
    </UContainer>
  </section>
</template>
