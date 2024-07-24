<template>
  <div class="contacts">
    <FormContacts />
  </div>
</template>

<script>
import FormContacts from '~/composables/forms/FormContacts.vue'

export default {
  name: 'Contacts',
  components: { FormContacts },
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
