<template>
  <div class="header">
    <MainLogo @click="enableDarkTheme" />
    <AppButton
      button-text="Leave a request"
      tag="span"
      type="button"
      collapse-on-mobile="collapse"
      itemprop="url"
      @click="openModal"
    >
      <IconPen />
    </AppButton>
  </div>
</template>

<script>
import MainLogo from '~/components/MainLogo.vue'
import AppButton from '~/composables/AppButton.vue'
import IconPen from '~/components/icons/IconPen.vue'
import { useModalStore } from '~/stores/modal-store'
import { useDarkMode } from '~/stores/theme-store'

export default {
  name: 'MainHeader',
  components: { MainLogo, AppButton, IconPen },
  setup() {
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
$header-padding: max(8px, 2vh) 0;
$header-margin: 0 max(8px, 8vw);

.header {
  padding: $header-padding;
  margin: $header-margin;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
