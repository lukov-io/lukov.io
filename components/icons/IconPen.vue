<template>
  <svg class="icon-pen" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.5068 7.24564L16.7557 6.49446L16.175 5.9138C16.0791 5.81305 15.9637 5.73284 15.8359 5.67804C15.708 5.62323 15.5704 5.59497 15.4312 5.59497C15.2921 5.59497 15.1545 5.62323 15.0266 5.67804C14.8988 5.73284 14.7834 5.81305 14.6875 5.9138L5.125 15.4763V18.8763H8.525L18.0875 9.3138C18.1882 9.21789 18.2685 9.1025 18.3233 8.97465C18.3781 8.8468 18.4063 8.70915 18.4063 8.57005C18.4063 8.43095 18.3781 8.2933 18.3233 8.16545C18.2685 8.0376 18.1882 7.92221 18.0875 7.8263L17.5068 7.24564ZM8.1 17.8138H6.1875V15.9013L15.4312 6.65755L17.3438 8.57005L8.1 17.8138ZM7.78125 10.1564L11.8113 6.1263L12.5625 6.87749L8.53244 10.9075L7.78125 10.1564Z" fill="black"/>
    <path class="icon-pen__button" d="M16.5 7L17 7.5L18.5 6L18 5.5L16.5 7Z" stroke="black"/>
  </svg>
</template>

<script>
export default {
  name: 'IconPen'
}
</script>

<style lang="scss">
.app-button {
  @media #{$mouse-device} {
    &:hover {
      .icon-pen {
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-name: turnPen;

        @keyframes turnPen {
          0% {
            rotate: 0;
          }
          20% {
            rotate: 0;
          }
          40% {
            rotate: -45deg;
          }
          60% {
            rotate: -45deg;
          }
          80% {
            rotate: -45deg;
          }
          100% {
            rotate: 0;
          }
        }

        &__button {
          animation-duration: 2s;
          animation-iteration-count: infinite;
          animation-name: buttonClick;

          @keyframes buttonClick {
            40% {
              translate: 0;
            }
            50% {
              translate: -1px 1px;
            }
            60% {
              translate: 0;
            }
          }
        }
      }
    }
  }

  @media #{$touch-device} {
    &:active {
      .icon-pen {
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-name: turnPen;

        @keyframes turnPen {
          0% {
            rotate: 0;
          }
          20% {
            rotate: 0;
          }
          40% {
            rotate: -45deg;
          }
          60% {
            rotate: -45deg;
          }
          80% {
            rotate: -45deg;
          }
          100% {
            rotate: 0;
          }
        }

        &__button {
          animation-duration: 1s;
          animation-iteration-count: 1;
          animation-name: buttonClick;

          @keyframes buttonClick {
            40% {
              translate: 0;
            }
            50% {
              translate: -1px 1px;
            }
            60% {
              translate: 0;
            }
          }
        }
      }
    }
  }
}
</style>