import { useVuelidate } from '@vuelidate/core'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('vuelidate', useVuelidate)
})
