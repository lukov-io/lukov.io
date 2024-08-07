<template>
  <form
    ref="form"
    class="form-contacts"
    @submit.prevent="submitForm"
  >
    <BaseField
      id="contacts-name"
      v-model="store.formData.name"
      :has-error="v$.name.$error"
      class="form-contacts__input"
      tag="input"
      type="text"
      placeholder="John Doe"
      label="Your name:"
      @change="handleChange('name')"
    />
    <BaseTelInput
      id="contacts-tel-input"
      v-model="store.formData.phone"
      label="Phone:"
      :has-error="v$.phone.$error"
      @change="handleChange('phone')"
    />
    <BaseField
      id="contacts-email"
      v-model="store.formData.email"
      :has-error="v$.email.$error"
      class="form-contacts__input"
      tag="input"
      type="email"
      placeholder="john_doe@gmail.com"
      label="Email:"
      @change="handleChange('email')"
    />
    <BaseField
      id="contacts-details"
      v-model="store.formData.details"
      :has-error="v$.details.$error"
      class="form-contacts__textarea"
      tag="textarea"
      placeholder="Enter a detailed description of your project here..."
      label="Project details"
      @change="handleChange('details')"
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
        :disabled="isSubmitDisabled"
      >
        <IconEnvelope />
      </AppButton>
    </div>
  </form>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { useFormStore } from '~/stores/form-store' // Импортируйте свой store
import BaseField from '~/components/forms/BaseField.vue'
import BaseTelInput from '~/components/forms/BaseTelInput.vue'
import AppButton from '~/composables/AppButton.vue'
import IconEnvelope from '~/components/icons/IconEnvelope.vue'
import IconClip from '~/components/icons/IconClip.vue'
import validRules from '~/validators/validation-form-contact'

export default {
  name: 'FormContacts',
  components: { BaseField, AppButton, IconEnvelope, IconClip, BaseTelInput },

  setup() {
    const store = useFormStore()
    const v$ = useVuelidate(validRules, store.formData)

    return { v$, store }
  },

  data() {
    return {
      isSubmitting: false,
    }
  },
  computed: {
    isSubmitDisabled() {
      return this.isSubmitting || this.v$.name.$invalid || this.v$.phone.$invalid || this.v$.email.$invalid || this.v$.details.$invalid
    },
  },
  methods: {
    handleChange(field) {
      this.v$[field].$validate()
    },

    async submitForm() {
      this.v$.$touch()
      if (!this.v$.$invalid) {
        this.isSubmitting = true
        try {
          const response = await axios.post('apiUrl', this.store.formData)
          this.isSubmitting = false
          if (response.data.status === 'error') {
            this.isSubmitting = false
            console.log('fail', response.data.message)
            return
          }

          if (response.data.status) {
            console.log('success')
          }

          else {
            const errorMessage = response.data?.message || 'An error occurred.'
            this.isSubmitting = false
            console.error('fail', errorMessage)
          }
        }
        catch (error) {
          const errorMessage = error.response?.data?.message || 'An error occurred.'
          this.isSubmitting = false
          console.error('fail', errorMessage)
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
$form-contacts-grid-template: auto auto 2.5fr 1fr / 1fr 1fr;
$form-contacts-grid-template-sm: auto auto auto 2.5fr 1fr / 1fr;
$form-contacts-grid-row-gap: max($sp-s, $sp-s-factorial-y);
$form-contacts-grid-column-gap: max($sp-m, $sp-s-factorial-x);
$form-contacts-grid-gap-sm: max($sp-xs, $sp-xs-factorial-y);
$form-contacts-input-first-grid-area: 1 / 1 / span 1 / span 1;
$form-contacts-input-second-grid-area: span 1 / span 1 / 2 / 3;
$form-contacts-input-third-grid-area: 2 / 1 / span 1 / span 1;
$form-contacts-textarea-grid-area: 3 / 1 / span 1 / span 2;
$form-contacts-buttons-grid-area: 4 / 1 / span 1 / span 2;
$form-contacts-buttons-margin-top: max($sp-s, $sp-s-factorial-y);

.form-contacts {
  width: 100%;
  height: auto;
  display: grid;
  grid-template: $form-contacts-grid-template;
  gap: $form-contacts-grid-row-gap $form-contacts-grid-column-gap;

  $this: &;

  @media #{$sm} {
    grid-template: $form-contacts-grid-template-sm;
    gap: $form-contacts-grid-gap-sm;
  }

  &__input {
    &:nth-child(1) {
      grid-area: $form-contacts-input-first-grid-area;
    }

    &:nth-child(2) {
      grid-area: $form-contacts-input-second-grid-area;
    }

    &:nth-child(3) {
      grid-area: $form-contacts-input-third-grid-area;
    }
  }

  &__textarea {
    grid-area: $form-contacts-textarea-grid-area;
    height: 90%;
  }

  &__buttons {
    grid-area: $form-contacts-buttons-grid-area;
    display: flex;
    justify-content: space-between;
    align-self: center;
    margin-top: max($sp-s, $sp-s-factorial-y);
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
