import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import AboutViewVue from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path:'/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/ViewProduct',
      name: 'ViewProduct',
      component: () => import('../views/ViewProduct.vue')
    },
    
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
     
    },

    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignupView.vue')
    },

    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('../views/CheckoutView.vue')
    },

    {
      path: '/homepage',
      name: 'homepage',
      component: () => import('../views/HomepageUser.vue')
    },

    {
      path: '/order',
      name: 'order',
      component: () => import('../views/OrderView.vue')
    },

    {
      path: '/shippingAddr',
      name: 'shippingAddr',
      component: () => import('../views/ShippingAddrView.vue')
    },

    {
      path: '/shippingMethod',
      name: 'shippingMethod',
      component: () => import('../views/shippingMethodView.vue')
    },

    {
      path: '/payment',
      name: 'payment',
      component: () => import('../views/PaymentView.vue')
    },

    {
      path: '/SummaryOrder',
      name: 'SummaryOrder',
      component: () => import('../views/SummaryOrder.vue')
    },
    
  ]
})

export default router
