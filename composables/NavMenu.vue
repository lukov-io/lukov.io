<template>
  <nav
    class="nav-menu"
    :class="[orientation, textColor]"
  >
    <NavItem
      :link-name="'Home'"
      :path-to="'/home'"
    />
    <NavItem
      :link-name="'Works'"
      :path-to="'/works'"
    />
    <NavItem
      :link-name="'Agency'"
      :path-to="'/agency'"
    />
    <NavItem
      :link-name="'Partners'"
      :path-to="'/partners'"
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
        return ['', 'vertical'].includes(value)
      },
    },
    textColor: {
      type: String,
      required: false,
      default: '',
      validator(value) {
        return ['', 'light-text'].includes(value)
      },
    },
  },
}
</script>

<style scoped lang="scss">
$nav-menu-row-gap-min: $sp-xs;
$nav-menu-row-gap-factor: $sp-xs-factorial-y;
$nav-menu-vertical-column-gap: max($sp-s, $sp-s-factorial-y);
$nav-menu-vertical-padding: 0 max($sp-xxs, 2vw);

.nav-menu {
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: $nav-menu-vertical-column-gap;

  &.vertical {
    flex-direction: row;
    writing-mode: vertical-rl;
    text-orientation: sideways;
    padding: $nav-menu-vertical-padding;
    column-gap: $nav-menu-vertical-column-gap;
  }
}
</style>
