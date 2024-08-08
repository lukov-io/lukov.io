<template>
  <div class="header">
    <div class="header__content">
      <MainLogo
        class="header__logo"
        @click="enableDarkTheme"
      />
      <AppButton
        class="header__button"
        button-text="Leave a request"
        tag="span"
        type="button"
        itemprop="url"
        @click="openModal"
      >
        <IconPen />
      </AppButton>
      <IconBurger @click="$emit('toggle-menu')" />
    </div>
    <ScrollProgressBar class="header__progress-bar" />
  </div>
</template>

<script>
import MainLogo from '~/components/MainLogo.vue'
import AppButton from '~/composables/AppButton.vue'
import IconPen from '~/components/icons/IconPen.vue'
import IconBurger from '~/components/icons/IconBurger.vue'
import { useModalStore } from '~/stores/modal-store'
import { useDarkMode } from '~/stores/theme-store'
import ScrollProgressBar from '~/components/ScrollProgressBar.vue'

export default {
  name: 'MainHeader',
  components: { MainLogo, AppButton, IconPen, IconBurger, ScrollProgressBar },
  emits: ['toggle-menu'],
  data() {
    return {
      modalStore: useModalStore(),
      darkModeStore: useDarkMode(),
    }
  },
  methods: {
    openModal() {
      this.modalStore.openModal()
    },

    enableDarkTheme() {
      this.darkModeStore.toggleDarkMode()
    },
  },
}
</script>

<style scoped lang="scss">
$header-padding: max($sp-xs, $sp-xs-factorial-y) max($sp-m, $sp-m-factorial-x);

.header {
  position: relative;

  &__content {
    padding: $header-padding;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .icon-burger {
      display: none;

      @media #{$md}, (orientation: portrait) {
        display: block;
      }

      z-index: $z-index-sticky;
    }
  }

  &__button {
    @media #{$md}, (orientation: portrait) {
      display: none;
    }
  }

  &__progress-bar {
    display: none;
    width: 100%;

    @media #{$md}, (orientation: portrait) {
      display: block;
    }
  }
}
</style>
