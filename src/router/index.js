import Vue from 'vue'
import Router from 'vue-router'
import Cards from '@/components/cards'
import Steppers from '@/components/steppers'
import Budget from '@/components/budget'

Vue.use(Router)

export default new Router({
    routes: [
	{
	    path: '/',
	    name: 'main',
	    component: Cards
	},
	{
	    path: '/project',
	    name: 'project',
	    component: Steppers
	},
	{
	    path: '/budget',
	    name: 'budget',
	    component: Budget
	}
    ]
})
