import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig> {
    routes: (_routes) => [
        {
            name: 'home',
            path: '/',
            component: () => import('~/pages/Stub.vue').then(r => r.default || r)
        },
        {
            name: 'works',
            path: '/works',
            component: () => import('~/pages/Works.vue').then(r => r.default || r)
        },
        {
            name: 'agency',
            path: '/agency',
            component: () => import('~/pages/Agency.vue').then(r => r.default || r)
        },
        {
            name: 'partners',
            path: '/partners',
            component: () => import('~/pages/Partners.vue').then(r => r.default || r)
        },
        {
            name: 'contacts',
            path: '/contacts',
            component: () => import('~/pages/Contacts.vue').then(r => r.default || r)
        },
        {
            name: 'team',
            path: '/team',
            component: () => import('~/pages/Team.vue').then(r => r.default || r)
        },
        {
            name: 'about-project',
            path: '/about-project',
            component: () => import('~/pages/AboutProject.vue').then(r => r.default || r)
        },
        {
            name: 'stub',
            path: '/stub',
            component: () => import('~/pages/Stub.vue').then(r => r.default || r)
        },
    ],
}