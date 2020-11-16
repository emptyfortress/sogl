const options = {
	// autoResize: true,
	// interaction: {
	// 	hover: false,
	// },
	layout: {
		improvedLayout: true,
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
				(values.shadowSize = 20);
				(values.borderWidth = 4);
				(values.borderColor = '#fff');
			},
		},
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
	groups: {
		flag: {
			shape: 'circularImage',
			image: 'flag.png'
		},
		current: {
			shape: 'circularImage',
			image: 'run.png',
			color: {
				background: '#008AD1',
			},
		},
		date: {
			shape: 'image',
			image: 'tick.png',
			size: 3,
		},
		finished: {
			shape: 'circularImage',
			image: 'check.png',
			color: 'green',
		},
		overdue: {
			shape: 'circularImage',
			image: 'check.png',
			borderWidth: 2,
			color: {
				background: '#FEC01D',
				border: 'green',
			},
		},
		notStart: {
			shape: 'circularImage',
			image: 'stand.png',
			color: {
				background: 'grey',
			},
		},
	}
}

export { options }
