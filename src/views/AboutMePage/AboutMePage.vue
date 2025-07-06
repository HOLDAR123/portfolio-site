<script setup lang="ts">
import s from './AboutMePage.module.scss'
import { ref } from 'vue'
import CategoryItem from "../../components/CategoryItem/CategoryItem.vue";
import FolderItem from "../../components/CategoryItem/components/FolderItem/FolderItem.vue";
import CodeEditor from "../../components/CodeEditor/CodeEditor.vue";
import MarkdownIcon from "../../assets/icons/MarkdownIcon.vue";
import {categoryItemData} from "../../constants/aboutMe.data";
import {fileContents} from "../../constants/fileContents.data";
import SideBarLayout from "../../layouts/SideBarLayout/SideBarLayout.vue";
import {onMounted} from "@vue/runtime-core";

interface OpenFile {
  fileName: string
  fileContent: string
  id: string
}

const openFiles = ref<OpenFile[]>([])
const activeFileId = ref<string>('')

const handleFileClick = (fileName: string) => {
  const fileKey = `${fileName}.md`
  const fileData = fileContents[fileKey]

  if (fileData) {
    const existingFileIndex = openFiles.value.findIndex(file => file.fileName === fileData.fileName)

    if (existingFileIndex === -1) {
      const fileId = `${fileName}-${Date.now()}`
      const newFile: OpenFile = {
        fileName: fileData.fileName,
        fileContent: fileData.content,
        id: fileId
      }
      openFiles.value.push(newFile)
      activeFileId.value = fileId
    } else {
      activeFileId.value = openFiles.value[existingFileIndex].id
    }
  }
}

const closeFile = (fileId: string) => {
  const fileIndex = openFiles.value.findIndex(file => file.id === fileId)
  if (fileIndex !== -1) {
    openFiles.value.splice(fileIndex, 1)

    if (activeFileId.value === fileId) {
      if (openFiles.value.length > 0) {
        activeFileId.value = openFiles.value[Math.min(fileIndex, openFiles.value.length - 1)].id
      } else {
        activeFileId.value = ''
      }
    }
  }
}

const switchToFile = (fileId: string) => {
  activeFileId.value = fileId
}

const getActiveFile = () => {
  return openFiles.value.find(file => file.id === activeFileId.value)
}

onMounted(() => {
  handleFileClick('about-me')
})
</script>

<template>
  <div :class="s.aboutMePage">
    <SideBarLayout>
          <CategoryItem
            v-for="category in categoryItemData"
            :key="category.categoryTitle"
            :category-title="category.categoryTitle"
            @file-click="handleFileClick"
          >
            <template #default="{ onFileClick }">
              <FolderItem
                v-for="folder in category.folders"
                :key="folder.folderTitle"
                :files="folder.files"
                :folder-color="folder.folderColor"
                :folder-title="folder.folderTitle"
                @file-click="onFileClick"
              />
            </template>
          </CategoryItem>
    </SideBarLayout>

    <Transition name="code-editor">
      <CodeEditor
        v-if="openFiles.length > 0"
        :open-files="openFiles"
        :active-file-id="activeFileId"
        @close-file="closeFile"
        @switch-file="switchToFile"
      />
    </Transition>
  </div>
</template>

<style scoped>
.code-editor-enter-active,
.code-editor-leave-active {
  transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s, border-bottom 0.4s;
  overflow: hidden;
}
.code-editor-enter-from,
.code-editor-leave-to {
  max-height: 0;
  opacity: 0;
  border-bottom-width: 0;
}
.code-editor-enter-to,
.code-editor-leave-from {
  max-height: 100%;
  opacity: 1;
}
</style>



