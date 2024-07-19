<template>
  <div class="home">
    <HeartCanvas class="home__heart" />
    <MainTitle class="home__title">
      <span class="home__title--color-word">Powerfull</span><br>
      <span class="home__title--black-word">Web<br>
        development</span>
    </MainTitle>
    <MainSlogan class="slogan" />
  </div>
</template>

<script>
import MainSlogan from '~/components/MainSlogan.vue'
import HeartCanvas from '~/components/HeartCanvas.vue'
import MainTitle from '~/components/MainTitle.vue'

export default {
  name: 'Home',
  components: { MainTitle, HeartCanvas, MainSlogan },
}
</script>

<style scoped lang="scss">
$area-slogan-max-height: 31vh;
$main-gap: 2vw;
$main-slogan__color-word-font-size: max($fs-big-min, $fs-big-xxs-factorial);
$main-slogan__color-word-font-weight: $fw-custom-550;
$main-slogan__color-word-line-height: $lh-xl;

.home {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr auto;
  height: 100%;
  place-items: center;
  column-gap: $main-gap;

  @media #{$sm} {
    grid-template-columns: 100%;
    grid-template-rows:  auto auto auto;
  }

  &__heart {
    @media #{$sm} {
      align-self: end;
    }
  }

  &__title {
    flex: 1 0 auto;
    justify-self: start;

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

    @media #{$sm} {
      flex: 0 0 auto;
      place-self: start center;
    }
  }

  .slogan {
    grid-column: 1 / 3;
    align-self: end;
    height: 100%;
    width: 100%;
    max-height: $area-slogan-max-height;

    @media #{$sm} {
      grid-column: 1 / 2;
      height: auto;
    }
  }
}
</style>
