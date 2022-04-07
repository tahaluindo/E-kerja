import Vue from 'vue'
import VueRouter from 'vue-router'
// Views
import Login from '../views/Login.vue'
import Pegawai from '../views/Pegawai.vue'
// Components
import MasterPegawai from '../components/MasterPegawai.vue'
import DataPegawai from '../components/DataPegawai.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/pegawai',
    name: 'Pegawai',
    component: Pegawai,
    children: [
      {
        path: 'master-pegawai',
        name: 'MasterPegawai',
        component: MasterPegawai
      },
      {
        path: 'data-pegawai/:nip',
        name: 'DataPegawai',
        component: DataPegawai
      }
    ]
  }
  // {
  // path: '/about',
  // name: 'About',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
