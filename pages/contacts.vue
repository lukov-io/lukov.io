<template>
  <div class="contacts">
    <BaseInput
      id="contacts-phone"
      type="tel"
      label="Your name:"
      model-value=""
    />
  </div>
</template>

<script>
import BaseInput from '~/components/forms/components/BaseInput.vue'

export default {
  name: 'Contacts',
  components: { BaseInput },
}
</script>

<style scoped lang="scss">
$main-gap: 2vw;

.contacts {
  height: 100%;
  place-items: center;
  gap: $main-gap;
}
</style>
