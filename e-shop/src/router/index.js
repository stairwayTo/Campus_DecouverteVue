import {createRouter, createWebHistory} from 'vue-router'
import SuppliersList from "@/components/SuppliersList.vue";
import SuppliersMap from "@/components/SuppliersMap.vue";
import homepage from "@/components/homepage.vue";
import Supplier from "@/components/Supplier.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: homepage
        },
        {
            path: '/suppliers',
            component: SuppliersList
        }, {
            path: '/supplier',
            component: Supplier
        },
        {
            path: '/map',
            component: SuppliersMap
        }
    ]
})

export default router