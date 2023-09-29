import { createRouter, createWebHistory } from 'vue-router'
import FundsView from '../components/FundsView.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: FundsView,
    }
  ]
})
