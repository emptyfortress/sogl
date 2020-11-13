const options = {
	interaction: {
		hover: false,
	},
	layout: {
		improvedLayout: false,
		hierarchical: {
			enabled: true,
			direction: 'LR',
			sortMethod: 'directed',

		}
	},
	nodes: {
		shape: 'box',
		borderWidth: 0,
		fixed: true,
		chosen: {
			node: function(values) {
				(values.shadowSize = 15);
				(values.borderWidth = 4);
			},
		},
	},
	edges: {
		smooth: true,
		arrows: {to: true},
		width: 2,
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
	groups: {
		flag: {
			shape: 'circularImage',
			image: 'flag.png'
		},
		current: {
			shape: 'circularImage',
			image: 'run.png'
		}
	}
}

export { options }
