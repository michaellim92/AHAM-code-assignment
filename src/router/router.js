import { createRouter, createWebHistory } from 'vue-router'
import FundsView from '../components/fund-viewer/FundsView.vue';
import PaymentGateway from '../components/payment/Payment.vue';

const routes = [
    {
        path: '/',
        name: 'browse',
        component: FundsView,
    },
    {
        path: '/:fundId/payments',
        name: 'payment',
        component: PaymentGateway
    }
  ]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
