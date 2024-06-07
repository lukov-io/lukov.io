<template>
  <nuxt-link :class="[ 'nav-item', orientation, textColor ]" :to="pathTo">
    {{ linkName }}
  </nuxt-link>
</template>

<script>
export default {
  name: 'NavItem',
  props: {
    linkName: {
      type: String,
      required: true
    },
    pathTo: {
      type: String,
      required: true
    },
    textColor: {
      type: String,
      required: false,
      default: "",
      validator(value) {
        return ["", "light-text"].includes(value)
      }
    },
    orientation: {
      type: String,
      required: false,
      default: "",
      validator(value) {
        return ["", "vertical"].includes(value);
      }
    }
  }
}
</script>

<style scoped lang="scss">

$nav-item-font-color: $text--primary;
$nav-item-hover-font-color: $text--primary;
$nav-item-font-size-min: 17px;
$nav-item-font-size-factor: 1.18vw;
$nav-item-line-height-min: 120%;
$nav-item-line-height-max: 140%;
$nav-item-font-weight: 550;
$nav-item-dark-font-color: $text--white;

.nav-item {
  text-decoration: none;
  color: $nav-item-font-color;
  line-height: $nav-item-line-height-max;
  font-weight: $nav-item-font-weight;
  font-size: max($nav-item-font-size-min, $nav-item-font-size-factor);

  @media #{$mouse-device} {
    &:hover {
      color: $text--dark;
    }
  }

  @media #{$touch-device} {
    &:active {
      color: $text--dark;
    }
  }

  @media #{$md} {
    line-height: $nav-item-line-height-min;
  }

  &.vertical {
    font-size: $nav-item-font-size-min;
    line-height: $nav-item-line-height-min;
  }

  &.light-text {
    color: $nav-item-dark-font-color;
  }
}
</style>


