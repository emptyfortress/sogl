<template lang="pug">
.doc
	div.zg  zag
	div.but  but
	div.main main
	div.dop  dop
	div.menu menu

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
	display: grid;
	gap: .5rem;
	grid-template-columns: repeat(6, 1fr);
	grid-template-rows: 100px min-content;
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
		}
	}
	.main {
		height: 400px;
		grid-column: span 4;
		grid-row: span 11;
		@media (max-width: 860px) {
			grid-column: span 6;
		}
	}
	.dop, .menu {
		grid-column: span 2;
		place-self: start stretch;
		@media (max-width: 860px) {
			grid-column: span 6;
		}
	}
	.dop {
		height: 200px;
	}
	.menu {
		height: 100px;
	}
	
}
</style>
