<template>
  <div :class="['main-menu', { open: openMenu }]">
    <IconClose
      class="main-menu__close"
      tabindex="0"
      @click="$emit('toggle-menu')"
    />
    <MainNav
      class="main-menu__nav"
      @toggle-menu="$emit('toggle-menu')"
    />
    <AppButton
      tabindex="0"
      class="main-menu__button"
      button-text="Leave a request"
      tag="nuxt-link"
      path-to="/contacts"
      type="button"
      itemprop="url"
    >
      <IconPen />
    </AppButton>
  </div>
</template>

<script>
import MainNav from '~/composables/MainNav.vue'
import AppButton from '~/composables/AppButton.vue'
import IconPen from '~/components/icons/IconPen.vue'
import IconClose from '~/components/icons/IconClose.vue'

export default {
  name: 'MainMenu',
  components: { MainNav, AppButton, IconPen, IconClose },
  props: {
    openMenu: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['toggle-menu'],
}
</script>

<style scoped lang="scss">
$main-menu__close-position-top: max($sp-m, $sp-m-factorial-x);
$main-menu__close-position-right: max($sp-m, $sp-m-factorial-y);
$main-menu__mobile-bg-color: rgba(0, 0, 0, 0.85);
$main-menu__mobile-bg-filter: blur($sp-xs-factorial-x);
$main-menu__mobile-padding: max($sp-m, $sp-m-factorial-y) max($sp-m, $sp-m-factorial-x);
$main-menu__mobile-z-index: $z-index-fixed + 1;

.main-menu {
  position: relative;
  display: grid;
  align-items: center;

  &__button {
    display: none;

    @media #{$md}, (orientation: portrait) {
      display: block;
    }
  }

  &__close {
    display: none;
    position: absolute;
    right: $main-menu__close-position-right;
    top: $main-menu__close-position-top;

    @media #{$md}, (orientation: portrait) {
      display: block;
    }
  }

  @media #{$md}, (orientation: portrait) {
    background-color: $main-menu__mobile-bg-color;
    backdrop-filter: $main-menu__mobile-bg-filter;
    display: none;
    padding: $main-menu__mobile-padding;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: $main-menu__mobile-z-index;
    overflow: scroll;
  }

  &.open {
    @media #{$md}, (orientation: portrait) {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: space-between;
    }
  }
}
</style>
