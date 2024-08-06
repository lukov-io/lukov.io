<template>
  <a
    class="social-networks-item"
    :href="linkTo"
  >
    <span
      class="social-networks-item__icon"
      :class="icon"
    />
    <span class="social-networks-item__name">
      <slot />
    </span>
  </a>
</template>

<script>
export default {
  name: 'SocialNetworksItem',
  props: {
    icon: {
      type: String,
      required: true,
      validator: value => ['icons-font--tg', 'icons-font--in', 'icons-font--wa'].includes(value),
    },
    linkTo: {
      type: String,
      required: true,
      default: '#',
    },
  },
}
</script>

<style lang="scss" scoped>
$social-networks-item-gap: max($sp-10, $sp-10-factorial-x);
$social-networks-item__name-font-size: max($fs-m, $fs-m-factorial);
$social-networks-item__name-font-weight: $fw-custom-550;
$social-networks-item__name-line-height: $lh-md;
$social-networks-item__name-font-color: $my-primary-dark-grey;
$social-networks-item__icon-font-color: $my-primary-dark;

.social-networks-item {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: $social-networks-item-gap;

  $this: &;

  &__icon {
    color: $social-networks-item__icon-font-color;
  }

  &__name {
    font-size: $social-networks-item__name-font-size;
    font-weight: $social-networks-item__name-font-weight;
    line-height: $social-networks-item__name-line-height;
    color: $social-networks-item__name-font-color;
  }

  &__error {
    font-size: $social-networks-item__name-font-size;
  }

  @media #{$mouse-device} {
    &:hover {
      #{$this}__name {
        background: $gradient165deg center center no-repeat;
      }

      #{$this}__icon {
        background: $gradient0deg center center no-repeat;
      }

      #{$this}__icon,
      #{$this}__name {
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }

  &:active {
    #{$this}__name,
    #{$this}__icon {
      color: $text--cian;
      background: unset;
      background-clip: unset;
      -webkit-text-fill-color: unset;
    }
  }
}
</style>
