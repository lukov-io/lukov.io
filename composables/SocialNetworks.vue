<template>
  <div class="social-networks">
    <SocialNetworksItem
      link-to="#"
      icon="icons-font--tg"
    >
      Telegram
    </SocialNetworksItem>
    <SocialNetworksItem
      link-to="#"
      icon="icons-font--in"
    >
      Instagram
    </SocialNetworksItem>
    <SocialNetworksItem
      link-to="#"
      icon="icons-font--wa"
    >
      WhatsApp
    </SocialNetworksItem>
  </div>
</template>

<script>
import SocialNetworksItem from '~/components/SocialNetworksItem'

export default {
  name: 'SocialNetworks',
  components: { SocialNetworksItem },
}
</script>

<style lang="scss" scoped>
$social-networks-row-gap: max($sp-15, $sp-15-factorial-y);
$social-networks-column-gap: max($sp-15, $sp-15-factorial-x);

.social-networks {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: $social-networks-row-gap $social-networks-column-gap;
}
</style>
