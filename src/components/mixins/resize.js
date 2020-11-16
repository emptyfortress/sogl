export const resize = {
	data () {
		return {
			isResizing: false,
			lastDownY: 0,
		}
	},
	mounted () {
		window.addEventListener('mousemove', this.drag)
		window.addEventListener('mouseup', this.mouseup)
	},
	beforeDestroy () {
		window.removeEventListener('mousemove', this.drag)
		window.removeEventListener('mouseup', this.upmouse)
	},
	methods: {
		setResize (e) {
			this.isResizing = true
			this.lastDownY = e.clientY
		},
		removeResize () {
			this.isResizing = false
		},
		drag (e) {
			if (this.isResizing) {
				let pane = document.getElementById('pane')
				let zone = document.getElementById('zone')
				pane.style.height = zone.clientHeight - e.clientY + 180 + 'px'
			}
		},
		upmouse () {
			this.isResizing = false
		}
	}
}
