<template>
  <main class="game">
    <section class="game__section game__section--left">
      <ClickerPanel />
    </section>
    <section class="game__section game__section--center">
      Panel centralny
    </section>
    <section class="game__section game__section--right">
      Panel prawy
    </section>
  </main>
</template>

<script>
import ClickerPanel from './components/ClickerPanel/index'

export default {
  name: 'App',
  components: {
    ClickerPanel,
  }
}
</script>

<style lang="sass">
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
