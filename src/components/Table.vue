<template lang="pug">
.all
	.etap
		.overline.mr-4 Этап 2
		.txt Согласование с производством
		.overline.ml-7 13 ноября &mdash; 14 ноября
		.status
			img(src="@/assets/img/run.png")
		.st В работе
	table.full
		thead
			th one
			th one
			th one
			th one
</template>

<script>

export default {
	props: ['selected'],
	data() {
		return {
		}
	},
}

</script>

<style scoped lang="scss">
/* @import '@/assets/css/colors.scss'; */

.etap {
	display: flex;
	align-items: center;
	font-size: 1.2rem;
	.overline {
		font-weight: 400;
	}
	.status {
		width: 28px;
		height: 28px;
		background: #ccc;
		border-radius: 50%;
		font-size: .9rem;
		display: flex;
		margin-left: 30px;
		img {
			width: 27px;
		}
	}
	.st {
		font-size: .8rem;
		margin-left: 5px;
	}

}
</style>
