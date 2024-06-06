<template>
  <div class="header">
    <div class="container-fluid d-flex justify-content-between align-items-center">
      <MainLogo />

      <AppButton button-text="Leave a request">
        <IconPoint />
      </AppButton>
    </div>
  </div>
</template>

<script>
import IconPoint from '~/components/icons/IconPoint.vue'
import AppButton from '~/composables/AppButton.vue'
import MainLogo from '~/components/MainLogo.vue'

export default {
  name: 'MainHeader',
  components: { AppButton, IconPoint, MainLogo }
}
</script>

<style scoped lang="scss">

  .header {
    padding: max(8px, 2vh) 0;
    margin: 0 max(8px, 8vw);
  }

</style>