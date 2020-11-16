<template lang="pug">
.all
	.etap
		.overline.mr-4 Этап 2
		.txt Согласование с производством
		.overline.ml-7 13 ноября &mdash; 14 ноября
		.status
			img(src="@/assets/img/run.png")
		.st В работе
	table.full.mt-3
		thead
			th(v-for="header in headers") {{ header.title }}
		tbody
			tr(v-for="name in node.names").ro
				td {{ name.fio }}
				td {{ name.decision }}
				td {{ name.date }}
				td {{ name.comment }}
</template>

<script>

export default {
	props: ['selected', 'node'],
	data() {
		return {
			headers: [
				{ id: 0, title: 'Согласующий', },
				{ id: 0, title: 'Решение', },
				{ id: 0, title: 'Дата', },
				{ id: 0, title: 'Комментарий', },
			]
		}
	},
	created () {
		console.log(this.node)
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

.full {
	width: 100%;
	background: #eee;
	transition: all 0.3s ease;
	tr {
		background: #fff;
	}
	th {
		cursor: pointer;
		background: #dadada;
		height: 1.3rem;
		font-weight: 400;
		font-size: 0.75rem;
		color: #555;
		text-align: left;
		padding: 0 1rem;
	}
	.ro {
		height: 2rem;
		position: relative;
		&:hover {
			background: #eee;
		}
		td {
			/* border-bottom: 1px solid #eee; */
			padding: 6px 1rem;
			/* position: relative; */
		}
	}
}
</style>
