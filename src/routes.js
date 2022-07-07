import Vue from "vue";
import router from "vue-router";
import Profile from "./pages/Profile";
import CreateNew from "./pages/CreateNew";
import EditPost from "./pages/EditPost";
import ShowEntry from "./pages/ShowEntry";
import NotFound from "./pages/NotFound";

Vue.use(router);

export default new router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "",
      name: "profile",
      component: Profile
    },
    {
      path: "/entries/:id",
      name: "show-entry",
      component: ShowEntry
    },
    {
      path: "/new",
      name: "create-new",
      component: CreateNew
    },
    {
      path: "/edit/:id",
      name: "edit-post",
      component: EditPost
    },
    {
      path: "/404",
      name: "404",
      component: NotFound
    },
    {
      path: "*",
      redirect: { name: "404" }
    }
  ]
});
