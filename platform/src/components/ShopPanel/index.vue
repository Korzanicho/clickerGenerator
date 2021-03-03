<template>
  <div class="ShopPanel">
    <h3 class="ShopPanel__header">
      Store
    </h3>
    <div
      v-if="itemsToUpgrade.length > 0"
      class="ShopPanel__upgrade"
    >
      <TheTooltip
        v-for="item in itemsToUpgrade"
        :key="item.slug"
        :tooltip-text="`Upgrade ${item.name} to ${item.level+1} level`"
      >
        <ShopPanelUpgradeItem
          :item="item"
          @upgradeItem="handleUpgradeItem"
        />
      </TheTooltip>
    </div>
    <div class="ShopPanel__items">
      <TheTooltip
        v-for="item in items"
        :key="item.slug"
        :tooltip-text="item.description()"
      >
        <ShopPanelItem :item="item" />
      </TheTooltip>
    </div>
  </div>
</template>

<script src="./component.js"></script>
<style src="./style.sass" lang="sass"></style>
