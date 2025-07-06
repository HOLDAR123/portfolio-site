<script setup lang="ts">
import s from './ProjectItem.module.scss'
import { computed } from 'vue'
import AngularIcon from '../../assets/icons/AngularIcon.vue'
import ReactIcon from '../../assets/icons/ReactIcon.vue'
import CSSIcon from '../../assets/icons/CSSIcon.vue'
import VueIcon from '../../assets/icons/VueIcon.vue'
import FlutterIcon from '../../assets/icons/FlutterIcon.vue'
import Html5Icon from '../../assets/icons/Html5Icon.vue'
import GitHubIcon from '../../assets/icons/GitHubIcon.vue'
import LinkIcon from '../../assets/icons/LinkIcon.vue'
import type { ProjectItem } from '../../constants/projects.data'

const props = defineProps<{
  project: ProjectItem
}>()

const technologyIcons = {
  angular: AngularIcon,
  react: ReactIcon,
  css: CSSIcon,
  vue: VueIcon,
  flutter: FlutterIcon,
  html: Html5Icon
}

const getTechnologyIcon = (techId: string) => {
  return technologyIcons[techId as keyof typeof technologyIcons]
}

const filteredTechnologies = computed(() => {
  return props.project.technologies.filter(tech =>
    technologyIcons[tech as keyof typeof technologyIcons]
  )
})
</script>

<template>
  <div :class="s.projectCard">
    <div :class="s.projectCard_header">
      <span>Project {{project.id}}</span>
      <span>//</span>
      <span>{{ project.title }}</span>
    </div>

    <div :class="s.projectCard__body">
      <div :class="s.projectCard__body_header">
        <img :src="project.image" alt="image"/>
        <div :class="s.projectCard__body_header_technologies">
          <component
            v-for="tech in filteredTechnologies"
            :key="tech"
            :is="getTechnologyIcon(tech)"
            :class="s.techIcon"
          />
        </div>
      </div>
      <div :class="s.projectCard__body__info">
        <p :class="s.projectCard__body__info_description">{{ project.description }}</p>

        <div :class="s.projectCard__body__info_projectLinks">
          <a
            v-if="project.githubUrl"
            :href="project.githubUrl"
            target="_blank"
            rel="noopener noreferrer"
            :class="s.projectLink"
          >
            <GitHubIcon :class="s.linkIcon" />
            <span>GitHub</span>
          </a>

          <a
            v-if="project.liveUrl"
            :href="project.liveUrl"
            target="_blank"
            rel="noopener noreferrer"
            :class="s.projectLink"
          >
            <LinkIcon :class="s.linkIcon" />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
