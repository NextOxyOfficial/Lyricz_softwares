<template>
  <UContainer>
    <UCard class="my-10">
      <ol
        class="flex justify-center items-center w-full text-xs text-gray-900 font-medium sm:text-base"
      >
        <li
          class="flex w-28 relative text-indigo-600 after:content-[''] after:w-full after:h-0.5 after:inline-block after:absolute lg:after:top-5 after:top-3 after:left-4"
          :class="step >= 2 ? 'after:bg-indigo-600' : 'after:bg-gray-200'"
        >
          <div class="block whitespace-nowrap z-10">
            <span
              class="w-6 h-6 bg-gray-50 border-2 rounded-full flex justify-center items-center mx-auto mb-3 text-sm lg:w-10 lg:h-10"
              :class="
                step === 1
                  ? 'border-indigo-600 text-indigo-600'
                  : step >= 2 && 'bg-indigo-600 text-white'
              "
              >1</span
            >
            Step 1
          </div>
        </li>
        <li
          class="flex w-28 relative text-gray-900 after:content-[''] after:w-full after:h-0.5 after:inline-block after:absolute lg:after:top-5 after:top-3 after:left-4"
          :class="step >= 3 ? 'after:bg-indigo-600' : 'after:bg-gray-200'"
        >
          <div class="block whitespace-nowrap z-10">
            <span
              class="w-6 h-6 bg-gray-50 border-2 rounded-full flex justify-center items-center mx-auto mb-3 text-sm lg:w-10 lg:h-10"
              :class="
                step === 2
                  ? 'border-indigo-600 text-indigo-600'
                  : step >= 3 && 'bg-indigo-600 text-white'
              "
              >2</span
            >
            Step 2
          </div>
        </li>
        <li class="flex w-28 relative text-gray-900">
          <div class="block whitespace-nowrap z-10">
            <span
              class="w-6 h-6 bg-gray-50 border-2 border-gray-200 rounded-full flex justify-center items-center mx-auto mb-3 text-sm lg:w-10 lg:h-10"
              :class="
                step === 3
                  ? ' border-indigo-600 text-indigo-600'
                  : step >= 3
                  ? 'bg-indigo-600 text-white'
                  : 'border-gray-200'
              "
              >3</span
            >
            Step 3
          </div>
        </li>
      </ol>
      <UForm
        :validate="validate"
        :state="state"
        class="space-y-4 max-w-xl mx-auto border rounded-lg p-5"
        @submit="onSubmit"
      >
        <div v-if="step === 1">
          <UFormGroup label="Name" name="name">
            <UInput v-model="state.name" />
          </UFormGroup>
          <UFormGroup label="Police Station" name="ps">
            <UInput v-model="state.ps" />
          </UFormGroup>
          <UFormGroup label="District" name="district">
            <UInput v-model="state.district" />
          </UFormGroup>
          <UFormGroup label="Zip" name="zip">
            <UInput v-model="state.zip" />
          </UFormGroup>
        </div>

        <div v-if="step === 2">
          <UFormGroup label="Phone Number" name="phone">
            <UInput v-model="state.phone" />
          </UFormGroup>
          <UFormGroup label="Email" name="email">
            <UInput v-model="state.email" />
          </UFormGroup>

          <UFormGroup label="Password" name="password">
            <UInput v-model="state.password" type="password" />
          </UFormGroup>
        </div>

        <div v-if="step === 3">
          <UFormGroup label="Using Device" name="phone">
            <UCheckbox label="iPhone" />
            <UCheckbox label="Android" />
            <UCheckbox label="Laptop" />
            <UCheckbox label="Desktop" />
          </UFormGroup>
          <UFormGroup label="Leave a comment" name="comment">
            <UTextarea name="Comment" />
          </UFormGroup>
        </div>

        <div class="flex gap-4 justify-between">
          <UButton type="button" size="md" :disabled="step === 1" @click="prev">
            Previous
          </UButton>
          <UButton type="button" size="md" v-if="step !== 3" @click="next">
            Next
          </UButton>
          <UButton type="submit" size="md" v-if="step === 3"> Submit </UButton>
        </div>
      </UForm>
    </UCard>
  </UContainer>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "affiliate",
});

const step = ref(1);

const state = reactive({
  email: undefined,
  password: undefined,
  name: undefined,
  ps: undefined,
  district: undefined,
  zip: undefined,
  phone: undefined,
});
const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.email) errors.push({ path: "email", message: "Required" });
  if (!state.password) errors.push({ path: "password", message: "Required" });
  if (!state.name) errors.push({ path: "name", message: "Required" });
  if (!state.ps) errors.push({ path: "ps", message: "Required" });
  if (!state.district) errors.push({ path: "district", message: "Required" });
  if (!state.zip) errors.push({ path: "zip", message: "Required" });
  if (!state.phone) errors.push({ path: "phone", message: "Required" });
  return errors;
};

async function onSubmit(event: FormSubmitEvent<any>) {
  // Do something with data
  console.log(event.data);
}

function next() {
  step.value++;
}
function prev() {
  if (step.value == 1) {
    return;
  }
  step.value--;
}
</script>

<style scoped></style>
