<template>
  <div class="home">
    <HeartCanvas class="home__heart" />
    <div class="home__text-info">
      <MainTitle class="home__title">
        <template #color-word>
          <span ref="changing-words">
            {{ currentWord }}
          </span>
        </template>
        <template #monochrome-word>
          <span>
            development
          </span>
        </template>
      </MainTitle>
      <p class="home__paragraph">
        Full development package: engineering, design, programming, testing, SEO, optimization, support
      </p>
    </div>
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
  data() {
    return {
      words: ['Software', 'Web', 'Mobile', 'CRM', 'ERP'],
      currentWordIndex: 0,
    }
  },
  computed: {
    currentWord() {
      return this.words[this.currentWordIndex]
    },
  },
  mounted() {
    this.startWordChange()
  },
  beforeUnmounted() {
    clearInterval(wordChangeInterval)
  },
  methods: {
    startWordChange() {
      this.wordChangeInterval = setInterval(() => {
        this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length
      }, 3000)
    },
  },
}
</script>

<style scoped lang="scss">
$area-slogan-max-height: 31vh;
$main-gap: 2vw;
$home__paragraph-font-size: max($fs-m, $fs-xxl-factorial);
$home__paragraph-font-weight: $fw-custom-550;
$home__paragraph-line-height: $lh-xl;

.home {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr auto auto;
  height: 100%;
  place-items: center;
  column-gap: $main-gap;

  @media #{$md}, (orientation: portrait) {
    grid-template-columns: 100%;
    grid-template-rows: 1fr auto auto;
  }

  &__heart {
    @media #{$md}, (orientation: portrait) {
      align-self: end;
      grid-area: span 1 / span 1 / 3 / 2;
    }
  }

  &__paragraph {
    white-space: balance;
    width: fit-content;
    font-size: $home__paragraph-font-size;
    font-weight: $home__paragraph-font-weight;
    line-height: $home__paragraph-line-height;
    text-align: left;

  }

  &__text-info {
    display: block;
    width: fit-content;

    @media #{$md}, (orientation: portrait) {
      place-self: center center;
    }
  }

  .slogan {
    grid-column: 1 / 3;
    align-self: end;
    height: 100%;
    width: 100%;
    max-height: $area-slogan-max-height;

    @media #{$md}, (orientation: portrait) {
      grid-column: 1 / 2;
      height: auto;
    }
  }
}
</style>
