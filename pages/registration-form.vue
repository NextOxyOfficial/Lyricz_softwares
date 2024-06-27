<template>
  <UContainer>
    <UCard class="my-10">
      <UForm
        :validate="validate"
        :state="state"
        class="space-y-4"
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

        <UButton type="button" size="md" v-if="step !== 3" @click="next">
          Next
        </UButton>
        <UButton type="submit" size="md" v-if="step === 3"> Submit </UButton>
      </UForm>
    </UCard>
  </UContainer>
</template>

<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "#ui/types";

const step = ref(1);

const state = reactive({
  email: undefined,
  password: undefined,
});

const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.email) errors.push({ path: "email", message: "Required" });
  if (!state.password) errors.push({ path: "password", message: "Required" });
  return errors;
};

async function onSubmit(event: FormSubmitEvent<any>) {
  // Do something with data
  console.log(event.data);
}

function next() {
  step.value++;
}
</script>

<style scoped></style>
