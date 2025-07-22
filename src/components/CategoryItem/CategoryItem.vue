<script setup lang="ts">
import {ref} from 'vue'
import s from './CategoryItem.module.scss'
import ArrowSolidDownIcon from "../../assets/icons/ArrowSolidDownIcon.vue";
const isOpen = ref<boolean>(false)

interface CategoryItemProps  {
  categoryTitle: string
}

const props = defineProps<CategoryItemProps>()
const emit = defineEmits<{
  fileClick: [fileName: string]
}>()

function toggleOpenDropdown() {
  isOpen.value = !isOpen.value
}

function handleFileClick(fileName: string) {
  emit('fileClick', fileName)
}


if (props.categoryTitle === 'personal-info' || props.categoryTitle === "projects") {
  isOpen.value = true
}
</script>

<template>
  <div :class="s.categoryItem">
    <div @click="toggleOpenDropdown" :class="s.categoryItem_header">
      <ArrowSolidDownIcon
        :width="16"
        :height="16"
        :color="isOpen ? '#F8FAFC' : '#62748E'"
        :class="[s.categoryItem_header_arrow, {
    [s.categoryItem_header_arrow_active]: isOpen
  }]"
      />
      <span :class="[s.categoryItem_header_title, {
        [s.categoryItem_header_title_active]: isOpen
      }]">{{ props.categoryTitle }}</span>
    </div>
    <transition name="category-dropdown">
      <div v-show="isOpen" :class="s.categoryItem_content">
        <slot :on-file-click="handleFileClick"/>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.category-dropdown-enter-active,
.category-dropdown-leave-active {
  transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s, border-bottom 0.4s;
  overflow: hidden;
}
.category-dropdown-enter-from,
.category-dropdown-leave-to {
  max-height: 0;
  opacity: 0;
  border-bottom-width: 0;
}
.category-dropdown-enter-to,
.category-dropdown-leave-from {
  max-height: 500px;
  opacity: 1;
}
</style>
