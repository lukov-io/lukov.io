<template>
  <div class="contacts-item">
    <span class="contacts-item__label">{{ label }}</span>
    <span class="contacts-item__text">
      <slot />
    </span>
  </div>
</template>

<script>
export default {
  name: 'ContactsItem',
  props: {
    label: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped lang="scss">
$contacts-item__label-font-size: max($fs-m, $fs-xxl-factorial);
$contacts-item__label-line-height: $lh-xl;
$contacts-item__label-font-weight: $fw-custom-550;
$contacts-item__label-margin-bottom: max($sp-xxs, $sp-xxs-factorial-y);
$contacts-item__label-font-color: $text--primary;
$contacts-item__text-font-color: $text--dark;
$contacts-item__label-text-size: max($fs-xs, $fs-m-factorial);

.contacts-item {
  max-width: 250px;
  display: flex;
  flex-direction: column;

  &__label {
    font-size: $contacts-item__label-font-size;
    color: $contacts-item__label-font-color;
    line-height: $contacts-item__label-line-height;
    font-weight: $contacts-item__label-font-weight;
    margin-bottom: 8px;
  }

  &__text {
    color: $contacts-item__text-font-color;
    font-size: $contacts-item__label-text-size;
    white-space: balance;
  }
}
</style>
