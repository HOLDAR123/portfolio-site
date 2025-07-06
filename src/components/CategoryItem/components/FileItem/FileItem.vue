<script setup lang="ts">
 import s from './FileItem.module.scss'
 import MarkdownIcon from "../../../../assets/icons/MarkdownIcon.vue";
 import type {fileItemDataType} from "../../../../constants/aboutMe.data";

 const props = defineProps<fileItemDataType>()
 const emit = defineEmits<{
   fileClick: [fileName: string]
 }>()

 const handleFileClick = () => {
   emit('fileClick', props.fileTitle)
 }
</script>

<template>
  <div :class="s.fileItem" @click="handleFileClick">
    <MarkdownIcon/>
    <span>{{props.fileTitle}}</span>
  </div>
</template>

