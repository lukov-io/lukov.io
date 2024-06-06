<template>
  <svg class="icon-envelope" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path class="icon-envelope__inner" d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
    <path class="icon-envelope__inner" d="M22 7L13.03 12.7C12.7213 12.8934 12.3643 12.996 12 12.996C11.6357 12.996 11.2787 12.8934 10.97 12.7L2 7" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>

<script>
export default {
  name: 'iconEnvelope'
}
</script>

<style lang="scss">


.app-button {
  @media #{$mouse-device} {
    &:hover {
      .icon-envelope {
        &__inner {
          animation-duration: 2s;
          animation-iteration-count: infinite;
          animation-name: sendMessage;

          @keyframes sendMessage {
            0% {
              translate: 0;
            }
            25% {
              translate: -50% 0;
            }
            50% {
              translate: 0;
            }
            75% {
              translate: 50% 0;
            }
            100% {
              translate: 0;
            }
          }
        }
      }
    }
  }

  @media #{$touch-device} {
    &:active {
      .icon-envelope {
        &__inner {
          animation-duration: 1s;
          animation-iteration-count: 1;
          animation-name: sendMessage;

          @keyframes sendMessage {
            0% {
              translate: 0;
            }
            25% {
              translate: -50% 0;
            }
            50% {
              translate: 0;
            }
            75% {
              translate: 50% 0;
            }
            100% {
              translate: 0;
            }
          }
        }
      }
    }
  }
}

</style>