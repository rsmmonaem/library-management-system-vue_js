import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Components/Home.vue'
import SingleProduct from '../Components/SingleProduct.vue'
import ProductsByCat from '../Components/ProductsByCat.vue'
import Admin from '../Components/admin/Admin.vue'
import Login from '../Components/LoginPage.vue'


import Add_Author from '../Components/admin/pages/Add_Author.vue'
import Edit_Author from '../Components/admin/pages/Edit_Author.vue'
import List_Author from '../Components/admin/pages/List_Author.vue'

import Add_Book from '../Components/admin/pages/Add_Book.vue'
import Edit_Book from '../Components/admin/pages/Edit_Book.vue'
import List_Book from '../Components/admin/pages/List_Book.vue'





import NotFound from '../Components/NotFound.vue' // Import the NotFound component

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/product/:id',
      name: 'SingleProduct',
      component: SingleProduct
    },
    {
      path: '/products/category/:id',
      name: 'categories',
      component: ProductsByCat
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/Admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/Admin/Add_Author',
      name: 'Add_Author',
      component: Add_Author
    },
    {
      path: '/Admin/Edit_Author/:id',
      name: 'Edit_Author',
      component: Edit_Author
    },
    {
      path: '/Admin/List_Author',
      name: 'List_Author',
      component: List_Author
    },
    {
      path: '/Admin/Add_Book',
      name: 'Add_Book',
      component: Add_Book
    },
    {
      path: '/Admin/List_Book',
      name: 'List_Book',
      component: List_Book
    },
    {
      path: '/Admin/Edit_Book/:id',
      name: 'Edit_Book',
      component: Edit_Book
    },
    // Wildcard route for 404 Not Found
    {
      path: '/:catchAll(.*)', // Matches any path not matched by earlier routes
      name: 'NotFound',
      component: NotFound
    }
  ]
})

export default router
