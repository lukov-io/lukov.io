import { defineStore } from 'pinia'

export const useFormStore = defineStore('form', {
  state: () => ({
    formData: {
      name: '',
      email: '',
      phone: '',
      details: '',
    },
  }),
})
