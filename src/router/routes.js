
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Metronomo.vue') },
      { path: '/metronomoTest01', component: () => import('pages/MetronomoTest01.vue') },
      { path: '/help', component: () => import('pages/Help.vue') },
      { path: '/audioBuffer', component: () => import('pages/AudioBuffer.vue') },
      { path: '/player', component: () => import('pages/Player.vue') },
      { path: '/videocall', component: () => import('pages/Videocall.vue') }
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
