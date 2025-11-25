import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'onboarding-default',
      redirect: '/onboarding/1',
    },
    {
      path: '/onboarding/:step',
      name: 'onboarding',
      component: () => import('../views/OnboardingView.vue'),
      props: (route) => ({ step: Number(route.params.step) }),
      beforeEnter: (to, from, next) => {
        const step = Number(to.params.step)
        if (step >= 1 && step <= 3) {
          next()
        } else {
          next({ name: 'onboarding', params: { step: 1 } })
        }
      },
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('../views/AuthView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: { template: '<h1 class="text-white p-5">404 Not Found</h1>' },
    },
  ],
})

export default router
