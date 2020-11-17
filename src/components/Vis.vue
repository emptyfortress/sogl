<template lang="pug">
.all
	.zag Ход согласования
	#zone
		.mynet
			network(ref="network"
				id="network"
				:nodes="nodes"
				:edges="edges"
				:options="options"
				:events="['selectNode', 'deselectNode', 'beforeDrawing', 'afterDrawing']"
				@select-node="onNodeSelected"
				@deselect-node="onDeselect"
				@before-drawing.once="beforeD"
				@after-drawing.once="afterD"
			)
		#pane
			.handle(@mousedown="setResize")
			p(id="paneInfo")
				v-icon(color="dark").mr-3 mdi-information
				span Выберите этап для просмотра информации по нему.
			v-slide-x-transition(mode="out-in")
				Table(v-if="selectedNode" :node="table[selectedNode - 9]")
			v-slide-x-transition(mode="out-in")
				.but(v-show="selectedNode")
					v-btn(icon @click="select(selectedNode - 1)")
						v-icon mdi-chevron-left-circle-outline
					v-btn(icon @click="select(selectedNode + 1)")
						v-icon mdi-chevron-right-circle-outline

</template>

<script>
import { Network } from "vue-vis-network";
import { list, branches, table } from '@/list.js'
import { options } from '@/options.js'
import {resize} from '@/components/mixins/resize'
import Table from '@/components/Table'

export default {
	mixins: [resize],
	data() {
		return {
			table,
			options: options,
			nodes: list,
			edges: branches,
			firstSel: true,
			selectedNode: null,
		}
	},
	mounted () {
		this.$refs.network.setOptions({
			layout: {
				hierarchical: {
					enabled: true,
					direction: 'LR',
					sortMethod: 'directed',
				}
			},
			edges: {
				smooth: true,
				arrows: {to: true},
				width: 1,
				shadow: false,
				hoverWidth: 1.5,
				arrowStrikethrough: true,
				color: {
					color: '#aaa',
					highlight: '#2B7CE9',
				},
				font: {
					vadjust: 20,
				},
				chosen: true,
			},
		})
	},
	components: {
		Network,
		Table,
	},
	computed: {
		etap () {
			return table[this.selectedNode - 9]
		}
	},
	methods: {
		beforeD () {
			let network = this.$refs.network
			network.focus(14, {scale: 3})
		},
		afterD () {
			let network = this.$refs.network
			network.fit({animation: {duration: 800,},})
		},
		onNodeSelected: function (e) {
			let selectedNode = e.nodes[0];
			let network = this.$refs.network
			document.querySelector('#paneInfo').classList.add('hide');
			var pane = document.querySelector('#pane')
			if (this.firstSel) {
				pane.style.transition = 'all .3s';
				setTimeout(function() {
					pane.style.transition = 'all 0s';
				}, 350);
				pane.style.height = '200px'
				this.firstSel = false
			}
			network.focus(selectedNode, {scale: 1.3, offset: {x: 0, y: -100}, animation: true})
			this.selectedNode = selectedNode
			console.log('selected ' + this.selectedNode)
			console.log(this.table[selectedNode - 9])
		},
		onDeselect: function (e) {
			console.log('deselect' + e.nodes)
		},
		select (e) {
			let sel = [] 
			let network = this.$refs.network
			sel.push(e)
			network.selectNodes(sel)
			network.focus(sel, {scale: 1.3, offset: {x: 0, y: -100}, animation: true})
			this.selectedNode = e
		}
	},
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

#zone{
	width: 100%;
	height: calc(100vh - 230px);
	background: rgb(95,195,255);
	background: linear-gradient(0deg, rgba(95,195,255,1) 0%, rgba(255,255,255,1) 50%, rgba(105,199,255,1) 100%);
	position: relative;
	overflow: hidden;
}
.mynet {
	height: 100%;
	> div {
		height: calc(100% - 90px);
	}
}
#pane {
	position: absolute;
	width: 100%;
	height: 50px;
	/* max-height: 100%; */
	bottom: 0;
	left: 0;
	background: #fff;
	padding: 1rem;
	box-shadow: 0 -2px 4px rgba(0,0,0, .2);
}

.handle {
	position: absolute;
	width: 100%;
	top: -10px;
	left: 0;
	height: 10px;
	cursor: ns-resize;
	background: transparent url('../assets/img/drag.png') no-repeat 50% 50%;
	z-index: 5;
	&:hover:after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		border-top: 2px dotted $dark;
	}
}
.hide {
	display: none;
}
.but {
	position: absolute;
	top: .5rem;
	right: .5rem;
}
</style>
