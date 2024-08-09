<template>
  <div
    v-if="isScrollable"
    class="progress-bar"
    :style="{ width: scrollProgress + '%' }"
  />
</template>

<script>
export default {
  name: 'ScrollProgressBar',
  data() {
    return {
      scrollProgress: 0,
      isScrollable: false,
    }
  },
  watch: {
    $route(newVal) {
      if (newVal) {
        this.scrollProgress = 0
      }
    },
  },
  mounted() {
    this.checkScrollable()
    window.addEventListener('scroll', this.updateScrollProgress)
    window.addEventListener('resize', this.checkScrollable)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.updateScrollProgress)
    window.removeEventListener('resize', this.checkScrollable)
  },
  methods: {
    updateScrollProgress() {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      this.scrollProgress = (scrollTop / docHeight) * 100
    },
    checkScrollable() {
      this.isScrollable = document.documentElement.scrollHeight > window.innerHeight
    },
  },
}
</script>

<style scoped lang="scss">
$progress-bar-height: 2px;
$progress-bar-bg-gradient: radial-gradient(81.97% 7923999.79% at 100.26% -0.09%, #5B3D78 0.18%, #9CD9BC 50.52%, #434DA7 100%);

.progress-bar {
  height: $progress-bar-height;
  background: $progress-bar-bg-gradient;
  position: absolute;
  bottom: 0;
  left: 0;
  transition: width 0.1s ease-in-out;
  z-index: 1001;
}
</style>
