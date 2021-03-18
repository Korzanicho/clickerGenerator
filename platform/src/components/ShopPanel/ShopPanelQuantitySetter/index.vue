<template>
  <div class="ShopPanelQuantitySetter">
    <span class="ShopPanelQuantitySetter__item">Buy</span>
    <span
      class="ShopPanelQuantitySetter__item"
      :class="
        itemsQuantity === 1 ?
          'ShopPanelQuantitySetter__item--active' :
          'ShopPanelQuantitySetter__item--clicable'
      "
      @click="changeActiveItem(1)"
    >
      1
    </span>
    <span
      class="ShopPanelQuantitySetter__item"
      :class="
        itemsQuantity === 5 ?
          'ShopPanelQuantitySetter__item--active' :
          'ShopPanelQuantitySetter__item--clicable'
      "
      @click="changeActiveItem(5)"
    >
      5
    </span>
    <span
      class="ShopPanelQuantitySetter__item"
      :class="
        itemsQuantity === 10 ?
          'ShopPanelQuantitySetter__item--active' :
          'ShopPanelQuantitySetter__item--clicable'
      "
      @click="changeActiveItem(10)"
    >
      10
    </span>
  </div>
</template>

<script src="./component.js"></script>
<style src="./style.sass" lang="sass"></style>
