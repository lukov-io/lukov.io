import { defineStore } from 'pinia'

export const useDarkMode = defineStore('darkMode', {
  state: () => ({
    darkMode: false,
  }),

  actions: {
    toggleDarkMode() {
      let body = document.querySelector('body')
      this.darkMode = !this.darkMode
      this.darkMode ? body.classList.add('dark-mode') : body.classList.remove('dark-mode')
    },
  },
})
