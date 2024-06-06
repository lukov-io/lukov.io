<template>
  <div class="app-button d-inline-flex align-items-center" :class="[ textColor, iconSide ]" >
    <span class="app-button__icon d-inline-flex align-items-center">
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
}
</script>

<style lang="scss" scoped>

$app-button__text-left-icon-padding: 15px 19px 15px 13px;
$app-button__text-right-icon-padding: 15px 13px 15px 19px;
$app-button__text-hover-left-icon-padding: 15px 19px 15px 3px;
$app-button__text-hover-right-icon-padding: 15px 3px 15px 19px;
$app-button-gap: 13px;
$app-button-dark-font-color: $text--light;
$app-button-light-font-color: $text--dark;
$app-button__icon-padding: $sp-custom-10;
$app-button__icon-padding-factorial: $sp-custom-10-factorial-x;
$app-button__icon-color: $icon-circle-color;
$app-button__text-font-size-factor: $fs-s-factorial;
$app-button__text-font-size-min: $fs-s;
$app-button__text-line-height: $lh-xl;

.app-button {
  cursor: pointer;
  border-radius: 50%;
  text-align: center;

  $this: &;

  &__icon {
    @include adaptive(padding, $app-button__icon-padding, $app-button__icon-padding-factorial);
    background-color: $app-button__icon-color;
    border-radius: 50%;
    aspect-ratio: 1 / 1;
  }

  &__text {
    padding: $app-button__text-left-icon-padding;
    color: $app-button-light-font-color;
    line-height: $app-button__text-line-height;

    @include adaptive(
        font-size,
        $app-button__text-font-size-min,
        $app-button__text-font-size-factor
    );

    @media #{$sm} {
      display: none;
    }
  }

  &:hover {

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
