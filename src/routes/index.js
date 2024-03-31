import { createRouter, createWebHistory } from "vue-router";
import DashboardPage from "../pages/DashboardPage.vue";
import DashboardLayout from "../ui/DashboardLayout.vue";
import SettingsPage from "../pages/SettingsPage.vue";
import ProfilePage from "../pages/ProfilePage.vue";
import ProjectsPage from "../pages/ProjectsPage.vue";
import CoursesPage from "../pages/CoursesPage.vue";
import FriendsPage from "../pages/FriendsPage.vue";
import FilesPage from "../pages/FilesPage.vue";
import PlansPage from "../pages/PlansPage.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/admin/dashboard",
    },
    {
      path: "/admin",
      redirect: "/admin/dashboard",
      component: DashboardLayout,
      children: [
        {
          path: "dashboard",
          component: DashboardPage,
          name: "admin.dashboard",
          props: { title: "Dashboard" },
        },
        {
          path: "settings",
          component: SettingsPage,
          name: "admin.settings",
          props: { title: "Settings" },
        },
        {
          path: "profile",
          component: ProfilePage,
          name: "admin.profile",
          props: { title: "Profile" },
        },
        {
          path: "projects",
          component: ProjectsPage,
          name: "admin.projects",
          props: { title: "Projects" },
        },
        {
          path: "courses",
          component: CoursesPage,
          name: "admin.courses",
          props: { title: "Courses" },
        },
        {
          path: "friends",
          component: FriendsPage,
          name: "admin.friends",
          props: { title: "Friends" },
        },
        {
          path: "files",
          component: FilesPage,
          name: "admin.files",
          props: { title: "Files" },
        },
        {
          path: "plans",
          component: PlansPage,
          name: "admin.plans",
          props: { title: "Plans" },
        },
      ],
    },
  ],
});
