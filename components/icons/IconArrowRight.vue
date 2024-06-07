<template>
  <svg
    class="icon-arrow-right"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M17 7.5C17.2761 7.5 17.5 7.72386 17.5 8L17.5 12.5C17.5 12.7761 17.2761 13 17 13C16.7239 13 16.5 12.7761 16.5 12.5L16.5 8.5L12.5 8.5C12.2239 8.5 12 8.27614 12 8C12 7.72386 12.2239 7.5 12.5 7.5L17 7.5ZM6.64645 17.6464L16.6464 7.64645L17.3536 8.35355L7.35355 18.3536L6.64645 17.6464Z"
      fill="black"
    />
  </svg>
</template>

<script>
export default {
  name: 'IconArrowRight',
}
</script>

<style lang="scss">
.app-button {
  @media #{$mouse-device} {
    &:hover {
      .icon-arrow-right {
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-name: arrow-right-motion;
      }
    }
  }

  @media #{$touch-device} {
    &:active {
      .icon-arrow-right {
        animation-duration: 1s;
        animation-iteration-count: 1;
        animation-name: arrow-right-motion;
      }
    }
  }

  @keyframes arrow-right-motion {
    0% {
      translate: 0;
    }

    50% {
      translate: 5px -5px;
    }

    100% {
      translate: 0;
    }
  }
}
</style>
