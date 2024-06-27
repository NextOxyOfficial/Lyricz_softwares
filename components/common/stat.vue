<template>
  <div class="counter-container">
    <div class="title">{{ title }}</div>
    <div ref="counter" class="counter">{{ currentValue }}</div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      required: true,
      default: 100,
    },
    title: {
      type: String,
      required: true,
      default: "Title",
    },
    name: {
      type: String,
      required: false,
      default: "Name",
    },
    duration: {
      type: Number,
      default: 1000, // Default duration in milliseconds
    },
  },
  data() {
    return {
      currentValue: 0,
      frameDuration: 1000 / 60, // Approximately 60 frames per second
      totalFrames: 0,
      frame: 0,
      intervalId: null,
      observer: null,
    };
  },
  mounted() {
    this.totalFrames = Math.round(this.duration / this.frameDuration);
    this.createObserver();
  },
  beforeDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    if (this.observer) {
      this.observer.disconnect();
    }
  },
  methods: {
    easeOutQuad(t) {
      return t * (2 - t);
    },
    startCounter() {
      // Clear any existing interval before starting a new one
      if (this.intervalId) {
        clearInterval(this.intervalId);
      }

      this.frame = 0;
      this.currentValue = 0;
      this.intervalId = setInterval(() => {
        this.frame++;
        const progress = this.easeOutQuad(this.frame / this.totalFrames);
        this.currentValue = Math.round(this.value * progress);

        if (this.frame === this.totalFrames) {
          clearInterval(this.intervalId);
          this.intervalId = null; // Ensure intervalId is reset
        }
      }, this.frameDuration);
    },
    createObserver() {
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.startCounter();
          } else {
            // Optional: clear interval when element is out of view
            if (this.intervalId) {
              clearInterval(this.intervalId);
              this.intervalId = null;
            }
          }
        });
      });

      this.observer.observe(this.$refs.counter);
    },
  },
};
</script>

<style scoped>
.counter-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.title {
  font-size: 24px;
  margin-bottom: 10px;
}

.counter {
  font-size: 48px;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
