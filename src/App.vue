<template lang="pug">
v-app 
	Drawer(:maincolor="maincolor")
	v-app-bar(app :color="maincolor" flat clipped-left elevation="2" ).pr-2
		v-app-bar-nav-icon(color="#fff" @click="$store.commit('toggleDrawer')")
		.logo(v-show="!$vuetify.breakpoint.mobile")
			span Docsvision
		v-spacer
		v-btn( href="" icon ).mr-3
			v-icon(color="#fff") mdi-magnify
		v-avatar(color="blue lighten-4" size="35"  v-ripple )
			img(src="@/assets/img/user0.svg")
	v-main
		.subbar(:class="maincolor")
		v-container.cont
			v-slide-x-transition(mode="out-in")
				router-view

</template>

<script>
import Drawer from './components/Drawer'
import {maincolor} from '@/components/mixins/maincolor'

export default {
	name: 'App',
	mixins: [maincolor],
	components: {
		Drawer,
	},
	data: () => ({
		//
	}),
	computed: {
		drawer() { return this.$store.getters.drawer },
		mini() { return this.$store.getters.mini },
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.v-main {
	background: #efefef;
}
.cont {
	padding: 0 1rem;
	transition: .2s all ease;
	margin-top: 2rem;
}

.logo {
	color: #fff;
	font-size: 1.4rem;
	width: 250px;
}
.icon-user, .icon-search, .icon-search-scan {
	font-size: 1.2rem;
	margin-left: -4px;
}
.subbar {
	height: 42px;
}
</style>
