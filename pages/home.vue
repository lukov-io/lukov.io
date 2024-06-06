<template>
  <div class="wrapper" id="home">
    <MainHeader />

    <div class="main">
      <section class="hero">
        <div class="container-fluid">
          <div class="row">
            <div class="col-10 d-flex flex-column justify-content-end">
              <MainTitle>
                Lorem ipsum
                dolor sit amet
              </MainTitle>
            </div>
            <div class="col-2">
              <NavMenu class="vertical"/>
            </div>
            <div class="col-10">
              <ServicesMenu />
            </div>
          </div>
        </div>
      </section>
    </div>

    <div class="footer d-flex align-items-center ">
      <div class="container d-flex justify-content-between">
        <AppButton button-text="Leave a request" text-color="light">
            <IconPen />
        </AppButton>

        <div class="footer__contacts-group d-flex align-items-center">
          <ContactsItem text="Address">
            Schimmelt 245611 ZX EindhovenThe Netherlands
          </ContactsItem>

          <ContactsItem text="Telephone">
            +49 89 411422250
          </ContactsItem>

          <ContactsItem text="Mail">
            lukov.io
          </ContactsItem>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainTitle from '~/components/MainTitle.vue'
import ServicesMenu from '~/composables/ServicesMenu.vue'
import NavMenu from '~/composables/NavMenu.vue'
import AppButton from '~/composables/AppButton.vue'
import IconPen from '~/components/icons/IconPen.vue'
import IconClip from '~/components/icons/IconClip.vue'
import IconArrowLeft from '~/components/icons/IconArrowLeft.vue'
import IconPoint from '~/components/icons/IconPoint.vue'
import ContactsItem from '~/components/ContactsItem.vue'
import MainLogo from '~/components/MainLogo.vue'
import MainHeader from '~/composables/MainHeader.vue'

export default {
  name: 'home',
  components: { MainHeader, ContactsItem, IconPoint, IconArrowLeft, IconClip, IconPen, MainLogo, AppButton, NavMenu, ServicesMenu, MainTitle },
  methods: {
  }
}
</script>

<style scoped lang="scss">

$footer-background-color: $background--info;
$footer-height-min: 120px;
$footer-height-factor: 12vh;
$header-padding-axisY-min: $sp-xxs;
$header-padding-axisY-factor: 0.781vh;
$header-padding-axisY: max(
  $header-padding-axisY-min,
  $header-padding-axisY-factor);

$header-margin-axisX-min: 8px;
$header-margin-axisX-factor: 93px;
$header-margin-axisX: max(
  $header-margin-axisX-min,
  $header-margin-axisX-factor);

.wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.header {
  padding: $header-padding-axisY 0;

  @media #{$sm} {
    padding: $header-padding-axisY-min 0;
  }
}

.main {
  flex: 1 0 auto;
}


.footer {
  flex: 0 0 auto;

  @include adaptive(
      height,
      $footer-height-min,
      $footer-height-factor
  );

  &__contacts-group {
    column-gap: 27px;
  }

  background-color: $footer-background-color;
}
</style>