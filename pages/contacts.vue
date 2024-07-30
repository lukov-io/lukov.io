<template>
  <div class="contacts">
    <FormContacts />
    <div>
      <ContactsData />
      <SocialNetworks />
    </div>
  </div>
</template>

<script>
import FormContacts from '~/composables/forms/FormContacts'
import ContactsData from '~/composables/ContactsData'
import SocialNetworks from '~/composables/SocialNetworks'

export default {
  name: 'Contacts',
  components: { FormContacts, ContactsData, SocialNetworks },
}
</script>

<style scoped lang="scss">
$main-gap: 2vw;

.contacts {
  height: 100%;
  display: flex;
  flex-direction: row;
  place-items: center;
  gap: $main-gap;
}
</style>
