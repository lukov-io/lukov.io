<template>
  <div class="outer-wrapper">
    <div class="app-wrapper">
      <MainHeader
        class="app-header"
        @toggle-menu="toggleMenu"
      />
      <MainMenu
        class="app-sidebar"
        :open-menu="openMenu"
        @toggle-menu="toggleMenu"
      />
      <div class="app-main">
        <slot />
      </div>
    </div>
    <ModalContainer>
      <FormRequest />
    </ModalContainer>
  </div>
</template>

<script>
import MainHeader from '~/composables/MainHeader.vue'
import MainMenu from '~/composables/MainMenu.vue'
import ModalContainer from '~/components/modals/ModalContainer'
import FormRequest from '~/components/forms/FormRequest'

export default {
  name: 'Default',
  components: { MainHeader, MainMenu, ModalContainer, FormRequest },
  data() {
    return {
      windowWidth: 0,
      openMenu: false,
    }
  },
  mounted() {
    this.updateWindowWidth()
    window.addEventListener('resize', this.updateWindowWidth)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateWindowWidth)
  },
  methods: {
    updateWindowWidth() {
      this.windowWidth = window.innerWidth
    },
    toggleMenu() {
      this.openMenu = !this.openMenu
      document.body.style.overflow = this.openMenu ? 'hidden' : ''
    },
  },
}
</script>

<style scoped lang="scss">
$main-gap: 2vw;
$wrapper-background-color: $background--white;
$wrapper-grid-template: "sidebar header" auto
                        "sidebar content" 1fr
                        "sidebar content" auto / auto 1fr;
$wrapper-grid-template-mobile: "header" 1fr
                                "footer" auto / 100%;
$wrapper-padding-top-mobile: max($sp-70, $sp-70-factorial-y);
$wrapper-background-color: $background--white;
$header-background-color: $background--white;
$header-bottom-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
$header-grid-area-mobile: 1 / 1 / 2 / 2;
$header-z-index-mobile: $z-index-fixed;

.app {
  &-wrapper {
    background-color: $wrapper-background-color;
    display: grid;
    height: 100dvh;
    grid-template: $wrapper-grid-template;

    @media #{$md}, (orientation: portrait) {
      grid-template: $wrapper-grid-template-mobile;
      padding-top: $wrapper-padding-top-mobile;
    }
  }

  &-header {
    grid-area: header;

    @media #{$md}, (orientation: portrait) {
      grid-area: $header-grid-area-mobile;
      position: fixed;
      top: 0;
      width: 100%;
      z-index: $header-z-index-mobile;
      background: $header-background-color;
      box-shadow: $header-bottom-shadow;
    }
  }

  &-sidebar {
    grid-area: sidebar;
  }

  &-main {
    padding: max($sp-m, $sp-m-factorial-x) max($sp-m, $sp-m-factorial-y);
    padding-bottom: 0;
  }
}
</style>
