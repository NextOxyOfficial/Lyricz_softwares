<template>
  <!-- Scroll To Top Button HTML -->
  <button id="wm-back-to-top" @click="scrollToTop">
    <div class="btt-background"></div>
    <div class="icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        aria-labelledby="title"
        role="img"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <title>Angle Up</title>
        <path
          data-name="layer1"
          fill="none"
          stroke="#202020"
          stroke-miterlimit="10"
          stroke-width="2"
          d="M4 42 l28 -26 L60 42"
          stroke-linejoin="round"
          stroke-linecap="round"
        ></path>
      </svg>
    </div>
  </button>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const throttlePause = ref<boolean | null>(null);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const throttle = (callback: () => void, time: number) => {
  if (throttlePause.value) return;

  throttlePause.value = true;
  setTimeout(() => {
    callback();
    throttlePause.value = false;
  }, time);
};

const checkPos = () => {
  const pos = document.documentElement.scrollTop;
  const revealHeight = window.innerHeight * 0.04;
  const bttButton = document.querySelector("#wm-back-to-top");
  if (bttButton) {
    if (pos >= revealHeight) {
      bttButton.classList.add("show");
    } else {
      bttButton.classList.remove("show");
    }
  }
};

onMounted(() => {
  const btt = document.querySelector("#wm-back-to-top");
  if (btt) {
    const body = document.body;
    body.append(btt);
    if (btt.closest(".sqs-block-content")) {
      (btt.closest(".sqs-block-content") as HTMLElement).style.display =
        "inline";
    }
  }

  window.addEventListener("scroll", () => {
    throttle(checkPos, 150);
  });
  window.addEventListener("DOMContentLoaded", checkPos);
});
</script>

<style scoped>
/**
 * Back To Top Button Styles
 * From Will-Myers.com
 */
#wm-back-to-top {
  z-index: 999;
  position: fixed;
  display: flex;
  bottom: 0;
  right: 0;
  min-width: 30px;
  min-height: 30px;
  flex-direction: row;
  gap: 1px;
  align-items: center;
  justify-content: center;
  box-sizing: content-box;
  margin: 17px;
  padding: 8px;
  cursor: pointer;
  opacity: 0;
  overflow: hidden;
  transform: translateY(0px) scale(1);
  background: transparent;
  border-radius: 50px;
  border-width: 0px;
  border-color: #000000;
  border-style: solid;
  visibility: hidden;
  transition: opacity 0.3s ease, transform 0.3s ease, visibility 0s ease 0.3s;
  will-change: transform;
  backdrop-filter: blur(10px);

  &.show {
    transform: translateY(0px);
    opacity: 1;
    visibility: visible;
    transition: opacity 0.3s ease, transform 0.3s ease, visibility 0s ease 0s;
  }
  .icon {
    position: relative;
    display: flex;
    justify-content: center;
    line-height: 0;
    height: auto;
    width: auto;
  }
  .text {
    position: relative;
    margin: 0;
    font-size: 0.8rem;
    font-weight: 500;
    color: #000000;
    text-transform: uppercase;
  }
  svg {
    width: 23px;
    height: 23px;
  }
  path {
    stroke-width: 7px;
    stroke: #050505;
  }
  .btt-background {
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #5bb1b9;
    opacity: 1;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-3px);
    opacity: 0.85;
  }
  &:active {
    transform: translateY(-3px) scale(0.95);
  }
}
</style>
