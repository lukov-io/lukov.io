<template>
  <nav class="main-nav">
    <NavItem
      :link-name="'Home'"
      :path-to="'/'"
      @toggle-menu="$emit('toggle-menu')"
    />
    <NavItem
      :link-name="'What we do'"
      :path-to="'/what-we-do'"
      @toggle-menu="$emit('toggle-menu')"
    />
    <NavItem
      :link-name="'Works'"
      :path-to="'/works'"
      @toggle-menu="$emit('toggle-menu')"
    />
    <NavItem
      :link-name="'About Us'"
      :path-to="'/about-us'"
      @toggle-menu="$emit('toggle-menu')"
    />
    <NavItem
      :link-name="'Team'"
      :path-to="'/team'"
      @toggle-menu="$emit('toggle-menu')"
    />
    <NavItem
      :link-name="'Contacts'"
      :path-to="'/contacts'"
      @toggle-menu="$emit('toggle-menu')"
    />
  </nav>
</template>

<script>
import NavItem from '~/components/NavItem.vue'

export default {
  name: 'MainNav',
  components: { NavItem },
  emits: ['toggle-menu'],
}
</script>

<style scoped lang="scss">
$nav-menu-row-gap: max($sp-xs, $sp-xs-factorial-y);
$nav-menu-vertical-column-gap: max($sp-s, $sp-s-factorial-y);
$nav-menu-vertical-padding: max($sp-20, $sp-120-factorial-y) max($sp-xxs, 2vw);

.main-nav {
  display: inline-flex;
  height: 100%;
  flex-direction: row;
  writing-mode: vertical-rl;
  justify-content: space-between;
  text-orientation: sideways;
  padding: $nav-menu-vertical-padding;
  column-gap: $nav-menu-vertical-column-gap;

  @media #{$md}, (orientation: portrait) {
    height: auto;
    flex-direction: column;
    justify-content: center;
    row-gap: $nav-menu-vertical-column-gap;
    writing-mode: unset;
    text-orientation: unset;
  }
}
</style>
