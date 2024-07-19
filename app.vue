<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from {
  perspective: 130px;
  translate: 50%;
  transform: rotateY(90deg);
  scale: 1;
}

.page-leave-to {
  perspective: 130px;
  translate: -50%;
  transform: rotateY(-90deg);
  scale: 1;
}
</style>
