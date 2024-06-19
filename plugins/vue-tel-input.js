import VueTelInput from 'vue-tel-input'
import '~/node_modules/vue-tel-input/dist/vue-tel-input.css'
import { defineNuxtPlugin } from '#app'

const globalOptions = {
  mode: 'international',
  defaultCountry: 'ID',
  autoDefaultCountry: true,
  dropdownOptions: {
    showDialCodeInSelection: true,
  },
  autoFocus: true,
  inputOptions: {
    maxlength: 15,
    required: true,
    type: 'tel',
  },
  validCharactersOnly: true,
  styleClasses: [
    'custom-vti',
  ],
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueTelInput, globalOptions)
})
