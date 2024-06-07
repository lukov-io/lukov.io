<template>
  <svg
    class="icon-point"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      class="icon-point__1"
      d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12Z"
      fill="black"
    />
    <path
      class="icon-point__2"
      d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
      fill="black"
    />
    <path
      class="icon-point__3"
      d="M21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z"
      fill="black"
    />
  </svg>
</template>

<script>
export default {
  name: 'IconPoint',
}
</script>

<style lang="scss">
$point-jump-height: -5px;

.app-button {
  @media #{$mouse-device} {
    &:hover {
      .icon-point {
        &__1,
        &__2,
        &__3 {
          animation-duration: 2s;
          animation-iteration-count: infinite;
        }

        &__1 {
          animation-name: point1;
        }

        &__2 {
          animation-name: point2;
        }

        &__3 {
          animation-name: point3;
        }
      }
    }
  }

  @media #{$touch-device} {
    &:active {
      .icon-point {
        &__1,
        &__2,
        &__3 {
          animation-duration: 1s;
          animation-iteration-count: infinite;
        }

        &__1 {
          animation-name: point1;
        }

        &__2 {
          animation-name: point2;
        }

        &__3 {
          animation-name: point3;
        }
      }
    }
  }

  @keyframes point1 {
    0% {
      translate: 0;
    }

    25% {
      translate: 0 $point-jump-height;
    }

    50% {
      translate: 0;
    }

    75% {
      translate: 0;
    }

    100% {
      translate: 0;
    }
  }

  @keyframes point2 {
    0% {
      translate: 0;
    }

    25% {
      translate: 0;
    }

    50% {
      translate: 0 $point-jump-height;
    }

    75% {
      translate: 0;
    }

    100% {
      translate: 0;
    }
  }

  @keyframes point3 {
    0% {
      translate: 0;
    }

    25% {
      translate: 0;
    }

    50% {
      translate: 0;
    }

    75% {
      translate: 0 $point-jump-height;
    }

    100% {
      translate: 0;
    }
  }
}
</style>
