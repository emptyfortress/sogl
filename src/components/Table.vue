<template lang="pug">
.all
	.etap
		.overline.mr-4 {{ node.etap }}
		.txt(@click="test(node)") {{ node.title }}
		.overline.ml-7 {{ node.dates }}
		.status
			img(src="@/assets/img/run.png")
		.st {{ node.status }}
	table.full.mt-3
		thead
			th(v-for="header in headers") {{ header.title }}
		tbody
			tr(v-for="name in node.names").ro
				td {{ name.fio }}
				td(:class="color(name)") {{ name.decision }}
				td {{ name.date }}
				td {{ name.comment }}
</template>

<script>

export default {
	props: ['node'],
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
	computed: {
		etap () {
			return this.table[this.node - 9].names
		}
	},
	mounted () {
		console.log('lkajslkj ' + this.node)
	},
	methods: {
		color (e) {
			switch (e.decision) {
			case 'Согласовано':
				return 'sogl'
			case 'Отказано':
				return 'reject'
			case 'В работе':
				return 'work'
			default: return ''
			}
		}
	}
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
	font-size: .9rem;
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
			padding: 6px 1rem;
		}
	}
}
.sogl {
	background: #b7e4a1;
}
.reject {
	background: pink;
}
.work {
	background: #bddaf5;
}
</style>
