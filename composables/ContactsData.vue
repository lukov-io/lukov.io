<template>
  <div class="contacts-data">
    <ContactsItem label="Address">
      Schimmelt 245611 ZX <br>
      EindhovenThe Netherlands
    </ContactsItem>
    <ContactsItem label="Telephone">
      +49 89 411422250
    </ContactsItem>
    <ContactsItem label="Mail">
      lukovio
    </ContactsItem>
  </div>
</template>

<script>
import ContactsItem from '~/components/ContactsItem.vue'

export default {
  name: 'ContactsData',
  components: {
    ContactsItem,
  },

}
</script>

<style lang="scss" scoped>
$contacts-data-column-gap: max($sp-s, $sp-s-factorial-x);
$contacts-data-row-gap: max($sp-s, $sp-s-factorial-y);

.contacts-data {
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: $contacts-data-row-gap $contacts-data-column-gap;
}
</style>
