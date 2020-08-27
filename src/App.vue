<template lang="pug">
v-app 
	Drawer(:maincolor="maincolor")
	v-app-bar(app color="#ccc" flat collapse-on-scroll clipped-left elevation="2" ).pr-2
		v-app-bar-nav-icon(color="#fff" )
		.logo(v-show="!$vuetify.breakpoint.mobile")
			span Docsvision
		v-spacer
		v-btn( href="" icon ).mr-3
			v-icon(color="#fff") mdi-magnify
		v-avatar(color="blue lighten-4" size="35"  v-ripple )
			img(src="@/assets/img/user0.svg")
	v-main
		v-container.cont
			router-view

</template>

<script>
import Drawer from './components/Drawer'

export default {
	name: 'App',
	components: { 
		Drawer,
	}, 
	data: () => ({
		//
	}),
};
</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.v-main {
	background: #efefef;
}
.cont {
	padding: 0 1rem;
	transition: .2s all ease;
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
</style>
