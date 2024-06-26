<script setup lang="">
const open = ref(false);
const scrollPosition = ref(0);

console.log(open.value);

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
    class="bg-gray-100 md:py-4 transition-all duration-1000 ease-in-out"
  >
    <UContainer>
      <div class="flex items-center w-full justify-between">
        <NuxtLink to="/">
          <NuxtImg src="/logo/white-logo.png" alt="Logo" class="h-12 md:h-16" />
        </NuxtLink>
        <ul class="hidden md:flex gap-10 text-xl text-gray-700 font-medium">
          <NuxtLink class="hover:text-blue-400 font-bold" to="/">Home</NuxtLink>
          <NuxtLink class="hover:text-blue-400 font-bold" to="/"
            >About Us</NuxtLink
          >
          <NuxtLink class="hover:text-blue-400 font-bold" to="/"
            >Our Services</NuxtLink
          >
          <NuxtLink class="hover:text-blue-400 font-bold" to="/">Faqs</NuxtLink>
          <NuxtLink class="hover:text-blue-400 font-bold" to="/"
            >Contact</NuxtLink
          >
        </ul>
        <div
          @click="open = !open"
          class="md:hidden flex flex-col justify-between gap-[6px] mr-2 transition-all duration-1000 ease-in-out"
        >
          <div class="bg-gray-800 h-1 w-10"></div>
          <div class="bg-gray-800 h-1 w-10" :class="open ? 'hidden' : ''"></div>
          <div
            class="bg-gray-800 h-1 w-10"
            :class="open ? 'rotate-45' : ''"
          ></div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
