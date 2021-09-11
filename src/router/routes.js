
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/PageHome.vue') },
      { path: '/pagehome', component: () => import('src/pages/PageHome.vue') },
      { path: '/cart', component: () => import('src/pages/Cart.vue') },
      { path: '/contactus', component: () => import('src/pages/ContactUs.vue') },
      { path: '/orderform', component: () => import('src/pages/OrderForm.vue') },
      { path: '/viewproduct', component: () => import('src/pages/ViewProduct.vue') },
      { path: '/account', component: () => import('src/pages/Account.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
