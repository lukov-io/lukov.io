<template>
  <div
    :class="['base-field', { error: hasError }]"
  >
    <label
      v-if="label"
      class="base-field__label"
      :for="id"
    >{{ label }}</label>
    <component
      :is="tag"
      :id="id"
      :class="fieldClass"
      :type="type"
      v-bind="$attrs"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'BaseField',
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
    type: {
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
    tag: {
      type: String,
      default: 'input',
      validator: value => ['input', 'textarea', 'vue-tel-input'].includes(value),
    },
  },
  emits: ['update:modelValue'],
  computed: {
    fieldClass() {
      return {
        'base-field__input': this.tag === 'input',
        'base-field__textarea': this.tag === 'textarea',
      }
    },
  },
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
$base-field__input-padding: max($sp-13, $sp-20-factorial-y) max($sp-13, $sp-20-factorial-x);
$base-field__placeholder-color: $my-gray600;
$base-field__placeholder-style: $my-gray600;

.base-field {
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

  &__textarea,
  &__input {
    width: 100%;
    font-size: $base-field__input-font-size;
    font-weight: $base-field__input-font-weight;
    line-height: $base-field__input-line-height;
    color: $base-field__input-font-color;
    padding: $base-field__input-padding;
    border: none;
    border-bottom: $base-field__input-border;
    position: relative;
    background-color: $base-field__input-background-color;

    @media #{$sm} {
      padding: $base-field__input-padding;
    }

    &:focus-visible {
      outline: none;
    }
  }

  &__textarea {
    height: 100%;
  }

  &:focus-within {
    #{$this}__label {
      opacity: 1;
      color: $base-field__input-border--focus;
    }
    #{$this}__textarea,
    #{$this}__input {
      border-bottom: $base-field__input-border--focus;
    }
  }

  &.error {
    #{$this}__label {
      opacity: 0.5;
      color: $base-field__label-font-color--error;
    }

    #{$this}__textarea,
    #{$this}__input {
      border-bottom: $base-field__input-border--error !important;
      background-color: $base-field__input-background-color--error !important;
    }
  }

  ::placeholder {
    color: $base-field__placeholder-color;
    font-style: italic;
  }
}
</style>
