<template>
  <svg
    class="icon-burger"
    :class="buttonState"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 26 13"
    fill="none"
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
</template>

<script>
export default {
  name: 'IconBurger',
  props: {
    buttonState: {
      type: String,
      required: false,
      default: '',
      validator(value) {
        return ['', 'close'].includes(value)
      },
    },
  },
}
</script>

<style lang="scss" scoped>
$icon-burger-fill: $my-black;
$icon-burger-close-fill: $my-white;

.icon-burger {
  cursor: pointer;
  fill: $icon-burger-fill;

  &.close {
    fill: $icon-burger-close-fill;

    rect:nth-child(1) {
      rotate: 45deg;
      transform-origin: 27% 30%;
      transition: rotate 0.25s
    }

    rect:nth-child(2) {
      display: none;
    }

    rect:nth-child(3) {
      rotate: -45deg  ;
      transform-origin: 27% 67%;
      transition: rotate 0.25s
    }
  }
}
</style>
