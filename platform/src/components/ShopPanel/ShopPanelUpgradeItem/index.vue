<template>
  <div
    class="ShopPanelUpgradeItem"
    @click="$emit('upgradeItem', item.slug)"
  >
    <img
      :alt="item.name"
      :src="require(`../../../assets/${item.image}`)"
    >
    {{ item.name }}
  </div>
</template>

<script src="./component.js"></script>
<style src="./style.sass" lang="sass"></style>
