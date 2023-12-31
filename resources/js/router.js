import { createWebHistory, createRouter } from "vue-router";

const Beranda = () => import("@/views/landing/Beranda.vue");
const Diagnose = () => import("@/views/landing/Diagnose.vue");
const Login = () => import("@/views/login.vue");

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
        path: "/informasi",
        name: "Informasi",
        component: () => import("@/views/landing/Informasi.vue"),
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
    {
        path: "/bantuan",
        name: "Bantuan",
        component: () => import("@/views/landing/Bantuan.vue"),
        meta: {
            public: true,
        },
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: {
            public: true,
        },
    },
    {
        path: "/admin",
        name: "Base Admin",
        redirect: "/admin/penyakit",
        component: () => import("@/views/admin/base.vue"),
        children: [
            {
                path: "/admin/dash",
                name: "Admin Dash",
                component: () => import("@/views/admin/exam.vue"),
            },
            {
                path: "/admin/penyakit",
                name: "Admin Penyakit",
                component: () => import("@/views/admin/exam.vue"),
            },
            {
                path: "/admin/user",
                name: "Admin User",
                component: () => import("@/views/admin/user.vue"),
            },
        ],
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
    if (to.name == "Login" && token) next("/admin");
    else next();
});

export default router;
