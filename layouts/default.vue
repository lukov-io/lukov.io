<template>
  <div class="outer-wrapper">
    <div class="wrapper">
      <MainHeader class="header" />
      <NavMenu
        v-if="isWideScreen"
        class="sidebar"
      />
      <div class="main">
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

.wrapper {
  background-color: $wrapper-background-color;
  display: grid;
  height: 100dvh;
  grid-template:
    "sidebar header" auto
    "sidebar content" 1fr
    "sidebar content" auto / auto 1fr;

  @media #{$md} {
    grid-template-areas: unset;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 100%;
  }

  .header {
    grid-area: header;

    @media #{$md} {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
    }
  }

  .sidebar {
    grid-area: sidebar;

    @media #{$md} {
      display: none;
    }
  }

  .main {
    padding: $sp-s;
  }
}
</style>
