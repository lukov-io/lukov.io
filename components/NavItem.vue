<template>
  <nuxt-link
    :class="['nav-item']"
    :to="pathTo"
    @click="closeMenu"
  >
    {{ linkName }}
  </nuxt-link>
</template>

<script>
export default {
  name: 'NavItem',
  props: {
    linkName: {
      type: String,
      required: true,
    },
    pathTo: {
      type: String,
      required: true,
    },
  },
  emits: ['toggle-menu'],
  methods: {
    closeMenu() {
      setTimeout(() => (this.$emit('toggle-menu')), 500)
    },
  },
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
  white-space: nowrap;

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

  @media #{$sm} {
    line-height: $nav-item-line-height-min;
  }

  &.vertical {
    font-size: $nav-item-font-size-min;
    line-height: $nav-item-line-height-min;
  }
}
</style>
