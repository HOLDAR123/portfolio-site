<script setup lang="ts">
import s from './FolderItem.module.scss'

import {ref} from "@vue/runtime-core";
import ArrowRightIcon from "../../../../assets/icons/ArrowRightIcon.vue";
import FolderItemIcon from "../../../../assets/icons/FolderItemIcon.vue";
import {folderItemDataType} from "../../../../constants/aboutMe.data";
import FileItem from "../FileItem/FileItem.vue";

const isOpen = ref<boolean>(false)

const props = defineProps<folderItemDataType>()
const emit = defineEmits<{
  fileClick: [fileName: string]
}>()

function toggleOpenDropdown () {
  isOpen.value = !isOpen.value
}

function handleFileClick(fileName: string) {
  emit('fileClick', fileName)
}

function findColorFolder (color: 'red' | 'purple' | 'green') {
  switch (color) {
    case "green":
      return "#00D5BE"
    case "purple":
      return "#615FFF"
    case "red":
      return "#FF637E"
  }
}

// Автоматически открываем папку bio
if (props.folderTitle === 'bio') {
  isOpen.value = true
}
</script>

<template>
  <div :class="s.folderItem">
    <div @click="toggleOpenDropdown" :class="s.folderItem_header">
      <ArrowRightIcon
        :width="16"
        :height="16"
        :color="isOpen ? '#F8FAFC' : '#62748E'"
        :class="[s.folderItem_header_arrow, {
    [s.folderItem_header_arrow_active]: isOpen
  }]"
      />
      <span :class="s.folderItem_header_wrapper">
        <FolderItemIcon :color="findColorFolder(props.folderColor)"/>
        <span :class="[s.folderItem_header_wrapper_title, {
        [s.folderItem_header_wrapper_title_active]: isOpen
      }]">{{props.folderTitle}}</span>
      </span>
    </div>
    <transition name="folder-dropdown">
      <div v-show="isOpen" :class="s.folderItem_content">
        <FileItem 
          v-for="file in props.files" 
          :key="file.fileTitle"
          :file-title="file.fileTitle" 
          :link="file.link"
          @file-click="handleFileClick"
        />
      </div>
    </transition>
  </div>
</template>

<style scoped>
.folder-dropdown-enter-active,
.folder-dropdown-leave-active {
  transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s, border-bottom 0.4s;
  overflow: hidden;
}

.folder-dropdown-enter-from,
.folder-dropdown-leave-to {
  max-height: 0;
  opacity: 0;
  border-bottom-width: 0;
}

.folder-dropdown-enter-to,
.folder-dropdown-leave-from {
  max-height: 500px;
  opacity: 1;
  border-bottom-width: 1px;
}
</style>
