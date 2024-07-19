<template>
  <dialog
    ref="modal-container"
    class="modal"
  >
    <span
      class="modal__close"
      role="button"
      title="Close"
      @click="closeModal"
    >
      <svg
        class="modal__close-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 28 28"
        fill="none"
      >
        <line
          x1="2.35355"
          y1="1.64645"
          x2="26.3536"
          y2="25.6464"
          stroke="inherit"
        />
        <line
          y1="-0.5"
          x2="33.9411"
          y2="-0.5"
          transform="matrix(-0.707107 0.707107 0.707107 0.707107 26 2)"
          stroke="inherit"
        />
      </svg>
    </span>
    <div class="modal__content">
      <slot />
    </div>
  </dialog>
</template>

<script>
import { useModalStore } from '~/stores/modal-store'

export default {
  name: 'ModalContainer',
  setup() {
    return {
      modalStore: useModalStore(),
    }
  },
  data() {
    return {
      modal: null,
    }
  },
  computed: {
    isModalOpen() {
      return this.modalStore.isModalOpen
    },
  },
  watch: {
    isModalOpen(newVal) {
      if (newVal) {
        this.modal.showModal()
      }
      else {
        this.modal.close()
      }
    },
  },
  mounted() {
    this.modal = this.$refs['modal-container']
  },
  methods: {
    closeModal() {
      this.modalStore.closeModal()
    },
  },
}
</script>

<style lang="scss" scoped>
$modal-width: max(500px, 34vw);
$modal-min-width: 320px;
$modal-height: max(300px, 30vh);
$modal-background-color: $background--light;
$modal-padding-left: max(148px, 6vw);
$modal-padding-left-sm: 1em;
$modal-border-radius: 8px;
$modal__close-svg-stroke-color: $my-gray-dark;
$modal__close-svg-width: max($sp-15, $sp-15-factorial-x);

.modal {
  width: $modal-width;
  min-width: $modal-min-width;
  height: $modal-height;
  border: none;
  position: relative;
  padding-left: $modal-padding-left;
  background-color: $modal-background-color;
  border-radius: $modal-border-radius;

  @media #{$sm} {
    width: 100vw;
    padding-left: 1em;
  }

  &::after {
    height: inherit;
    content: "";
    background-image: url("/assets/img/lk.svg");
    background-position: left;
    background-repeat: no-repeat;
    background-size: auto 100%;
    border-radius: inherit;
    opacity: 1;
    inset: 0;
    position: absolute;
    z-index: -1;

    @media  #{$sm} {
      opacity: 0.3;
    }
  }

  &__close {
    position: absolute;
    top: 5px;
    right: 6px;
    line-height: 1;

    &-svg {
      stroke: $modal__close-svg-stroke-color;
      width: $modal__close-svg-width;
      aspect-ratio: 1 / 1;

      @media #{$mouse-device}  {
        &:hover {
          scale: 0.8;
          transition: scale 0.3s ease-in-out, stroke 0.3s ease-in-out;
          stroke: black;
          stroke-width: 2;
        }
      }
    }
  }

  &__content {
    height: 100%;
    position: relative;
  }

  &__message {
    width: 200px;
    height: 100px;
    background-color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    translate: (-50% -50%);
    z-index: 1;
    display: grid;
    place-items: center;
  }
}
</style>
