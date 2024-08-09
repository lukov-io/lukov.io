<template>
  <span class="icon-burger">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 26 13"
    >
      <rect
        y="0.5"
        width="26"
        height="2"
        rx="1"
        fill="inherit"
      />
      <rect
        y="5.5"
        width="26"
        height="2"
        rx="1"
        fill="inherit"
      />
      <rect
        y="10.5"
        width="26"
        height="2"
        rx="1"
        fill="inherit"
      />
    </svg>
  </span>
</template>

<script>
export default {
  name: 'IconBurger',
}
</script>

<style lang="scss" scoped>
$icon-burger-fill: $my-black;
$icon-burger-close-fill: $my-white;

.icon-burger {
  cursor: pointer;
  fill: $icon-burger-fill;

  &:hover {
    rect:nth-child(1) {
      animation-duration: 1s;
      animation-iteration-count: infinite;
      animation-name: burger-rect-1;
    }

    rect:nth-child(2) {
      animation-duration: 1s;
      animation-iteration-count: infinite;
      animation-name: burger-rect-2 ;
    }

    rect:nth-child(3) {
      animation-duration: 1s;
      animation-iteration-count: infinite;
      animation-name: burger-rect-1;
    }
  }

  @keyframes burger-rect-1 {
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

  @keyframes burger-rect-2 {
    0% {
      translate: 0;
    }

    25% {
      translate: 50% 0;
    }

    75% {
      translate: -50% 0;
    }

    100% {
      translate: 0;
    }
  }
}
</style>
