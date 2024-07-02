<template>
  <UContainer>
    <section class="md:flex justify-center items-center">
      <div class="hidden md:block w-1/2">
        <NuxtImg
          src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=740&t=st=1719831715~exp=1719832315~hmac=47bbb2581c7204d04ab756fb7960c2079477e457de74a06c18309b19b7e1d7ec"
          alt="Image"
        />
      </div>
      <div class="my-10 md:w-1/2">
        <p class="text-center my-4 text-4xl font-bold">SignUp From</p>
        <!-- Step 1: Steps -->
        <ol
          class="flex justify-center items-center w-full text-xs text-gray-900 font-medium sm:text-base gap-8"
        >
          <li
            class="flex relative text-indigo-600 after:content-[''] after:w-full after:h-0.5 after:inline-block after:absolute lg:after:top-5 after:top-3 after:left-4"
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
            </div>
          </li>
          <li
            class="flex relative text-gray-900 after:content-[''] after:w-full after:h-0.5 after:inline-block after:absolute lg:after:top-5 after:top-3 after:left-4"
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
            </div>
          </li>
          <li class="flex relative text-gray-900">
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
            </div>
          </li>
        </ol>
        <!-- Login Form -->
        <UForm
          :validate="validate"
          :state="state"
          class="space-y-4 max-w-xl mx-auto rounded-lg p-5"
          @submit="onSubmit"
        >
          <transition-scale
            :axis="{ enter: 'x' }"
            :appear="false"
            :duration="{ enter: 500, leave: 0 }"
          >
            <div v-if="step === 1">
              <UFormGroup label="Name" name="name">
                <UInput v-model="state.name" size="md" />
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
          </transition-scale>

          <transition-scale
            :axis="{ enter: 'x' }"
            :appear="false"
            :duration="{ enter: 500, leave: 0 }"
          >
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
          </transition-scale>

          <transition-scale
            :axis="{ enter: 'x' }"
            :appear="false"
            :duration="{ enter: 500, leave: 0 }"
          >
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
          </transition-scale>

          <div class="flex gap-4 justify-between">
            <UButton
              type="button"
              size="md"
              :disabled="step === 1"
              @click="prev"
            >
              Previous
            </UButton>
            <UButton type="button" size="md" v-if="step !== 3" @click="next">
              Next
            </UButton>
            <UButton type="submit" size="md" v-if="step === 3">
              Submit
            </UButton>
          </div>
        </UForm>
      </div>
    </section>
  </UContainer>
  <div class="w-full -mt-40">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#0099ff"
        fill-opacity="1"
        d="M0,320L40,277.3C80,235,160,149,240,149.3C320,149,400,235,480,250.7C560,267,640,213,720,208C800,203,880,245,960,240C1040,235,1120,181,1200,176C1280,171,1360,213,1400,234.7L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
      ></path>
    </svg>
  </div>
</template>

<script setup lang="ts">
import {
  TransitionExpand,
  TransitionScale,
  TransitionSlide,
} from "@morev/vue-transitions";

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
