import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig> {
  routes: _routes => [
    {
      name: 'about-project',
      path: '/about-project',
      component: () => import('~/pages/about-project.vue').then(r => r.default || r),
    },
    {
      name: 'index',
      path: '/',
      component: () => import('~/pages/stub.vue').then(r => r.default || r),
    },
    {
      name: 'stub',
      path: '/stub',
      component: () => import('~/pages/stub.vue').then(r => r.default || r),
    },
    {
      name: 'home',
      path: '/home',
      component: () => import('~/pages/home.vue').then(r => r.default || r),
    },
    {
      name: 'works',
      path: '/works',
      component: () => import('~/pages/works.vue').then(r => r.default || r),
    },
    {
      name: 'agency',
      path: '/agency',
      component: () => import('~/pages/agency.vue').then(r => r.default || r),
    },
    {
      name: 'partners',
      path: '/partners',
      component: () => import('~/pages/partners.vue').then(r => r.default || r),
    },
    {
      name: 'contacts',
      path: '/contacts',
      component: () => import('~/pages/contacts.vue').then(r => r.default || r),
    },
    {
      name: 'team',
      path: '/team',
      component: () => import('~/pages/team.vue').then(r => r.default || r),
    },
  ],
}
