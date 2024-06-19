<template>
  <div class="wrapper">
    <MainHeader class="area-header" />
    <div class="main">
      <HeartSvg />
      <MainTitle class="main__title">
        <span class="main__title--color-word">Powerfull</span><br>
        <span class="main__title--black-word">Web<br>
          development</span>
      </MainTitle>
    </div>
    <MainSlogan class="area-slogan" />
  </div>
</template>

<script>
import MainHeader from '~/composables/MainHeader.vue'
import MainSlogan from '~/components/MainSlogan.vue'
import HeartSvg from '~/components/HeartSvg.vue'
import MainTitle from '~/components/MainTitle.vue'

export default {
  name: 'Stub',
  components: { MainTitle, HeartSvg, MainSlogan, MainHeader },
}
</script>

<style scoped lang="scss">
$area-slogan-max-height: 31vh;
$main-gap: 2vw;
$main-slogan__color-word-font-size: max($fs-big-min, $fs-big-xxs-factorial);
$main-slogan__color-word-font-weight: $fw-custom-550;
$main-slogan__color-word-line-height: $lh-xl;

.wrapper {
  display: grid;
  height: 100dvh;
  grid-template: "header header header" auto "saidbar main main" 1fr ". slogan slogan" auto / auto 1fr 90px;

  .area-header {
    grid-area: header;
  }

  .area-saidbar {
    grid-area: saidbar;
  }

  .area-slogan {
    grid-area: slogan;
    height: 100%;
    align-self: end;
    max-height: $area-slogan-max-height;
  }

  .main {
    grid-area: main;
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: $main-gap;

    &__title {
      flex: 1 0 auto;

      &--color-word {
        font-size: $main-slogan__color-word-font-size;
        font-weight: $main-slogan__color-word-font-weight;
        line-height: $main-slogan__color-word-line-height;
        text-align: left;
        background: $gradient165deg;
        background-clip: text;
        color: transparent;
      }

      &--black-word {
        line-height: $lh-sm;
        text-align: left;
        text-transform: uppercase;
      }

      @media #{$md} {
        flex: 0 0 auto;
      }
    }

    @media #{$md} {
      flex-direction: column;
      row-gap: $main-gap;
      justify-content: center;
    }
  }
}
</style>
