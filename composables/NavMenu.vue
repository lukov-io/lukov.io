<template>
  <div class="nav-menu" :class="[ orientation, textColor ]">
    <NavItem :link-name="'Home'" :path-to="'/'" />
    <NavItem :link-name="'Works'" :path-to="'/works'" />
    <NavItem :link-name="'Agency'" :path-to="'/agency'" />
    <NavItem :link-name="'Partners'" :path-to="'/partners'" />
    <NavItem :link-name="'Contacts'" :path-to="'/contacts'" />
  </div>
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
      default: "",
      validator(value) {
        return ["", "vertical"].includes(value);
      }
    },
    textColor: {
      type: String,
      required: false,
      default: "",
      validator(value) {
        return ["", "light-text"].includes(value)
      }
    },
  }
}
</script>

<style scoped lang="scss">
$nav-menu-row-gap-min: $sp-xs;
$nav-menu-row-gap-factor: $sp-xs-factorial-y;
$nav-menu-vertical-column-gap-min: $sp-m;
$nav-menu-vertical-column-gap-factor: $sp-m-factorial-y;

.nav-menu {
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;

  @include adaptive(
      row-gap,
      $nav-menu-row-gap-min,
      $nav-menu-row-gap-factor
  );

  &.vertical {
    flex-direction: row;
    -webkit-writing-mode: vertical-rl;
    writing-mode: vertical-rl;
    text-orientation: sideways;
    padding: 0 max($sp-xxs, 2vw);

    @include adaptive(
        column-gap,
        $nav-menu-vertical-column-gap-min,
        $nav-menu-vertical-column-gap-factor
    );

  }
}
</style>

