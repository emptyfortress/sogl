<template lang="pug">
.all
	.zag() Согласование
	#zone
		.mynet
			network(ref="network"
				:nodes="nodes"
				:edges="edges"
				:options="options"
				:events="['selectNode', 'deselectNode']"
				@select-node="onNodeSelected"
				@deselect-node="onDeselect"
			)
		#pane
			.handle(@mousedown="setResize" @mouseup="removeResize")
			p(id="paneInfo")
				v-icon(color="dark").mr-3 mdi-information
				span Выберите этап для просмотра информации по нему.
</template>

<script>
import { Network } from "vue-vis-network";
import { list, branches } from '@/list.js'
import { options } from '@/options.js'
import {resize} from '@/components/mixins/resize'

export default {
	mixins: [resize],
	data() {
		return {
			nodes: list,
			edges: branches,
			options: options,
			firstSel: true,
		}
	},
	components: {
		Network,
	},
	methods: {
		onNodeSelected: function (e) {
			let selectedNode = e.nodes;
			let network = this.$refs.network
			console.log(selectedNode);
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
			network.focus(selectedNode, {offset: {x: 0, y: -100}, animation: true});
		},
		onDeselect: function (e) {
			console.log(e.nodes)
		},
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
</style>
