import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _647b2b27 = () => interopDefault(import('..\\pages\\about_us.vue' /* webpackChunkName: "pages/about_us" */))
const _0e80d8be = () => interopDefault(import('..\\pages\\alipay.vue' /* webpackChunkName: "pages/alipay" */))
const _6c1d7b32 = () => interopDefault(import('..\\pages\\AppChat.vue' /* webpackChunkName: "pages/AppChat" */))
const _72c71fda = () => interopDefault(import('..\\pages\\evaluation.vue' /* webpackChunkName: "pages/evaluation" */))
const _331c1d6f = () => interopDefault(import('..\\pages\\goods_cate.vue' /* webpackChunkName: "pages/goods_cate" */))
const _ff51d984 = () => interopDefault(import('..\\pages\\goods_list.vue' /* webpackChunkName: "pages/goods_list" */))
const _713e06f6 = () => interopDefault(import('..\\pages\\goods_presell.vue' /* webpackChunkName: "pages/goods_presell" */))
const _947e9d0a = () => interopDefault(import('..\\pages\\goods_presell_detail.vue' /* webpackChunkName: "pages/goods_presell_detail" */))
const _748cdd70 = () => interopDefault(import('..\\pages\\goods_search.vue' /* webpackChunkName: "pages/goods_search" */))
const _eb4a0382 = () => interopDefault(import('..\\pages\\goods_seckill.vue' /* webpackChunkName: "pages/goods_seckill" */))
const _3f63aafe = () => interopDefault(import('..\\pages\\goods_seckill_detail.vue' /* webpackChunkName: "pages/goods_seckill_detail" */))
const _c5e1b43c = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _12c1930c = () => interopDefault(import('..\\pages\\logistics.vue' /* webpackChunkName: "pages/logistics" */))
const _3ff5187f = () => interopDefault(import('..\\pages\\mobile_login\\index.vue' /* webpackChunkName: "pages/mobile_login/index" */))
const _4dd63214 = () => interopDefault(import('..\\pages\\news_detail.vue' /* webpackChunkName: "pages/news_detail" */))
const _7a0b5ffa = () => interopDefault(import('..\\pages\\news_list.vue' /* webpackChunkName: "pages/news_list" */))
const _69b60948 = () => interopDefault(import('..\\pages\\order_confirm.vue' /* webpackChunkName: "pages/order_confirm" */))
const _028ea70e = () => interopDefault(import('..\\pages\\order_detail.vue' /* webpackChunkName: "pages/order_detail" */))
const _2aa23dbf = () => interopDefault(import('..\\pages\\payment.vue' /* webpackChunkName: "pages/payment" */))
const _09a3c1cf = () => interopDefault(import('..\\pages\\refund.vue' /* webpackChunkName: "pages/refund" */))
const _7de79934 = () => interopDefault(import('..\\pages\\refund_goods.vue' /* webpackChunkName: "pages/refund_goods" */))
const _cd86a882 = () => interopDefault(import('..\\pages\\shoppingCart.vue' /* webpackChunkName: "pages/shoppingCart" */))
const _51375f3c = () => interopDefault(import('..\\pages\\user.vue' /* webpackChunkName: "pages/user" */))
const _16b19c40 = () => interopDefault(import('..\\pages\\user\\index.vue' /* webpackChunkName: "pages/user/index" */))
const _b2bd282a = () => interopDefault(import('..\\pages\\user\\address_list.vue' /* webpackChunkName: "pages/user/address_list" */))
const _38a85d6a = () => interopDefault(import('..\\pages\\user\\balance.vue' /* webpackChunkName: "pages/user/balance" */))
const _760d0e90 = () => interopDefault(import('..\\pages\\user\\collect.vue' /* webpackChunkName: "pages/user/collect" */))
const _2255454a = () => interopDefault(import('..\\pages\\user\\messageCenter.vue' /* webpackChunkName: "pages/user/messageCenter" */))
const _84800158 = () => interopDefault(import('..\\pages\\user\\myCoupon.vue' /* webpackChunkName: "pages/user/myCoupon" */))
const _8327f3cc = () => interopDefault(import('..\\pages\\user\\orderList.vue' /* webpackChunkName: "pages/user/orderList" */))
const _f29e0f9a = () => interopDefault(import('..\\pages\\user\\userCoupon.vue' /* webpackChunkName: "pages/user/userCoupon" */))
const _55a12d00 = () => interopDefault(import('..\\pages\\wxPay.vue' /* webpackChunkName: "pages/wxPay" */))
const _c13cc06e = () => interopDefault(import('..\\pages\\goods_detail\\_id\\index.vue' /* webpackChunkName: "pages/goods_detail/_id/index" */))
const _5930fa6a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about_us",
    component: _647b2b27,
    name: "about_us"
  }, {
    path: "/alipay",
    component: _0e80d8be,
    name: "alipay"
  }, {
    path: "/AppChat",
    component: _6c1d7b32,
    name: "AppChat"
  }, {
    path: "/evaluation",
    component: _72c71fda,
    name: "evaluation"
  }, {
    path: "/goods_cate",
    component: _331c1d6f,
    name: "goods_cate"
  }, {
    path: "/goods_list",
    component: _ff51d984,
    name: "goods_list"
  }, {
    path: "/goods_presell",
    component: _713e06f6,
    name: "goods_presell"
  }, {
    path: "/goods_presell_detail",
    component: _947e9d0a,
    name: "goods_presell_detail"
  }, {
    path: "/goods_search",
    component: _748cdd70,
    name: "goods_search"
  }, {
    path: "/goods_seckill",
    component: _eb4a0382,
    name: "goods_seckill"
  }, {
    path: "/goods_seckill_detail",
    component: _3f63aafe,
    name: "goods_seckill_detail"
  }, {
    path: "/login",
    component: _c5e1b43c,
    name: "login"
  }, {
    path: "/logistics",
    component: _12c1930c,
    name: "logistics"
  }, {
    path: "/mobile_login",
    component: _3ff5187f,
    name: "mobile_login"
  }, {
    path: "/news_detail",
    component: _4dd63214,
    name: "news_detail"
  }, {
    path: "/news_list",
    component: _7a0b5ffa,
    name: "news_list"
  }, {
    path: "/order_confirm",
    component: _69b60948,
    name: "order_confirm"
  }, {
    path: "/order_detail",
    component: _028ea70e,
    name: "order_detail"
  }, {
    path: "/payment",
    component: _2aa23dbf,
    name: "payment"
  }, {
    path: "/refund",
    component: _09a3c1cf,
    name: "refund"
  }, {
    path: "/refund_goods",
    component: _7de79934,
    name: "refund_goods"
  }, {
    path: "/shoppingCart",
    component: _cd86a882,
    name: "shoppingCart"
  }, {
    path: "/user",
    component: _51375f3c,
    children: [{
      path: "",
      component: _16b19c40,
      name: "user"
    }, {
      path: "address_list",
      component: _b2bd282a,
      name: "user-address_list"
    }, {
      path: "balance",
      component: _38a85d6a,
      name: "user-balance"
    }, {
      path: "collect",
      component: _760d0e90,
      name: "user-collect"
    }, {
      path: "messageCenter",
      component: _2255454a,
      name: "user-messageCenter"
    }, {
      path: "myCoupon",
      component: _84800158,
      name: "user-myCoupon"
    }, {
      path: "orderList",
      component: _8327f3cc,
      name: "user-orderList"
    }, {
      path: "userCoupon",
      component: _f29e0f9a,
      name: "user-userCoupon"
    }]
  }, {
    path: "/wxPay",
    component: _55a12d00,
    name: "wxPay"
  }, {
    path: "/goods_detail/:id",
    component: _c13cc06e,
    name: "goods_detail-id"
  }, {
    path: "/",
    component: _5930fa6a,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
