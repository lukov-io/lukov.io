<template>
  <svg
    class="icon-arrow-left"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 7.5C6.72386 7.5 6.5 7.72386 6.5 8L6.5 12.5C6.5 12.7761 6.72386 13 7 13C7.27614 13 7.5 12.7761 7.5 12.5L7.5 8.5L11.5 8.5C11.7761 8.5 12 8.27614 12 8C12 7.72386 11.7761 7.5 11.5 7.5L7 7.5ZM17.3536 17.6464L7.35355 7.64645L6.64645 8.35355L16.6464 18.3536L17.3536 17.6464Z"
      fill="black"
    />
  </svg>
</template>

<script>
export default {
  name: 'IconArrowLeft',
}
</script>

<style lang="scss">
.app-button:hover {
  @media #{$mouse-device} {
    &:hover {
      .icon-arrow-left {
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-name: arrow-left-motion;
      }
    }
  }

  @media #{$touch-device} {
    &:active {
      .icon-arrow-left {
        animation-duration: 1s;
        animation-iteration-count: 1;
        animation-name: arrowLeftMotion;
      }
    }
  }

  @keyframes arrow-left-motion {
    0% {
      translate: 0;
    }

    50% {
      translate: -5px -5px;
    }

    100% {
      rotate: 0;
    }
  }
}
</style>
