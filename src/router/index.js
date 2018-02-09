import Vue from 'vue'
import Router from 'vue-router'
import Cards from '@/components/cards'
import Steppers from '@/components/steppers'

Vue.use(Router)

export default new Router({
    routes: [
	{
	    path: '/',
	    name: 'HelloWorld',
	    component: Cards
	},
	{
	    path: '/project',
	    name: 'project',
	    component: Steppers
	}
    ]
})
