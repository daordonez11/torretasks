import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import JobsComponent from '../views/Jobs.vue'
import TasksComponent from '../views/Tasks.vue'
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: JobsComponent
  }
  ,
  {
    path: '/tasks',
    name: 'Tasks',
    component: TasksComponent
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
