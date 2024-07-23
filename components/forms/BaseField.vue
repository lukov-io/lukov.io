<template>
  <div
    class="base-field"
    :class="{ error: hasError }"
  >
    <label
      v-if="label"
      class="base-field__label"
      :for="id"
    >{{ label }}</label>
    <component
      :is="tag"
      :id="id"
      :class="inputClass"
      :type="type"
      v-bind="$attrs"
      :value="innerValue"
      @input="innerValue = $event.target.value;"
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
      validator: value => ['input', 'textarea'].includes(value),
    },
  },
  emits: ['update:modelValue'],
  computed: {
    innerValue: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      },
    },
    inputClass() {
      return {
        'base-field__input': this.tag === 'input',
        'base-field__textarea': this.tag === 'textarea',
      }
    },
  },
}
</script>

<style lang="scss" scoped>
$base-field-height: fit-content;
$base-field__label-font-size: max($fs-xs, $fs-m-factorial);
$base-field__label-font-weight: $fw-normal;
$base-field__label-line-height: $lh-xxl;
$base-field__label-font-color: $text--primary-dark;
$base-field__label-font-color--focus: $text--dark;
$base-field__label-font-color--error: $my-info;
$base-field__label-padding: 0 0 0 3px;
$base-field__input-font-size: max($fs-xs, $fs-m-factorial);
$base-field__input-font-weight: $fw-normal;
$base-field__input-line-height: $lh-xxl;
$base-field__input-font-color: $text--dark;
$base-field__input-background-color: $background--primary;
$base-field__input-background-color--error: rgba(133, 18, 18, 0.1);
$base-field__input-border: $border-1px $border-color--grey;
$base-field__input-border--error: $border-1px $border-color--danger;
$base-field__input-border--focus: $border-1px $border-color--blue;
$base-field__input-padding: clamp(13px, 3vw, 20px);

.base-field {
  height: $base-field-height;
  width: auto;

  $this: &;

  &__label {
    width: 100%;
    font-size: $base-field__label-font-size;
    font-weight: $base-field__label-font-weight;
    line-height: $base-field__label-line-height;
    color: $base-field__label-font-color;
    padding: $base-field__label-padding;
    opacity: 0.5;
  }

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

    &:focus-visible {
      outline: none;
    }
  }

  &:focus-within {
    #{$this}__label {
      opacity: 1;
      color: $base-field__input-border--focus;
    }

    #{$this}__input {
      border-bottom: $base-field__input-border--focus;
    }
  }

  &.error {
    #{$this}__label {
      opacity: 0.5;
      color: $base-field__label-font-color--error;
    }

    #{$this}__input {
      border-bottom: $base-field__input-border--error;
      background-color: $base-field__input-background-color--error;
    }
  }
}
</style>
