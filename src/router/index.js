import { createRouter, createWebHistory } from "vue-router";
import Home from "../Components/Home.vue";
import SingleProduct from "../Components/SingleProduct.vue";
import ProductsByCat from "../Components/ProductsByCat.vue";
import Admin from "../Components/admin/Admin.vue";
import Member from "../Components/admin/Member.vue";
import Login from "../Components/LoginPage.vue";
import Logout from "../Components/Logout.vue";
import Add_Author from "../Components/admin/pages/Add_Author.vue";
import Edit_Author from "../Components/admin/pages/Edit_Author.vue";
import List_Author from "../Components/admin/pages/List_Author.vue";
import Add_Book from "../Components/admin/pages/Add_Book.vue";
import Edit_Book from "../Components/admin/pages/Edit_Book.vue";
import List_Book from "../Components/admin/pages/List_Book.vue";
import List_Borrowed_book from "../Components/admin/pages/List_Borrowed_book.vue";
import NotFound from "../Components/NotFound.vue";

const routes = [
  { 
    path: "/", 
    name: "home", 
    component: Home 
  },
  { 
    path: "/login", 
    name: "login", 
    component: Login 
  },
  {
    path: '/Logout',
    name: 'Logout',
    component: Logout
  },
  { 
    path: "/product/:id", 
    name: "SingleProduct", 
    component: SingleProduct 
  },
  {
    path: "/products/category/:id",
    name: "categories",
    component: ProductsByCat,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/Admin",
    name: "Admin",
    component: Admin,
    meta: { requiresAdmin: true },
  },
  {
    path: "/Admin/Add_Author",
    name: "Add_Author",
    component: Add_Author,
    meta: { requiresAdmin: true },
  },
  {
    path: "/Admin/Edit_Author/:id",
    name: "Edit_Author",
    component: Edit_Author,
    meta: { requiresAdmin: true },
  },
  {
    path: "/Admin/List_Author",
    name: "List_Author",
    component: List_Author,
    meta: { requiresAdmin: true },
  },
  {
    path: "/Admin/Add_Book",
    name: "Add_Book",
    component: Add_Book,
    meta: { requiresAdmin: true },
  },
  {
    path: "/Admin/List_Book",
    name: "List_Book",
    component: List_Book,
    meta: { requiresAdmin: true},
  },
  {
    path: "/Admin/Edit_Book/:id",
    name: "Edit_Book",
    component: Edit_Book,
    meta: { requiresAdmin: true },
  },
  {
    path: "/Member",
    name: "Member",
    component: Member,
    meta: { requiresMember: true },
  },
  {
    path: "/Member/List-Borrowed-book",
    name: "List_Borrowed_book",
    component: List_Borrowed_book,
    meta: { requiresMember: true },
  },
  
  // Wildcard route for 404 Not Found
  {
    path: "/:catchAll(.*)", // Matches any path not matched by earlier routes
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAdmin = to.matched.some((record) => record.meta.requiresAdmin);
  const requiresMember = to.matched.some((record) => record.meta.requiresMember);
  const userType = localStorage.getItem('userType');
  const token = localStorage.getItem('token');

  // Redirect logic for admin routes
  if (requiresAdmin && userType !== 'admin') {
    next({ name: 'login' });
  } else if (requiresMember && userType !== 'member') {
    // Redirect non-members trying to access member routes to home
    next({ name: 'login' });
  } else if (to.name === 'login' && token && (userType === 'admin' || userType === 'member')) {
    // If user is already logged in, redirect away from login page
    if (userType === 'admin') {
      next({ name: 'Admin' });
    } else if (userType === 'member') {
      next({ name: 'Member' });
    } else {
      next({ name: 'login' });
    }
  } else {
    next();
  }
});

export default router;
