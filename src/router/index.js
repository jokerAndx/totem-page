import Vue from 'vue'
import VueRouter from 'vue-router'
import {getRequest} from "../utils/request";

Vue.use(VueRouter)

const routes = [
    //{path: '/', name: 'Login', component: () => import('../views/Login')},
    {path: '/', name: 'Home', component: () => import('../views/Home')}
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

let routeObj;
router.beforeEach((to, from, next) => {
    if(!routeObj) {
        routeObj = initRoute();
        next();
    } else {
        next();
    }
})

/**
 * 初始化路由
 */
const initRoute = () => {
    getRequest("/menu/route").then(resp => {
        let routeArray = [];
        resp.data.content.forEach(item => {
            if(item.component.startsWith('User')) {
                let routeItem = {path: item.url, name: item.menuName, component: () => import('../views/users/'+item.component)};
                routeArray.push(routeItem);
            } else if(item.component.startsWith('Sys')) {
                let routeItem = {path: item.url, name: item.menuName, component: () => import('../views/system/'+item.component)};
                routeArray.push(routeItem);
            } else if(item.component.startsWith('Test')) {
                let routeItem = {path: item.url, name: item.menuName, component: () => import('../views/test/'+item.component)};
                routeArray.push(routeItem);
            }
        });
        router.addRoutes(routeArray);
        return routeArray;
    });
}
export default router
