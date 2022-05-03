import * as actionTypes from '../store/action-types'
import store from '@/store/store.js'
import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MarvelCharacters from '@/components/characters/MarvelCharacters'
import MarvelComics from '@/components/comics/MarvelComics'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HelloWorld,
    children: [
      {
        path: '/comics',
        name: 'comics',
        component: MarvelComics
      },
      {
        path: '/characters',
        name: 'characters',
        component: MarvelCharacters
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// Check route before routing
router.beforeEach((to, from, next) => {
  store.state.appLoaded ? next() : store.dispatch(actionTypes.INIT, next)
})

export default router
