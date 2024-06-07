<template>
  <div class="contacts-item">
    <span class="contacts-item__label">{{ text }}</span>
    <span class="contacts-item__text">
      <slot />
    </span>
  </div>
</template>

<script>
export default {
  name: 'ContactsItem',
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">

$contacts-item__label-font-size: max($fs-m, $fs-m-factorial);
$contacts-item__label-line-height: $lh-xl;
$contacts-item__label-font-weight: $fw-custom-550;
$contacts-item__label-margin-bottom: $sp-xxs-factorial-y;
$contacts-item__label-font-color: $text--gray;
$contacts-item__text-font-color: $text--white;

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
  }
}

</style>