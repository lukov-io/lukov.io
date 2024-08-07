<template>
  <div :class="['base-tel-input', { error: hasError }]">
    <label
      v-if="label"
      class="base-tel-input__label"
      :for="id"
    >{{ label }}</label>
    <vue-tel-input
      :id="id"
      v-bind="$attrs"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'BaseTelInput',
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      default: '',
    },
    hasError: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue'],
}
</script>

<style lang="scss" scoped>
$base-field__label-font-size: max($fs-xs, $fs-m-factorial);
$base-field__label-margin-bottom: max($sp-xxs, $sp-xxs-factorial-y);
$base-field__label-font-weight: $fw-normal;
$base-field__label-line-height: $lh-xxl;
$base-field__label-font-color: $text--primary-dark;
$base-field__label-font-color--focus: $text--dark;
$base-field__label-font-color--error: $my-info;
$base-field__label-padding: 0 0 0 max($sp-xxs, $sp-xxs-factorial-y);
$base-field__input-font-size: max($fs-xs, $fs-m-factorial);
$base-field__input-font-weight: $fw-normal;
$base-field__input-line-height: $lh-xxl;
$base-field__input-font-color: $text--dark;
$base-field__input-background-color: $background--primary;
$base-field__input-background-color--error: rgba(133, 18, 18, 0.1);
$base-field__input-border: $border-1px $border-color--grey;
$base-field__input-border--error: $border-1px $border-color--danger;
$base-field__input-border--focus: $border-1px $border-color--blue;
$base-field__input-padding-x: max($sp-13, $sp-20-factorial-x);
$base-field__input-padding-y: max($sp-13, $sp-20-factorial-y);
$base-field__input-padding: $base-field__input-padding-y $base-field__input-padding-x;
$base-field__input-search-box-padding: max($sp-xs, $sp-xs-factorial-y) max($sp-13, $sp-20-factorial-x);
$base-field__placeholder-color: $my-gray600;
$base-field__placeholder-style: $my-gray600;

.base-tel-input {
  width: auto;

  $this: &;

  &__label {
    width: 100%;
    font-size: $base-field__label-font-size;
    font-weight: $base-field__label-font-weight;
    line-height: $base-field__label-line-height;
    color: $base-field__label-font-color;
    padding: $base-field__label-padding;
    margin-bottom: $base-field__label-margin-bottom;
    opacity: 0.5;
  }

  &:focus-within {
    #{$this}__label {
      opacity: 1;
      color: $base-field__input-border--focus;
    }

    .vti__input {
      border-bottom: $base-field__input-border--error !important;
      background-color: $base-field__input-background-color--error !important;
    }
  }

  &.error {
    #{$this}__label {
      opacity: 0.5;
      color: $base-field__label-font-color--error;
    }
  }
}
</style>
