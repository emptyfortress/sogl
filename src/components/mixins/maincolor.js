export const maincolor = {
	computed: {
		maincolor() {
			let name = this.$route.name
			let doc = /^doc/
			let task = /^task/
			if (doc.test(name)) {
				return 'docolor'
			} else if (task.test(name)) {
				return 'taskcolor'
			} else return 'dark'
		},
	}
}
