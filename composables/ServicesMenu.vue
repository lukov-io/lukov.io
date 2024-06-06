<template>
  <div class="services-menu d-flex flex-row flex-wrap">
    <ServicesItem path-to="/" :link-name="'Wordpress'"/>
    <ServicesItem path-to="/" :link-name="'Vue.js'"/>
    <ServicesItem path-to="/" :link-name="'Seo'"/>
    <ServicesItem path-to="/" :link-name="'Marketing'"/>
    <ServicesItem path-to="/" :link-name="'Design'"/>
    <ServicesItem path-to="/" :link-name="'Consulting'"/>
    <ServicesItem path-to="/" :link-name="'Support'"/>
    <ServicesItem path-to="/" :link-name="'Optimization'"/>
  </div>
</template>

<script>
import ServicesItem from '~/components/ServicesItem.vue'

export default {
  name: 'ServicesMenu',
  components: { ServicesItem }
}
</script>

<style scoped lang="scss">
.services-menu {
  column-gap: 8px;
}
</style>