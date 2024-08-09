<template>
  <h1 class="main-title">
    <span class="main-title--color-word">
      <slot name="color-word" />
    </span><br>
    <span class="main-title--black-word">
      <slot name="monochrome-word" />
    </span>
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
  justify-self: start;
  width: fit-content;

  &--color-word {
    text-align: left;
    background: $gradient165deg;
    background-clip: text;
    color: transparent;
  }

  &--black-word {
    line-height: $lh-sm;
    text-align: left;
    text-transform: uppercase;
  }

  @media #{$md}, (orientation: portrait) {
    place-self: start center;
  }
}
</style>
