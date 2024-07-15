<template>
  <h1 class="main-title">
    <slot />
  </h1>
</template>

<script>
export default {
  name: 'MainTitle',
}
</script>

<style scoped lang="scss">
.main-title {
  text-transform: uppercase;
  text-wrap: balance;
  color: $text--dark;
}
</style>
