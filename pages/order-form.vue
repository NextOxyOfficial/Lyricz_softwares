<template>
  <UContainer>
    <UCard>
      <h2 class="text-lg md:text-3xl text-center font-semibold mb-5">
        Order Form
      </h2>
      <UForm
        :validate="validate"
        :state="state"
        class="space-y-4 max-w-xl mx-auto border rounded-lg p-5"
        @submit="onSubmit"
      >
        <UFormGroup label="Name" name="name">
          <UInput v-model="state.name" />
        </UFormGroup>
        <UFormGroup label="Phone Number" name="phone">
          <UInput v-model="state.phone" />
        </UFormGroup>
        <UFormGroup label="Email" name="email">
          <UInput v-model="state.email" />
        </UFormGroup>
        <UFormGroup label="Project Description" name="description">
          <UTextarea v-model="state.description" />
        </UFormGroup>
        <UFormGroup label="Estimated Budget" name="budget">
          <UInput v-model="state.budget" />
        </UFormGroup>
        <UFormGroup label="Deadline" name="deadline">
          <UInput v-model="state.deadline" />
        </UFormGroup>
        <UButton type="submit" size="md"> Order </UButton>
      </UForm>
    </UCard>
  </UContainer>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "affiliate",
});

const state = reactive({
  email: undefined,
  description: undefined,
  name: undefined,
  budget: undefined,
  deadline: undefined,
  phone: undefined,
});
const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.email) errors.push({ path: "email", message: "Required" });
  if (!state.description)
    errors.push({ path: "description", message: "Required" });
  if (!state.name) errors.push({ path: "name", message: "Required" });
  if (!state.budget) errors.push({ path: "budget", message: "Required" });
  if (!state.deadline) errors.push({ path: "deadline", message: "Required" });
  if (!state.phone) errors.push({ path: "phone", message: "Required" });
  return errors;
};

async function onSubmit(event: FormSubmitEvent<any>) {
  // Do something with data
  console.log(event.data);
}
</script>

<style scoped></style>
