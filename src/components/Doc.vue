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
	grid-template-rows: min-content;
	> div {
		background: #ccc;
		height: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.zg {
		grid-column: span 4;
		height: 150px;
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
		height: 500px;
		grid-column: span 4;
		grid-row: span 3;
		@media (max-width: 860px) {
			grid-column: span 6;
			grid-row: span 2;
		}
	}
	.dop {
		grid-column: span 2;
		height: 100px;
		@media (max-width: 1200px) {
			grid-column: span 6;
		}
	}
	.menu {
		grid-column: span 2;
		height: 200px;
		@media (max-width: 1200px) {
			grid-column: 5/7;
			grid-row: 3/6;
		}
		@media (max-width: 860px) {
			grid-column: span 6;
		}
	}
	
}
</style>
