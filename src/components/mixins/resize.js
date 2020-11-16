export const resize = {
	data () {
		return {
			isResizing: false,
			lastDownY: 0,
		}
	},
	mounted () {
		window.addEventListener('mousemove', e => {
			if (this.isResizing) {
				this.drag(e)
			}
		})
		window.addEventListener('mouseup', () => {
			this.isResizing = false
		})
	},
	beforeDestroy () {
		window.removeEventListener('mousemove')
	},
	methods: {
		setResize (e) {
			this.isResizing = true
			this.lastDownY = e.clientY
		},
		drag (e) {
			let pane = document.getElementById('pane')
			let zone = document.getElementById('zone')
			pane.style.height = zone.clientHeight - e.clientY + 180 + 'px'
		}
	}
}
