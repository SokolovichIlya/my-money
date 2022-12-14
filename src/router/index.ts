import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import store from '@/store'

// import authMiddleware from '@/middlewares/auth.ts'
import middlewarePipeline from '@/middlewares/middlewarePipeline.ts'


const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'home',
		component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
		meta: {
			layout: 'DefaultLayout',
		},
	},
	{
		path: '/login',
		name: 'auth.login',
		component: () => import(/* webpackChunkName: "auth" */ '@/views/auth/Login.vue'),
		meta: {
			layout: 'EmptyLayout',
		},
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

router.beforeEach((to, from, next) => {
    if (!to.meta.middlewares) {
        return next()
    }

    const middlewares: any = to.meta.middlewares

    const context = {
        to,
        from,
        next,
        store
    }

    return middlewares[0]({
        ...context,
		next: middlewarePipeline(context, middlewares, 1),
    })
})

export default router
