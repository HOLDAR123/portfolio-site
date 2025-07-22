import {createRouter, createWebHistory} from 'vue-router'
import HelloPage from "@/views/HelloPage/HelloPage.vue";
import AboutMePage from "@/views/AboutMePage/AboutMePage.vue";
import ProjectsPage from "@/views/ProjectsPage/ProjectsPage.vue";
import ContactMePage from "@/views/ContactMePage/ContactMePage.vue";

const routes  = [
  {
  path: '/',
  component: HelloPage
  },
  {
    path: '/about',
    component: AboutMePage
  },
  {
    path:'/projects',
    component: ProjectsPage
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
