<script setup lang="ts">
import { onBeforeUnmount, ref, onMounted } from 'vue'
import ComputerHeaderLayout from '@/layouts/HeaderLayout/components/ComputerHeaderLayout/ComputerHeaderLayout.vue'
import MobileHeaderLayout from '@/layouts/HeaderLayout/components/MobileHeaderLayout/MobileHeaderLayout.vue'

const isMobile = ref(false)

const checkMobile = () => {
  isMobile.value = window.innerWidth <= 768
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkMobile)
})
</script>

<template>
  <component :is="isMobile ? MobileHeaderLayout : ComputerHeaderLayout "/>
</template>
