import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig> {
  routes: _routes => [
    {
      name: 'home',
      path: '/',
      component: () => import('~/pages/index.vue').then(r => r.default || r),
    },
    {
      name: 'what-we-do',
      path: '/what-we-do',
      component: () => import('~/pages/what-we-do.vue').then(r => r.default || r),
    },
    {
      name: 'works',
      path: '/works',
      component: () => import('~/pages/works.vue').then(r => r.default || r),
    },
    {
      name: 'about-us',
      path: '/about-us',
      component: () => import('~/pages/about-us.vue').then(r => r.default || r),
    },
    {
      name: 'team',
      path: '/team',
      component: () => import('~/pages/team.vue').then(r => r.default || r),
    },
    {
      name: 'contacts',
      path: '/contacts',
      component: () => import('~/pages/contacts.vue').then(r => r.default || r),
    },
    {
      name: 'about-project',
      path: '/about-project',
      component: () => import('~/pages/about-project.vue').then(r => r.default || r),
    },
  ],
}
