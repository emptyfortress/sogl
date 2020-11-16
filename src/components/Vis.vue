<template lang="pug">
.all
	.zag() Согласование
	drag-zone(:options="{ direction: 'vertical' }").zone
		drag-content.c1
			network(ref="network"
				:nodes="nodes"
				:edges="edges"
				:options="options"
				:events="['selectNode', 'deselectNode']"
				@select-node="onNodeSelected"
				@deselect-node="onDeselect"
			).wrapper
		drag-handle.handle
		drag-content(id="pane").c2
			p(id="paneInfo")
				v-icon(color="dark").mr-3 mdi-information
				span Выберите этап для просмотра информации по нему.
</template>

<script>
import { Network } from "vue-vis-network";
import { dragZone, dragHandle, dragContent } from 'vue-drag-zone'
import { list, branches } from '@/list.js'
import { options } from '@/options.js'


export default {
	data() {
		return {
			nodes: list,
			edges: branches,
			options: options,
		}
	},
	components: {
		Network,
		dragZone,
		dragHandle,
		dragContent
	},
	methods: {
		onNodeSelected: function (e) {
			let selectedNode = e.nodes;
			console.log(selectedNode);
			document.querySelector('#paneInfo').classList.add('hide');
			var pane = document.querySelector('#pane')
			pane.classList.add('move')
			// document.querySelector('#selectEtap').innerHTML = etapInfo(selectedNode);
			// network.focus(selectedNode, {offset: {x: 0, y: -200}, animation: true});
			console.log(e)
		},
		onDeselect: function (e) {
			console.log(e.nodes)
		},
	},
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.zone{
	width: 100%;
	height: calc(100vh - 230px);
	background: rgb(95,195,255);
	background: linear-gradient(0deg, rgba(95,195,255,1) 0%, rgba(255,255,255,1) 50%, rgba(105,199,255,1) 100%);
	position: relative;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	overflow: hidden;
}
.wrapper {
	height: 100%;
}
.zone .c1 {
	height: calc(100% - 80px);
}
.zone .c2 {
	background: #fff;
	height: 80px;
	box-shadow: 0 -1px 6px rgba(0,0,0,.2);
	padding: 1rem;
	position: relative;
	left: 0;
	width: 100%;
	bottom: 0;
	transition: .2s ease all;
	&.move {
		position: absolute;
		height: 300px;
	}
}
.handle {
	position: relative;
	width: 100%;
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
</style>
