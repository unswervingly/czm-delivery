import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    // 首页
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home"*/ "../views/home/Home.vue"),
  },
  {
    // 商家详情
    path: '/shop/:id',
    name: 'Shop',
    component: () => import(/* webpackChunkName: "Shop"*/ "../views/shop/Shop.vue"),
  },
  {
    // 购物车列表页面
    path: '/cartList',
    name: 'CartList',
    component: () => import(/* webpackChunkName: "CartList"*/ "../views/cartList/CartList.vue"),
  },
  {
    //下单页面
    path: '/orderConfirmation/:id',
    name: 'OrderConfirmation',
    component: () => import(/* webpackChunkName: "OrderConfirmation"*/ "../views/orderConfirmation/OrderConfirmation.vue"),
  },
  {
    //订单列表
    path: '/orderList',
    name: 'OrderList',
    component: () => import(/* webpackChunkName: "OrderList"*/ "../views/orderList/OrderList.vue"),
  },
  {
    //用户页面
    path: '/personalInfo',
    name: 'PersonalInfo',
    component: () => import(/* webpackChunkName: "PersonalInfo"*/ "../views/PersonalInfo/PersonalInfo.vue"),
  },
  {
    //地址列表页面
    path: '/myAddressList',
    name: 'MyAddressList',
    component: () => import(/* webpackChunkName: "MyAddressList"*/ "../views/myAddressList/MyAddressList.vue"),
  },
  {
    //新建地址页面
    path: '/upsetAddress/:id?',
    name: 'UpsetAddress',
    component: () => import(/* webpackChunkName: "UpsetAddress"*/ "../views/upsetAddress/UpsetAddress.vue"),
  },
  {
    // 登录页面
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login"*/ "../views/login/Login.vue"),
    beforeEnter: (to, from, next) => {
      const { isLogin } = localStorage;
      isLogin ? next({ name: "Home" }) : next()

    }
  },
  {
    // 注册页面
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "Register"*/  "../views/register/Register.vue"),
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
  // next()
})

export default router
