<template>
  <div :class="classList">
    <div id="scene">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { defineProps, onMounted } from "vue";
import Parallax from "parallax-js";

const props = defineProps({
  classList: {
    type: String,
    required: false,
  },
});

onMounted(() => {
  let scene = document.getElementById("scene");
  let parallaxInstance = new Parallax(scene, {
    relativeInput: true,
    hoverOnly: false,
  });
});
</script>

<style scoped>
/* Scoped styles for your component */
/* Add any specific styles if needed */
</style>
