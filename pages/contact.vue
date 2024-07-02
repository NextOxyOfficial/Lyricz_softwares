<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "#ui/types";
import { reactive } from "vue";

const state = reactive({
  email: undefined,
  firstName: undefined,
  lastName: undefined,
  description: undefined,
});

const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.email) errors.push({ path: "email", message: "Required" });
  if (!state.firstName) errors.push({ path: "firstName", message: "Required" });
  if (!state.lastName) errors.push({ path: "lastName", message: "Required" });
  if (!state.description)
    errors.push({ path: "description", message: "Required" });
  return errors;
};

async function onSubmit(event: FormSubmitEvent<any>) {
  // Do something with data
  console.log(event.data);
}
</script>

<template>
  <section class="bg-gray-50 py-12">
    <UContainer>
      <CommonHomeTitle
        preTitle="Contact Info"
        title="Contact Information"
        alignment="text-center"
      />

      <div
        class="flex flex-col md:flex-row justify-center items-stretch gap-12 md:gap-16 mt-8"
      >
        <!-- Information & Social Links -->
        <div
          class="md:w-1/2 rounded-lg bg-gray-100 p-4 mx-2 md:p-8 flex-1 flex flex-col space-y-4"
        >
          <!-- Address -->
          <div class="space-y-4 flex-1">
            <div class="flex flex-col h-full">
              <p class="text-3xl font-semibold">Address</p>
              <p class="mb-3">Riverside 25, San Francisco, California</p>
              <NuxtLink to="/" class="underline">View on Maps</NuxtLink>
              <hr />
            </div>
          </div>

          <!-- Contact Number -->
          <div class="space-y-4 flex-1">
            <div class="flex flex-col h-full">
              <p class="text-3xl font-semibold">Contact Number</p>
              <p class="mb-3">+1 123 456 7890</p>
              <NuxtLink to="/" class="underline">Call Now</NuxtLink>
              <hr />
            </div>
          </div>

          <!-- Email Address -->
          <div class="space-y-4 flex-1">
            <div class="flex flex-col h-full">
              <p class="text-3xl font-semibold">Email</p>
              <p class="mb-3">contact@example.com</p>
              <NuxtLink to="/" class="underline">Send Email</NuxtLink>
              <hr />
            </div>
          </div>

          <!-- Social Media Icons -->
          <div class="space-y-4 flex-1">
            <div class="flex flex-col h-full">
              <p class="text-3xl font-semibold">Social Media</p>
              <p class="mb-3">Follow us on social media</p>
              <NuxtLink to="/" class="underline">Follow</NuxtLink>
              <hr />
            </div>
          </div>
        </div>

        <!-- Form -->
        <div
          class="md:w-1/2 rounded-lg bg-gray-100 md:p-8 flex-1 flex flex-col p-4 mx-2"
        >
          <!-- Form Heading -->
          <div class="pb-8">
            <p class="text-3xl font-semibold">Fill the form below</p>
            <p>We will respond to you within the next 24 hrs</p>
          </div>

          <UForm
            :validate="validate"
            :state="state"
            class="space-y-4 flex-1"
            @submit="onSubmit"
          >
            <!-- First Name And Last Name -->
            <div class="flex flex-col md:flex-row md:justify-between">
              <UFormGroup label="First Name" name="firstName">
                <UInput
                  class="w-full"
                  size="xl"
                  v-model="state.firstName"
                  type="text"
                />
              </UFormGroup>

              <UFormGroup label="Last Name" name="lastName">
                <UInput
                  class="w-full"
                  size="xl"
                  v-model="state.lastName"
                  type="text"
                />
              </UFormGroup>
            </div>

            <!-- Email -->
            <UFormGroup label="Email" name="email">
              <UInput class="w-full" size="xl" v-model="state.email" />
            </UFormGroup>

            <!-- Message -->
            <UFormGroup label="Your Message" name="description">
              <UTextarea
                resize
                color="primary"
                variant="outline"
                placeholder="Search..."
                v-model="state.description"
              />
            </UFormGroup>

            <UButton size="xl" type="submit" block> Submit </UButton>
          </UForm>
        </div>
      </div>
    </UContainer>
  </section>
</template>
