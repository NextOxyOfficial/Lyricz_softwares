<template>
  <button :class="class">
    <UButton size="xl" color="primary" variant="outline">
      {{ label }}<UIcon :name="icon" dynamic d />
    </UButton>
  </button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
    },
    class: {
      type: String,
    },
  },
};
</script>
