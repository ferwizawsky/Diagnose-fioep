import { createWebHistory, createRouter } from "vue-router";

const Beranda = () => import("@/views/landing/Beranda.vue");
const Diagnose = () => import("@/views/landing/Diagnose.vue");

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
        path: "/login",
        name: "Login",
        component: Beranda,
        meta: {
            public: true,
        },
    },
    {
        path: "/diagnosa",
        name: "Diagnose",
        component: Diagnose,
        meta: {
            public: true,
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
    if (to.name == "Login" && token) next("/Diagnose");
    else next();
});

export default router;
