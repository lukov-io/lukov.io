<template>
  <svg class="icon-clip" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.5144 20.7158C9.68888 21.5381 8.56926 22 7.40182 22C6.23438 22 5.11476 21.5381 4.28926 20.7158C3.46376 19.8935 3 18.7783 3 17.6154C3 16.4526 3.46376 15.3373 4.28926 14.5151L14.9905 3.85572C15.2631 3.58433 15.5867 3.36908 15.9428 3.22226C16.2989 3.07543 16.6805 2.99991 17.0659 3C17.4513 3.00009 17.8329 3.07579 18.189 3.22279C18.545 3.36978 18.8685 3.58518 19.1409 3.8567C19.4134 4.12821 19.6295 4.45052 19.7769 4.80523C19.9243 5.15993 20.0001 5.54008 20 5.92397C19.9999 6.30786 19.9239 6.68798 19.7763 7.04261C19.6288 7.39725 19.4125 7.71945 19.1399 7.99084L8.43086 18.658C8.15304 18.9233 7.78171 19.0682 7.39688 19.0634C7.01205 19.0585 6.64454 18.9033 6.37356 18.631C6.10258 18.3588 5.94982 17.9914 5.94821 17.6081C5.9466 17.2247 6.09627 16.8561 6.36495 16.5816L14.0045 8.97201M8.43966 18.6482L8.42988 18.658" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path class="icon-clip__item" d="M10.5703 20.6809L19.0703 12.1045" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
  </svg>
</template>

<script>
export default {
  name: 'IconClip'
}
</script>

<style lang="scss">


.app-button {
  @media #{$mouse-device} {
    &:hover {
      .icon-clip {
        &__item {
          transform-origin: 0 100%;
          animation-duration: 2s;
          animation-iteration-count: infinite;
          animation-name: clipMotion;

          @keyframes clipMotion {
            0% {
              rotate: 0;
            }
            50% {
              rotate: 15deg;
            }
            100% {
              rotate: 0;
            }
          }
        }
      }
    }
  }

  @media #{$touch-device} {
    &:active {
      .icon-clip {
        &__item {
          transform-origin: 0 100%;
          animation-duration: 1s;
          animation-iteration-count: 1;
          animation-name: clipMotion;

          @keyframes clipMotion {
            0% {
              rotate: 0;
            }
            50% {
              rotate: 15deg;
            }
            100% {
              rotate: 0;
            }
          }
        }
      }
    }
  }
}
</style>