<template>
  <nav
    class="nav-menu"
    :class="[orientation]"
  >
    <NavItem
      :link-name="'Home'"
      :path-to="'/'"
    />
    <NavItem
      :link-name="'What we do'"
      :path-to="'/what-we-do'"
    />
    <NavItem
      :link-name="'Works'"
      :path-to="'/works'"
    />
    <NavItem
      :link-name="'About Us'"
      :path-to="'/about-us'"
    />
    <NavItem
      :link-name="'Team'"
      :path-to="'/team'"
    />
    <NavItem
      :link-name="'Contacts'"
      :path-to="'/contacts'"
    />
  </nav>
</template>

<script>
import NavItem from '~/components/NavItem.vue'

export default {
  name: 'NavMenu',
  components: { NavItem },
  props: {
    orientation: {
      type: String,
      required: false,
      default: '',
      validator(value) {
        return ['', 'horizontal'].includes(value)
      },
    },
  },
}
</script>

<style scoped lang="scss">
$nav-menu-row-gap: max($sp-xs, $sp-xs-factorial-y);
$nav-menu-vertical-column-gap: max($sp-s, $sp-s-factorial-y);
$nav-menu-vertical-padding: max($sp-20, $sp-120-factorial-y) max($sp-xxs, 2vw);

.nav-menu {
  display: inline-flex;
  flex-direction: row;
  writing-mode: vertical-rl;
  justify-content: space-between;
  text-orientation: sideways;
  padding: $nav-menu-vertical-padding;
  column-gap: $nav-menu-vertical-column-gap;

  @media #{$sm} {
    display: none;
    flex-direction: column;
    justify-content: center;
    row-gap: $nav-menu-vertical-column-gap;
    writing-mode: unset;
    text-orientation: unset;
  }
}
</style>
