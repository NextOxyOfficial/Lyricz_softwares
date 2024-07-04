<script setup lang="ts"></script>
<template>
  <div class="bg-[#f2f8ff] px-2 py-12 md:pt-40 md:pb-28 relative">
    <!-- Title -->
    <CommonServiceTitle
      heading="Featured Case Study"
      title="Design startup "
      title2="movement"
      :reverse="false"
    />
    <!-- Cards -->
    <div id="features" class="mx-auto max-w-7xl relative">
      <ul
        class="mt-8 md:mt-16 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-4"
      >
        <li class="rounded-xl bg-white px-6 py-8 shadow-sm md:text-left z-50">
          <!-- Card 1 Content -->
          <img
            src="/public/icon/icon-1.png"
            alt=""
            class="h-10 w-10 mx-auto md:ml-0"
          />
          <h3 class="my-3 font-display font-medium">Web Development</h3>
          <p class="mt-1.5 text-sm md:text-left">
            Crafting impactful websites for your online success: expert web
            development tailored to elevate your digital presence.
          </p>
        </li>
        <li class="rounded-xl bg-white px-6 py-8 shadow-sm z-50">
          <!-- Card 2 Content -->
          <img
            src="/public/icon/icon-2.png"
            alt=""
            class="h-10 w-10 mx-auto md:ml-0"
          />
          <h3 class="my-3 font-display font-medium md:text-left">
            UX/UI Design
          </h3>
          <p class="mt-1.5 text-sm text-secondary-500 md:text-left">
            Crafting intuitive interfaces and engaging experiences: our UX/UI
            design service elevates digital interactions for your brand.
          </p>
        </li>
        <li class="rounded-xl bg-white px-6 py-8 shadow-sm z-50">
          <!-- Card 3 Content -->
          <img
            src="/public/icon/icon-3.png"
            alt=""
            class="h-10 w-10 mx-auto md:ml-0"
          />
          <h3 class="my-3 font-display font-medium md:text-left">
            Graphics Design
          </h3>
          <p class="mt-1.5 text-sm text-left">
            We offer advanced customization. You can freely combine options like
            roles, languages, publish, tones, lengths, and formats.
          </p>
        </li>
        <li class="rounded-xl bg-white px-6 py-8 shadow-sm z-50">
          <!-- Card 4 Content -->
          <a href="/pricing" class="group">
            <img
              src="/icon/icon-4.png "
              alt=""
              class="h-10 w-10 mx-auto md:ml-0"
            />
            <h3 class="my-3 font-display font-medium md:text-left">
              Digital Marketing
            </h3>
            <p class="mt-1.5 text-sm md:text-left">
              We offer a free trial service without login. We provide many
              payment options including pay-as-you-go and subscription.
            </p>
          </a>
        </li>
      </ul>
      <!-- Background Div -->
      <div
        class="hidden md:block absolute z-10 bg-[#DDD9F8] size-[300px] top-0 left-0 rounded-full blur-3xl"
      ></div>
      <div
        class="hidden md:block absolute z-10 bg-[#00AEF03D] size-[450px] right-0 bottom-0 rounded-full blur-3xl"
      ></div>
    </div>
  </div>
</template>
