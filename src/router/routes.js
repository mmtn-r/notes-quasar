import Notes from 'pages/Notes'
import Settings from 'pages/Settings'

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      // { path: '', component: () => import('pages/Index.vue') }
      { path: '/', component: Notes },
      { path: '/settings', component: Settings }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
