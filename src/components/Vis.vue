<template lang="pug">
.all
	.zag Согласование
	network(ref="network" :nodes="nodes" :edges="edges" :options="options").wrapper
</template>

<script>
import { Network } from "vue-vis-network";

export default {
	data() {
		return {
			nodes: [
				{id: 1,  label: 'circle',  shape: 'circle' },
				{id: 2,  label: 'ellipse', shape: 'ellipse'},
				{id: 3,  label: 'database',shape: 'database'},
				{id: 4,  label: 'box',     shape: 'box'    },
				{id: 5,  label: 'diamond', shape: 'diamond'},
				{id: 6,  label: 'dot',     shape: 'dot'},
				{id: 7,  label: 'square',  shape: 'square'},
				{id: 8,  label: 'triangle',shape: 'triangle'},
			],
			edges: [
				{from: 1, to: 2},
				{from: 2, to: 3},
				{from: 2, to: 4},
				{from: 2, to: 5}, 
				{from: 5, to: 6},
				{from: 5, to: 7},
				{from: 6, to: 8}
			],
			options: {
				nodes: {
					// borderWidth: 4
				},
				edges: {
					// color: 'lightgray'
				}
			}
		}
	},
	components: {
		Network,
	},
}

</script>

<style scoped lang="scss">
/* @import '@/assets/css/colors.scss'; */
.wrapper{
	height: 400px;
	width: 100%;
	height: calc(100vh - 300px);
	background: #ccc;
}
</style>
