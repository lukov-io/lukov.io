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
.main-headline {
  width: 80%;
  text-transform: uppercase;
  text-wrap: balance;

  @media #{$lg} {
    width: 100%
  }
}
</style>
