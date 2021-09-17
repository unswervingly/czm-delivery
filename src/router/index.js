import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    // 首页
    path: '/',
    name: 'Home',
    component: () => import("../views/home/Home.vue"),
  },
  {
    // 注册页面
    path: '/register',
    name: 'Register',
    component: () => import("../views/register/Register.vue"),
    beforeEnter: (to, from, next) => {
      const { isLogin } = localStorage;
      isLogin ? next({ name: "Home" }) : next()

    }
  },
  {
    // 登录页面
    path: '/login',
    name: 'Login',
    component: () => import("../views/login/Login.vue"),
    beforeEnter: (to, from, next) => {
      const { isLogin } = localStorage;
      isLogin ? next({ name: "Home" }) : next()

    }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const { isLogin } = localStorage;
  const isLoginOrRegister = (to.name === 'Login' || to.name === 'Register');

  (isLogin || isLoginOrRegister) ? next() : next({ name: 'Login' })
  next()
})

export default router
