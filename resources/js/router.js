import { createWebHistory, createRouter } from "vue-router";

const Beranda = () => import("@/views/landing/Beranda.vue");
const Undangan = () => import("@/views/landing/Undangan.vue");
const Maker = () => import("@/views/landing/Maker/Index.vue");
const Dashboard = () => import("@/views/dashboard/Dashboard.vue");

const routes = [
    {
        path: "/",
        name: "Beranda",
        component: Beranda,
        meta: {
            public: true,
        },
    },
    {
        path: "/maker",
        name: "Undangan Maker",
        component: Maker,
        meta: {
            public: true,
        },
    },
    {
        path: "/buat-undangan",
        name: "Buat Undangan",
        component: Undangan,
        meta: {
            public: true,
        },
    },
    {
        path: "/login",
        name: "Login",
        component: Beranda,
        meta: {
            public: true,
        },
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
        meta: {
            public: false,
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    // Ubah judul halaman
    document.title = to.name + " | " + appName;

    const token = localStorage.getItem("token");
    const privateRoute = to.matched.some((record) => !record.meta.public);
    const publicRoute = to.matched.some((record) => record.meta.public);
    if (privateRoute && !token) next("/");
    if (to.name == "Login" && token) next("/dashboard");
    else next();
});

export default router;
