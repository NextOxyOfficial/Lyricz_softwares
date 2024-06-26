<script setup lang="">
const scrollPosition = ref(0);

// Function to log scroll position
const logScrollPosition = () => {
  console.log(window.scrollY);
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
    class="bg-gray-100 py-4 transition-all duration-1000 ease-in-out"
  >
    <UContainer>
      <div class="flex items-center w-full justify-between">
        <NuxtImg src="/logo/white-logo.png" alt="Logo" class="h-12 md:h-16" />
        <ul class="hidden md:flex gap-10 text-xl text-gray-700 font-medium">
          <li>Home</li>
          <li>About Us</li>
          <li>Our Services</li>
          <li>Faqs</li>
          <li>Contact</li>
        </ul>
      </div>
    </UContainer>
  </section>
</template>
