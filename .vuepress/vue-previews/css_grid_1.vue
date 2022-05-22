<template>
  <div class="container">
    <div class="container__item item">1</div>
    <div class="container__item item">2</div>
    <div class="container__item item">3</div>
    <div class="container__item item">4</div>
  </div>
</template>

<script></script>

<style lang="scss">
.container {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
  &__item {
    &:nth-child(1) {
      background: #b03531;
    }
    &:nth-child(2) {
      background: #33a8a5;
    }
    &:nth-child(3) {
      background: #6a478f;
    }
    &:nth-child(4) {
      background: #da6f2b;
    }
  }
}
.item {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50px;
  min-width: 50px;
  color: #fff;
}
</style>
