<template>
  <div class="header">
    <MainLogo />
  </div>
</template>

<script>
import MainLogo from '~/components/MainLogo.vue'

export default {
  name: 'MainHeader',
  components: { MainLogo },
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
