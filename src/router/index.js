import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ProductDetail from '../views/ProductDetail.vue'
import ProductMitra from '../views/ProductMitra.vue'
import Order from '../views/Order.vue'
import DaftarMitra from '../views/DaftarMitra.vue'
import OrderBerhasil from '../views/OrderBerhasil.vue'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/daftar-mitra',
        name: 'DaftarMitra',
        component: DaftarMitra
    },
    {
        path: '/product-detail',
        name: 'ProductDetail',
        component: ProductDetail
    },
    {
        path: '/order-berhasil',
        name: 'OrderBerhasil',
        component: OrderBerhasil
    },
    {
        path: '/product-mitra',
        name: 'ProductMitra',
        component: ProductMitra
    },

    {
        path: '/Order',
        name: 'Order',
        component: Order
    },

    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router