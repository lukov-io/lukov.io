<template>
  <div class="outer-wrapper">
    <div class="app-wrapper">
      <MainHeader class="app-header" />
      <NavMenu
        v-if="isWideScreen"
        class="app-sidebar"
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
import NavMenu from '~/composables/NavMenu.vue'
import ModalContainer from '~/components/modals/ModalContainer'
import FormRequest from '~/components/forms/FormRequest'

export default {
  name: 'Default',
  components: { MainHeader, NavMenu, ModalContainer, FormRequest },
  data() {
    return {
      windowWidth: 0,
    }
  },
  computed: {
    isWideScreen() {
      return this.windowWidth > 768
    },
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
  },
}
</script>

<style scoped lang="scss">
$main-gap: 2vw;
$wrapper-background-color: $background--white;
$header-background-color: $background--white;
$header-bottom-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

.app-wrapper {
  background-color: $wrapper-background-color;
  display: grid;
  height: 100dvh;
  grid-template:
    "sidebar header" auto
    "sidebar content" 1fr
    "sidebar content" auto / auto 1fr;

  @media #{$md}, (orientation: portrait) {
    grid-template-areas: unset;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
    padding-top: max($sp-70, $sp-70-factorial-y);
  }

  .app-header {
    grid-area: header;

    @media #{$md}, (orientation: portrait) {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 1000;
      background: $header-background-color;
      box-shadow: $header-bottom-shadow;
    }
  }

  .app-sidebar {
    grid-area: sidebar;

    @media #{$md}, (orientation: portrait) {
      display: none;
    }
  }

  .app-main {
    padding: $sp-s;
    padding-bottom: 0;
  }
}
</style>
