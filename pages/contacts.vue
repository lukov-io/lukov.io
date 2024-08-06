<template>
  <div class="contacts">
    <h2>Please tell what project you want to do with us?</h2>
    <div class="contacts__grid">
      <FormContacts class="contacts__form" />
      <div class="contacts__other">
        <ContactsData class="contacts__data" />
        <SocialNetworks />
      </div>
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
$contacts__grid-template: 1fr / 65% 1fr;
$contacts__grid-template-md: 1fr auto / 100%;
$contacts__form-grid-area: 1 / 1 / span 1 / span 1;
$contacts__form-margin-bottom-md: max($sp-l, $sp-l-factorial-y);
$contacts__other-grid-area: span 1 / span 1 / 2 / 3;
$contacts__data-margin-bottom: max($sp-m, $sp-m-factorial-y);

.contacts {
  height: 100%;

  &__grid {
    display: grid;
    grid-template: $contacts__grid-template;
    place-items: start start;
    gap: $main-gap;

    @media #{$md}, (orientation: portrait) {
      grid-template: $contacts__grid-template-md;
    }
  }

  &__form {
    grid-area: $contacts__form-grid-area;

    @media #{$md} {
      margin-bottom: $contacts__form-margin-bottom-md;
    }
  }

  &__other {
    grid-area: $contacts__other-grid-area;

    @media #{$md}, (orientation: portrait) {
      display: flex;
      flex-direction: row;
      align-items: end;
      justify-content: space-evenly;
      width: 100%;
    }

    @media #{$sm} {
      display: block;
      width: 100%;
    }
  }

  &__form,
  &__other {
    @media #{$md}, (orientation: portrait) {
      grid-area: auto;
    }
  }

  &__data {
    margin-bottom: 0;

    @media #{$sm} {
      margin-bottom: $contacts__data-margin-bottom;
    }
  }
}
</style>
