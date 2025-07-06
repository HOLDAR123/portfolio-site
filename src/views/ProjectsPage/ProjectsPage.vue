<script setup lang="ts">
import s from './ProjectsPage.module.scss'
import {ref, computed} from 'vue'
import SelectorFilter from '../../components/SelectorFilter/SelectorFilter.vue'
import CategoryItem from "../../components/CategoryItem/CategoryItem.vue";
import SideBarLayout from "../../layouts/SideBarLayout/SideBarLayout.vue";
import ProjectItem from "../../components/ProjectItem/ProjectItem.vue";
import {projectsData} from "../../constants/projects.data";

const selectedFilters = ref<string[]>([])

const handleFilterChange = (filters: string[]) => {
  selectedFilters.value = filters
  console.log('Selected filters:', filters)
}

const filteredProjects = computed(() => {
  if (selectedFilters.value.length === 0) {
    return projectsData
  }
  
  return projectsData.filter(project => 
    project.technologies.some(tech => selectedFilters.value.includes(tech))
  )
})
</script>

<template>
  <div :class="s.projectsPage">
   <SideBarLayout>
     <CategoryItem category-title="projects">
       <SelectorFilter @filter-change="handleFilterChange" />
     </CategoryItem>
   </SideBarLayout>

    <div :class="s.projectsPage_content">
      <Transition name="content">
        <div :class="s.projectsGrid">
          <ProjectItem 
            v-for="project in filteredProjects" 
            :key="project.id"
            :project="project"
          />
        </div>
      </Transition>
    </div>
  </div>
</template>
