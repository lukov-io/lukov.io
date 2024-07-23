<template>
  <div class="contacts">
    <form>
      <BaseField
        id="contacts-name"
        v-model="formStore.formData.name"
        tag="input"
        type="text"
        label="Your name:"
      />
    </form>

    {{ formStore.formData }}
  </div>
</template>

<script>
import BaseField from '~/components/forms/BaseField.vue'
import { useFormStore } from '~/stores/form-store'

export default {
  name: 'Contacts',
  components: { BaseField },
  data() {
    return {
      formStore: useFormStore(),
    }
  },
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
