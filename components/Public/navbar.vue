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

const items = [
  {
    label: "Getting Started",
    icon: "i-heroicons-information-circle",
    defaultOpen: true,
    slot: "getting-started",
  },
  {
    label: "Installation",
    icon: "i-heroicons-arrow-down-tray",
    defaultOpen: true,
    slot: "installation",
  },
  {
    label: "Theming",
    icon: "i-heroicons-eye-dropper",
    defaultOpen: true,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.",
  },
  {
    label: "Layouts",
    icon: "i-heroicons-rectangle-group",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.",
  },
  {
    label: "Components",
    icon: "i-heroicons-square-3-stack-3d",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.",
  },
  {
    label: "Utilities",
    icon: "i-heroicons-wrench-screwdriver",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.",
  },
];
</script>

<template>
  <section
    :class="scrollPosition > 250 ? 'sticky top-0 z-20' : ''"
    class="bg-gray-100 py-2 md:py-4 transition-all duration-1000 ease-in-out"
  >
    <UContainer>
      <div class="flex items-center w-full justify-between md:px-8 lg:px-0">
        <NuxtLink to="/">
          <NuxtImg src="/logo/white-logo.png" alt="Logo" class="h-12 md:h-16" />
        </NuxtLink>
        <ul class="hidden md:flex gap-10 text-xl text-gray-700 font-medium">
          <NuxtLink class="hover:text-[#406aec] font-bold" to="/"
            >Home</NuxtLink
          >
          <NuxtLink class="hover:text-[#406aec] font-bold" to="/#aboutus"
            >About Us</NuxtLink
          >
          <NuxtLink class="hover:text-[#406aec] font-bold" to="/services"
            ><UPopover mode="hover" :popper="{ arrow: true }">
              <NuxtLink to="/services" class="flex items-center"
                >Services
                <UIcon name="i-heroicons-chevron-down-20-solid" size="xl"
              /></NuxtLink>

              <template #panel>
                <div class="w-[80vw] px-12 py-8">
                  <ul
                    class="flex justify-between text-gray-700 text-base font-light"
                  >
                    <li>
                      <p class="text-xl font-bold mb-2 border-b pb-2">Design</p>
                      <p>UI Design</p>
                      <p>UX Design</p>
                      <p>Application Design</p>
                      <p>Graphic Design</p>
                      <p>Logo Design</p>
                      <p>Branding</p>
                      <p>Web Design</p>
                      <p>Motion Graphics</p>
                      <p>Illustration</p>
                    </li>
                    <li>
                      <p class="text-xl font-bold mb-2 border-b pb-2">
                        Development
                      </p>
                      <p>Web Development</p>
                      <p>Software Development</p>
                      <p>App Development</p>
                      <p>Front-end Development</p>
                      <p>Back-end Development</p>
                      <p>Full-stack Development</p>
                      <p>E-commerce Development</p>
                      <p>CMS Development</p>
                      <p>API Integration</p>
                    </li>
                    <li>
                      <p class="text-xl font-bold mb-2 border-b pb-2">
                        Hosting Domain
                      </p>
                      <p>Shared Hosting</p>
                      <p>VPS Hosting</p>
                      <p>Dedicated Hosting</p>
                      <p>Cloud Hosting</p>
                      <p>Managed Hosting</p>
                      <p>Domain Registration</p>
                      <p>Domain Transfer</p>
                      <p>SSL Certificates</p>
                      <p>Email Hosting</p>
                    </li>
                    <li>
                      <p class="text-xl font-bold mb-2 border-b pb-2">
                        Digital Marketing
                      </p>
                      <p>Social Media Marketing</p>
                      <p>Search Engine Optimization (SEO)</p>
                      <p>Pay-Per-Click Advertising (PPC)</p>
                      <p>Content Marketing</p>
                      <p>Email Marketing</p>
                      <p>Influencer Marketing</p>
                      <p>Affiliate Marketing</p>
                      <p>Video Marketing</p>
                      <p>Online Reputation Management</p>
                    </li>
                    <li>
                      <p class="text-xl font-bold mb-2 border-b pb-2">
                        Our Products
                      </p>
                      <p>NextOxy</p>
                      <p>Oxy Manager</p>
                      <p>Lyricz Motors</p>
                      <p>Lyricz Import Export</p>
                    </li>
                  </ul>
                </div>
              </template>
            </UPopover>
          </NuxtLink>

          <NuxtLink class="hover:text-[#406aec] font-bold" to="/#faq"
            >Faqs</NuxtLink
          >
          <NuxtLink class="hover:text-[#406aec] font-bold" to="/contact"
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
      <USlideover class="overflow-y-auto" v-model="isOpen" prevent-close>
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

          <ul
            class="flex gap-6 flex-col items-center text-xl text-gray-700 font-medium"
          >
            <NuxtLink
              @click="isOpen = false"
              class="hover:text-[#406aec] font-bold"
              to="/"
              >Home</NuxtLink
            >
            <NuxtLink
              @click="isOpen = false"
              class="hover:text-[#406aec] font-bold"
              to="/#aboutus"
              >About Us</NuxtLink
            >

            <NuxtLink
              @click="isOpen = false"
              class="hover:text-[#406aec] font-bold"
              to="/services"
              >Our Services</NuxtLink
            >

            <NuxtLink
              @click="isOpen = false"
              class="hover:text-[#406aec] font-bold"
              to="/#faq"
              >Faqs</NuxtLink
            >
            <NuxtLink
              @click="isOpen = false"
              class="hover:text-[#406aec] font-bold"
              to="/contact"
              >Contact</NuxtLink
            >
          </ul>
        </UCard>
      </USlideover>
    </UContainer>
  </section>
</template>
