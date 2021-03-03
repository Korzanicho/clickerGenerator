<template>
  <main class="game">
    <section class="game__section game__section--left">
      <ClickerPanel />
    </section>
    <section class="game__section game__section--center">
      Panel centralny
    </section>
    <section class="game__section game__section--right">
      <ShopPanel />
    </section>
  </main>
</template>

<script>
import ClickerPanel from './components/ClickerPanel/index.vue';
import ShopPanel from './components/ShopPanel/index.vue';

export default {
  name: 'App',
  components: {
    ClickerPanel,
    ShopPanel,
  },
};
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@100;300;400;900&display=swap');
*
  font-family: 'Londrina Solid', cursive

.game
  display: flex
  width: 100%
  min-height: 100vh
  background: url('./assets/background.png')
  &__section
    padding: 20px
    &--left
      flex-basis: 30%
      border-right: 3px dashed #000
    &--center
      flex-basis: 50%
      border-right: 3px dashed #000
    &--right
      flex-basis: 20%
</style>
