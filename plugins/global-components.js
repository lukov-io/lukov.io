import { defineNuxtPlugin } from '#app'
import ModalContainer from '~/components/modals/ModalContainer'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('ModalContainer', ModalContainer)
})
