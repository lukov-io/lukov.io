<template>
  <div class="wrapper" id="home">
    <MainHeader class="area-header"/>
    <NavMenu class="area-saidbar" orientation="vertical"/>
    <div class="main">
      <HeartSvg/>
      <MainTitle class="main__title">
        <span class="main__title-color-word">Профессиональная</span><br>
        <span class="main__title-black-word">Разработка<br>
          сайтов</span>
      </MainTitle>
    </div>
    <MainSlogan class="area-slogan"></MainSlogan>
  </div>
</template>

<script>
import NavMenu from '~/composables/NavMenu.vue'
import MainHeader from '~/composables/MainHeader.vue'
import MainSlogan from '~/components/MainSlogan.vue'
import HeartSvg from '~/components/HeartSvg.vue'
import MainTitle from '~/components/MainTitle.vue'

export default {
  name: 'stub',
  components: { MainTitle, HeartSvg, MainSlogan, MainHeader, NavMenu }
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
  grid-template-columns: auto 1fr 90px;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header header"
    "saidbar main main"
    ". slogan slogan";

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
    justify-items: center;
    column-gap: $main-gap;

    &__title {
      flex: 1 0 auto;

      &-color-word {
        font-size: $main-slogan__color-word-font-size;
        font-weight: $main-slogan__color-word-font-weight;
        line-height: $main-slogan__color-word-line-height;
        text-align: left;
        background: $gradient165deg;
        background-clip: text;
        color: transparent;
      }

      &-black-word {
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
