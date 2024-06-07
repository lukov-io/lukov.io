<template>
  <nuxt-link class="services-item" :to="pathTo">
    {{ linkName }}
  </nuxt-link>
</template>

<script>
export default {
  name: 'NavItem',
  props: {
    linkName: {
      type: String,
      required: true
    },
    pathTo: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">

$services-item-text-color: $text--dark;
$services-item-font-size: max($fs-m, $fs-m-factorial);
$services-item-line-height: $lh-xl;
$services-item-font-weight: $fw-custom-550;
$services-item-hover-gradient: $gradient0deg;
$services-item-hover-text-color: $text--white;
$services-item-padding: $sp-custom-15-factorial-y $sp-custom-10-factorial-x;

.services-item {
  font-weight: $services-item-font-weight;
  line-height: $services-item-line-height;
  text-decoration: none;
  color: $services-item-text-color;
  padding: $services-item-padding;
  font-size: $services-item-font-size;

  @media #{$mouse-device} {
    &:hover {
      color: $services-item-hover-text-color;
      background: $services-item-hover-gradient;
    }
  }

  @media #{$touch-device} {
    &:active {
      color: $services-item-hover-text-color;
      background: $services-item-hover-gradient;
    }
  }
}

</style>