<template>
  <span class="icon-close">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 25 24"
      fill="none"
    >
      <line
        class="icon-close__line"
        x1="1.35355"
        y1="0.646447"
        x2="24.3536"
        y2="23.6464"
        stroke="white"
      />
      <line
        class="icon-close__line"
        y1="-0.5"
        x2="32.5269"
        y2="-0.5"
        transform="matrix(-0.707107 0.707107 0.707107 0.707107 24 1)"
        stroke="white"
      />
    </svg>
  </span>
</template>

<script>
export default {
  name: 'IconClose',
}
</script>

<style lang="scss">
.icon-close {
  @media #{$mouse-device} {
    &:hover {
      line:nth-child(1) {
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-name: burger-rect-2;
      }

      line:nth-child(2) {
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-name: burger-rect-2;
      }
    }
  }

  @media #{$touch-device} {
    &:active {
      fill: red;
    }
  }

  @keyframes send-message {
    0% {
      translate: 0;
    }

    25% {
      translate: -50% 0;
    }

    75% {
      translate: 50% 0;
    }

    100% {
      translate: 0;
    }
  }
}
</style>
