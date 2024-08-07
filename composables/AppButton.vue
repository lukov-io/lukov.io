<template>
  <component
    :is="tag"
    class="app-button"
    :class="[textColor, iconSide, collapseOnMobile]"
    :type="type"
  >
    <span class="app-button__icon">
      <slot />
    </span>
    <template v-if="buttonText">
      <span class="app-button__text">
        {{ buttonText }}
      </span>
    </template>
  </component>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    tag: {
      type: String,
      required: false,
      default: 'span',
      validator(value) {
        return ['span', 'a', 'button'].includes(value)
      },
    },
    textColor: {
      type: String,
      required: false,
      default: '',
      validator(value) {
        return ['', 'light'].includes(value)
      },
    },
    iconSide: {
      type: String,
      required: false,
      default: '',
      validator(value) {
        return ['', 'right'].includes(value)
      },
    },
    buttonText: {
      type: String,
      required: true,
    },
    collapseOnMobile: {
      type: String,
      required: false,
      default: '',
      validator(value) {
        return ['', 'collapse'].includes(value)
      },
    },
    type: {
      type: String,
      required: false,
      default: '',
      validator(value) {
        return ['button', 'link', 'submit', 'reset'].includes(value)
      },
    },
  },
}
</script>

<style lang="scss" scoped>
$app-button__text-left-icon-padding: max(15px, $sp-custom-15-factorial-y) max(20px, $sp-custom-20-factorial-x) max(15px, $sp-custom-15-factorial-y) max(13px, $sp-custom-13-factorial-x);
$app-button__text-right-icon-padding: max(15px, $sp-custom-15-factorial-y) max(13px, $sp-custom-13-factorial-x) max(15px, $sp-custom-15-factorial-y) max(20px, $sp-custom-20-factorial-x);
$app-button-gap: 13px;
$app-button-dark-font-color: $text--light;
$app-button-light-font-color: $text--dark;
$app-button__icon-padding: $sp-custom-20;
$app-button__icon-color: $icon-circle-color;
$app-button__icon-border-radius: 50%;
$app-button__text-font-size: max($fs-xl, $fs-xl-factorial);
$app-button__text-line-height: 1;
$app-button-border-radius: 31vw;

.app-button {
  width: fit-content;
  cursor: pointer;
  text-align: center;
  display: inline-flex;
  align-items: center;
  border: $border--light;
  border-radius: $app-button-border-radius;
  padding: 0;
  background: none;

  $this: &;

  &__icon {
    display: inline-flex;
    align-items: center;
    padding: $app-button__icon-padding;
    background-color: $app-button__icon-color;
    border-radius: 50%;
    aspect-ratio: 1/1;
  }

  &__text {
    padding: $app-button__text-left-icon-padding;
    color: $app-button-light-font-color;
    line-height: $app-button__text-line-height;
    font-size: $app-button__text-font-size;
  }

  &.collapse {
    #{$this}__text {
      @media #{$sm} {
        display: none;
      }
    }
  }

  &.right {
    #{$this}__icon {
      order: 1;
    }

    #{$this}__text {
      padding: $app-button__text-right-icon-padding;
      text-align: center;
    }
  }

  &.light {
    #{$this}__text {
      color: $app-button-dark-font-color;
    }
  }
}
</style>
