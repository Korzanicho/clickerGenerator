<template>
	<div class="ShopPanelItem"
		:class="item.count !== 0 ? 'ShopPanelItem--active' : ''"
		@click="handleBuyItem(1)"
	>
		<img :src="require(`../../../assets/${item.image}`)" alt="" class="ShopPanelItem__image" />
		<div>
			<span class="ShopPanelItem__name">{{ item.name }}</span>
			<br>
			<span class="ShopPanelItem__cost"
				:class="item.cost() > money ? 'ShopPanelItem__cost--too-expensive' : ''"
			>
				Cost: {{ item.cost() }}
			</span>
		</div>
		<span class="ShopPanelItem__count">{{ item.count }}</span>
	</div>
</template>

<script src="./component.js"></script>
<style src="./style.sass" lang="sass"></style>