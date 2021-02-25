<template>
  <div class="ClickerPanel">
		<h3 class="ClickerPanel__money-count">
			{{ money }} Money
		</h3>
		<span class="ClickerPanel__money-per">per second: {{ moneyPerSecond }}</span>
		<span class="ClickerPanel__money-per">per click: {{ moneyPerClick }}</span>
		<div class="ClickerPanel__money">
			<a @click.prevent="money=moneyPerClick">
				<img src="../../assets/money.png" alt="Money">
			</a>
		</div>
  </div>
</template>

<script src="./component.js"></script>
<style src="./style.sass" lang="sass"></style>