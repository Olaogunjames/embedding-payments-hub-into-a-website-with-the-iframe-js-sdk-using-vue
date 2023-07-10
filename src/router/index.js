import { createRouter, createWebHistory } from 'vue-router'
import Products from '../components/Products.vue'
import MakePayment from '../components/MakePayment.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'products',
      component: Products
    },
    {
      path: '/make-payment',
      name: '/make-payment',
      component: MakePayment
    },
  ]
})

export default router
