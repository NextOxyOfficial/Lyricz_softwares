<template>
  <section id="quote" class="bg-[#8541CC] py-10 md:rounded-t-[100px] -mt-20">
    <h4 class="text-center text-white">Let's Work Together</h4>
    <h1 class="text-center text-white text-4xl font-bold">
      Need a successful project?
    </h1>
    <div class="flex flex-col md:flex-row justify-evenly container mx-auto">
      <div class="mt-10">
        <img src="/services/form/form-img.png" alt="image" />
      </div>

      <div class="rounded-3xl mt-10 px-8">
        <form
          class="flex flex-col rounded shadow-lg p-8 md:p-12 bg-white"
          action=""
        >
          <h1 class="text-2xl font-bold mb-6 text-center">
            Get a Keystrock Quote Now
          </h1>
          <label class="font-semibold text-xs" for="usernameField">Name</label>
          <input
            class="flex items-center h-12 px-4 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
            type="text"
          />
          <label class="font-semibold text-xs mt-3" for="emailField"
            >Email</label
          >
          <input
            class="flex items-center h-12 px-4 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
            type="text"
          />
          <label class="font-semibold text-xs mt-3" for="passwordField"
            >Password</label
          >
          <input
            class="flex items-center h-12 px-4 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
            type="password"
          />
          <button
            class="flex items-center justify-center h-12 px-6 bg-purple-600 mt-8 rounded font-semibold text-sm text-white hover:bg-purple-700"
          >
            Get Free Quote
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style></style>
