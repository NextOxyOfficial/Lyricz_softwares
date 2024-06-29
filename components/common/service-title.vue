<script>
export default {
  props: {
    heading: {
      type: String,
      required: true,
    },
    reverse: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    title2: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <div class="flex items-center flex-col">
    <p class="font-medium text-xl text-black">{{ heading }}</p>

    <p v-if="reverse == false" class="text-2xl md:text-6xl font-bold">
      <span class="text-[#8541CC]">{{ title }}</span> {{ title2 }}
    </p>
    <p v-else class="text-2xl md:text-6xl font-bold">
      {{ title2 }} <span class="text-[#8541CC]">{{ title }}</span>
    </p>
  </div>
</template>
