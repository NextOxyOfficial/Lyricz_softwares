<template>
  <div :class="classList">
    <div class="scene">
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
  let scenes = document.querySelectorAll(".scene");

  scenes.forEach((scene) => {
    // Your code to handle each scene element
    let parallaxInstance = new Parallax(scene, {
      relativeInput: true,
      hoverOnly: false,
    });
    console.log("hello");
  });
});
</script>

<style scoped>
/* Scoped styles for your component */
/* Add any specific styles if needed */
</style>
