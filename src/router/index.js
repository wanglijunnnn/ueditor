import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/index/index.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Index",
        component: Index,
    },
    {
        path: "/editor",
        name: "Editor",
        component: () =>
            import ("../views/editor/index.vue"),
    },
];

const router = new VueRouter({
    routes,
});

export default router;