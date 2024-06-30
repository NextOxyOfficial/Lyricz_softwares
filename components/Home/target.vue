<script lang="" setup></script>

<template>
  <UContainer>
    <section class="flex flex-col md:flex-row px-4 py-12 relative md:mb-60">
      <div class="md:w-1/2">
        <NuxtImg src="/home/target/target.jpg" class="rounded-lg w-full" />
      </div>
      <div
        class="pt-4 md:p-12 md:rounded-lg shadow-lg md:w-1/2 md:absolute md:bg-white right-20 top-60"
      >
        <CommonHomeTitle
          alignment="text-center"
          preTitle="Target"
          title="Solution For Businesses of All Industries"
        />

        <div class="space-y-4">
          <div class="flex gap-4">
            <div
              class="bg-red-100 flex items-center justify-center rounded-full h-[75px] px-2"
            >
              <UIcon
                name="ion:ios-stopwatch-outline"
                dynamic
                class="text-6xl"
              />
            </div>
            <div>
              <p class="text-2xl">CMS Website Provider</p>
              <p class="text-gray-700">
                All-inclusive web based platforms to set up their company.
              </p>
            </div>
          </div>
          <div class="flex gap-4">
            <div
              class="bg-red-100 flex items-center justify-center rounded-full h-[75px] px-2"
            >
              <UIcon
                name="ion:ios-stopwatch-outline"
                dynamic
                class="text-6xl"
              />
            </div>
            <div>
              <p class="text-2xl">CMS Website Provider</p>
              <p class="text-gray-700">
                All-inclusive web based platforms to set up their company.
              </p>
            </div>
          </div>
          <div class="flex gap-4">
            <div
              class="bg-red-100 flex items-center justify-center rounded-full h-[75px] px-2"
            >
              <UIcon
                name="ion:ios-stopwatch-outline"
                dynamic
                class="text-6xl"
              />
            </div>
            <div>
              <p class="text-2xl">CMS Website Provider</p>
              <p class="text-gray-700">
                All-inclusive web based platforms to set up their company.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </UContainer>
</template>
