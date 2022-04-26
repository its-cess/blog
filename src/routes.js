import Vue from 'vue'
import router from 'vue-router'
import Profile from './pages/Profile'
import CreateNew from './pages/CreateNew'
import ShowEntry from './pages/ShowEntry'

Vue.use(router)

export default new router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { 
      path: '', 
      name: 'profile',
      component: Profile 
    },
    {
      path: '/entry/:id',
      name: 'show-entry',
      component: ShowEntry,
      props: true
    },
    { 
      path: '/new',
      name: 'create-new', 
      component: CreateNew },
  ]
}) 