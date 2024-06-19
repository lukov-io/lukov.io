<template>
  <NuxtLayout>
    <NuxtPage />
    <ModalContainer>
      <FormRequest />
    </ModalContainer>
  </NuxtLayout>
</template>

<script>
import ModalContainer from './components/modals/ModalContainer'
import FormRequest from './components/forms/FormRequest'

export default {
  components: { ModalContainer, FormRequest },
}
</script>
