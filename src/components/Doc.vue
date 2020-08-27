<template lang="pug">
.doc
	div.zg  заголовок
	div.but  кнопки действий
	div.main превью (основная область)
	div.dop  доп.область
	div.menu аккордеон (меню)

</template>

<script>

export default {
	data () {
		return {
		}
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.doc {
	margin-bottom: 5rem;
	display: grid;
	gap: .5rem;
	grid-template-columns: repeat(6, 1fr);
	grid-template-rows: repeat (min-content, auto);
	> div {
		background: #ccc;
		height: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.zg {
		grid-column: span 4;
		@media (max-width: 1200px) {
			grid-column: span 6;
		}
	}
	.but {
		grid-column: span 2;
		@media (max-width: 1200px) {
			grid-column: span 6;
			grid-row: 2/3;
		}
	}
	.main {
		height: 100%;
		/* height: 500px; */
		grid-column: span 4;
		grid-row: 2/4;
		@media (max-width: 1200px) {
			grid-row: 3/4;
		}
		@media (max-width: 860px) {
			grid-column: span 6;
			grid-row: 4/5;
			height: 300px;
		}
	}
	.dop {
		grid-column: span 2;
		height: 100px;
		@media (max-width: 1200px) {
			grid-column: span 6;
		}
		@media (max-width: 860px) {
			grid-column: span 6;
		}
	}
	.menu {
		grid-column: span 2;
		height: 200px;
		@media (max-width: 1200px) {
			grid-column: 5/7;
			grid-row: 3/4;
		}
		@media (max-width: 860px) {
			grid-column: span 6;
			grid-row: 3/4;
			height: 100px;
		}
	}
	
}
</style>
