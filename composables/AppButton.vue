<template>
  <div class="app-button" :class="[ textColor, iconSide ]" >
    <span class="app-button__icon">
      <slot />
    </span>
    <template v-if="buttonText">
      <span class="app-button__text">
        {{ buttonText }}
      </span>
    </template>
  </div>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    textColor: {
      type: String,
      required: false,
      default: "",
      validator(value) {
        return ["", "light"].includes(value)
      }
    },
    iconSide: {
      type: String,
      required: false,
      default: "",
      validator(value) {
        return ["", "right"].includes(value)
      }
    },
    buttonText: {
      type: String,
      required: true,
    }
  }
};
</script>

<style lang="scss" scoped>

$app-button__text-left-icon-padding: 15px 19px 15px 13px;
$app-button__text-right-icon-padding: 15px 13px 15px 19px;
$app-button__text-hover-left-icon-padding: 15px 19px 15px 3px;
$app-button__text-hover-right-icon-padding: 15px 3px 15px 19px;
$app-button-gap: 13px;
$app-button-dark-font-color: $text--light;
$app-button-light-font-color: $text--dark;
$app-button__icon-padding: max($sp-custom-10, $sp-custom-10-factorial-x);
$app-button__icon-color: $icon-circle-color;
$app-button__icon-border-radius: 50%;
$app-button__text-font-size: max($fs-s, $fs-s-factorial);
$app-button__text-line-height: $lh-xl;

.app-button {
  cursor: pointer;
  border-radius: $app-button__icon-border-radius;
  text-align: center;
  display: inline-flex;
  align-items: center;

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

    @media #{$sm} {
      display: none;
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
