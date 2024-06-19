<template>
  <form
    class="form-request"
    :class="{ loading: isSubmitting }"
    @submit.prevent="submitForm"
  >
    <h6 class="form-request__title">
      Send a request
    </h6>
    <vue-tel-input v-model="phone" />
    <label class="form-request__checkbox-label">
      <input
        class="form-request__checkbox"
        type="checkbox"
        name="success"
        required
      >
      I agree to share the information provided
    </label>
    <div class="form-request__footer">
      <p
        v-if="message !== ''"
        class="form-request__message"
        @click="clearMessage"
      >
        {{ message }}
      </p>
      <AppButton
        class="form-request__button"
        tag="button"
        type="submit"
        button-text="Send"
        :disabled="isSubmitting"
        @submit.prevent="submitForm"
      >
        <IconPen />
      </AppButton>
    </div>
  </form>
</template>

<script>
import axios from 'axios'
import AppButton from '~/composables/AppButton'
import IconPen from '~/components/icons/IconPen'
import { useModalStore } from '~/stores/modal'

export default {
  name: 'FormRequest',
  components: {
    AppButton,
    IconPen,
  },
  setup() {
    return {
      modalStore: useModalStore(),
    }
  },
  data() {
    return {
      phone: '',
      message: '',
      isSubmitting: false,
    }
  },
  methods: {
    async submitForm() {
      this.isSubmitting = true

      try {
        await axios.post('/request-call.php', {
          phone: this.phone,
        })
        this.message = 'Successful submission'

        setTimeout(() => {
          this.closeModal()
        }, 2000)
      }
      catch (error) {
        this.message = 'Sending error'
      }
      finally {
        this.isSubmitting = false
      }
    },

    clearMessage() {
      this.message = ''
    },

    closeModal() {
      this.modalStore.closeModal()
    },
  },
}
</script>

<style lang="scss" scoped>
$form-request__checkbox-width: max(20px, 1.5vw);
$form-request__checkbox-label-column-gap: max(10px, 1vw);
$form-request__checkbox-label-font-size: max($fs-s, $fs-s-factorial);
$form-request-row-gap: max(10px, 1vw);

.form-request {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  row-gap: $form-request-row-gap;

  &__title {
    text-transform: uppercase;
  }

  &__checkbox {
    width: $form-request__checkbox-width;
    aspect-ratio: 1 / 1;

    &-label {
      font-size: $form-request__checkbox-label-font-size;
      display: flex;
      align-items: center;
      column-gap: $form-request__checkbox-label-column-gap;
    }
  }

  &__input {
    &-label {
      color: $text--primary;
    }
  }

  &__footer {
    display: flex;
    align-items: center;
  }

  &__button {
    margin-left: auto;
  }

  &__message {
    font-size: max($fs-m, $fs-m-factorial);
    margin: 0;
    vertical-align: center;
  }

  &.loading {
    opacity: 0.6;
    pointer-events: none;
  }
}
</style>
