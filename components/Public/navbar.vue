<script setup lang="">
const isOpen = ref(false);
const scrollPosition = ref(0);

// Function to log scroll position
const logScrollPosition = () => {
  scrollPosition.value = window.scrollY;
};

// Use onMounted to ensure the script runs after the component is mounted
onMounted(() => {
  // Set the onscroll event handler to log the scroll position
  window.onscroll = logScrollPosition;

  // Initial call to log the scroll position
  logScrollPosition();
});
</script>

<template>
  <section
    :class="scrollPosition > 250 ? 'sticky top-0 z-10' : ''"
    class="bg-gray-100 py-2 md:py-4 transition-all duration-1000 ease-in-out"
  >
    <UContainer>
      <div class="flex items-center w-full justify-between">
        <NuxtLink to="/">
          <NuxtImg src="/logo/white-logo.png" alt="Logo" class="h-12 md:h-16" />
        </NuxtLink>
        <ul class="hidden md:flex gap-10 text-xl text-gray-700 font-medium">
          <NuxtLink class="hover:text-blue-400 font-bold" to="/">Home</NuxtLink>
          <NuxtLink class="hover:text-blue-400 font-bold" to="/about-us"
            >About Us</NuxtLink
          >
          <NuxtLink class="hover:text-blue-400 font-bold" to="/services/"
            >Services</NuxtLink
          >
          <NuxtLink class="hover:text-blue-400 font-bold" to="/">Faqs</NuxtLink>
          <NuxtLink class="hover:text-blue-400 font-bold" to="/"
            >Contact</NuxtLink
          >
        </ul>

        <div
          @click="isOpen = true"
          class="md:hidden flex flex-col justify-between gap-[6px] mr-2 transition-all duration-1000 ease-in-out"
        >
          <UIcon name="ic:baseline-menu" dynamic class="text-4xl" />
        </div>
      </div>

      <!-- Slide Over -->
      <USlideover v-model="isOpen" prevent-close>
        <UCard
          class="flex flex-col flex-1"
          :ui="{
            body: { base: 'flex-1' },
            ring: '',
            divide: 'divide-y divide-gray-100 dark:divide-gray-800',
          }"
        >
          <template #header>
            <div class="flex items-center justify-between">
              <h3
                class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
              >
                <NuxtLink to="/">
                  <NuxtImg
                    src="/logo/white-logo.png"
                    alt="Logo"
                    class="h-12 md:h-16"
                  />
                </NuxtLink>
              </h3>
              <UButton
                color="gray"
                variant="ghost"
                size=""
                icon="i-heroicons-x-mark-20-solid"
                class="-my-1 text-5xl"
                @click="isOpen = false"
              />
            </div>
          </template>

          <Placeholder class="h-full" />
          <ul
            class="flex gap-6 flex-col items-center text-xl text-gray-700 font-medium"
          >
            <NuxtLink class="hover:text-blue-400 font-bold" to="/"
              >Home</NuxtLink
            >
            <NuxtLink class="hover:text-blue-400 font-bold" to="/about-us"
              >About Us</NuxtLink
            >
            <NuxtLink class="hover:text-blue-400 font-bold" to="/"
              >Our Services</NuxtLink
            >
            <NuxtLink class="hover:text-blue-400 font-bold" to="/"
              >Faqs</NuxtLink
            >
            <NuxtLink class="hover:text-blue-400 font-bold" to="/"
              >Contact</NuxtLink
            >
          </ul>
        </UCard>
      </USlideover>
    </UContainer>
  </section>
</template>
