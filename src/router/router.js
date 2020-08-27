import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Folder from '@/components/Folder'
import Doc from '@/components/Doc'
import Task from '@/components/Task'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/task',
		name: 'task',
		component: Task,
	},
	{
		path: '/doc',
		name: 'doc',
		component: Doc,
	},
	{
		path: '/folder',
		name: 'folder',
		component: Folder,
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	}
]

const router = new VueRouter({
	routes
})

export default router
