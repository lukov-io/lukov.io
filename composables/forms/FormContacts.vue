<template>
  <form class="form-contacts">
    <BaseField
      id="contacts-name"
      v-model="formStore.formData.name"
      class="form-contacts__input"
      tag="input"
      type="text"
      placeholder="John Doe"
      label="Your name:"
      required
    />
    <BaseField
      id="contacts-phone"
      v-model="formStore.formData.phone"
      class="form-contacts__input"
      tag="input"
      type="tel"
      label="Phone"
      required
    />
    <BaseField
      id="contacts-email"
      v-model="formStore.formData.email"
      class="form-contacts__input"
      tag="input"
      type="mail"
      placeholder="john_doe@gmail.com"
      label="Email:"
      required
    />
    <BaseField
      id="contacts-details"
      v-model="formStore.formData.details"
      class="form-contacts__textarea"
      tag="textarea"
      placeholder="Enter a detailed description of your project here..."
      label="Project details"
    />
    <div class="form-contacts__buttons">
      <AppButton
        tag="span"
        button-text="Attach"
        collapse-on-mobile="collapse"
      >
        <IconClip />
      </AppButton>
      <AppButton
        tag="button"
        button-text="Send"
        collapse-on-mobile="collapse"
      >
        <IconEnvelope />
      </AppButton>
    </div>
  </form>
</template>

<script>
import BaseField from '~/components/forms/BaseField.vue'
import AppButton from '~/composables/AppButton.vue'
import IconEnvelope from '~/components/icons/IconEnvelope.vue'
import IconClip from '~/components/icons/IconClip.vue'
import { useFormStore } from '~/stores/form-store'

export default {
  name: 'FormContacts',
  components: { BaseField, AppButton, IconEnvelope, IconClip },
  data() {
    return {
      formStore: useFormStore(),
    }
  },
}
</script>

<style lang="scss" scoped>
.form-contacts {
  width: 100%;
  height: auto;
  display: grid;
  grid-template: 1fr 1fr 3fr 1fr / 1fr 1fr;
  gap: max($sp-m, $sp-m-factorial-y) max($sp-m, $sp-m-factorial-x);

  $this: &;

  @media #{$sm} {
    grid-template: 1fr 1fr 1fr 3fr 1fr / 1fr;
    gap: max($sp-xxs, $sp-xxs-factorial-y);
  }

  &__input {
    &:nth-child(1) {
      grid-area: 1 / 1 / span 1 / span 1;
    }

    &:nth-child(2) {
      grid-area: span 1 / span 1 / 2 / 3;
    }

    &:nth-child(3) {
      grid-area: 2 / 1 / span 1 / span 1;
    }
  }

  &__textarea {
    grid-area: 3 / 1 / span 1 / span 2;
    height: 90%;
  }

  &__buttons {
    grid-area: 4 / 1 / span 1 / span 2;
    display: flex;
    justify-content: space-between;
    align-self: center;
  }

  &__input:nth-child(-n+3),
  &__textarea,
  &__buttons {
    @media #{$sm} {
      grid-area: auto;
    }
  }
}
</style>
