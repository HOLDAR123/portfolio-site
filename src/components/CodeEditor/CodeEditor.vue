<script setup lang="ts">
import s from './CodeEditor.module.scss'
import { ref, computed } from 'vue'
import CloseIcon from '../../assets/icons/CloseIcon.vue'

interface OpenFile {
  fileName: string
  fileContent: string
  id: string
}

interface CodeEditorProps {
  openFiles: OpenFile[]
  activeFileId: string
}

const props = defineProps<CodeEditorProps>()
const emit = defineEmits<{
  closeFile: [fileId: string]
  switchFile: [fileId: string]
}>()

const activeFile = computed(() => {
  return props.openFiles.find(file => file.id === props.activeFileId)
})

const lines = computed(() => {
  return activeFile.value?.fileContent.split('\n') || []
})

const getFileIcon = (fileName: string) => {
  const extension = fileName.split('.').pop()?.toLowerCase()
  switch (extension) {
    case 'md':
      return '📄'
    case 'js':
    case 'ts':
      return '📜'
    case 'vue':
      return '💚'
    case 'scss':
    case 'css':
      return '🎨'
    case 'html':
      return '🌐'
    default:
      return '📄'
  }
}

const closeFile = (fileId: string, event: Event) => {
  event.stopPropagation()
  emit('closeFile', fileId)
}

const switchToFile = (fileId: string) => {
  emit('switchFile', fileId)
}

const isActiveTab = (fileId: string) => {
  return fileId === props.activeFileId
}
</script>

<template>
  <div :class="s.editor">
    <div :class="s.header">
        <div :class="s.tabs">
          <TransitionGroup name="tabs">
          <div
            v-for="file in openFiles"
            :key="file.id"
            :class="[s.tab, { [s.tabActive]: isActiveTab(file.id) }]"
            @click="switchToFile(file.id)"
          >
            <span :class="s.tabIcon">{{ getFileIcon(file.fileName) }}</span>
            <span :class="s.tabTitle">{{ file.fileName }}</span>
            <button
              :class="s.tabCloseButton"
              @click="closeFile(file.id, $event)"
            >
              <CloseIcon :width="12" :height="12" color="#62748E" />
            </button>
          </div>
          </TransitionGroup>
        </div>
    </div>

    <div v-if="activeFile" :class="s.content">
      <div :class="s.lineNumbers">
        <div
          v-for="(line, index) in lines"
          :key="index"
          :class="s.lineNumber"
        >
          {{ index + 1 }}
        </div>
      </div>
      <div :class="s.codeContent">
        <div
          v-for="(line, index) in lines"
          :key="index"
          :class="s.codeLine"
        >
          {{ line || ' ' }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tabs-leave-active,
.tabs-enter-active {
  transition: 0.3s ease all;

}

.tabs-enter-from,
.tabs-leave-to {
  opacity: 0;
  transform: scale(0.5);
}
</style>
