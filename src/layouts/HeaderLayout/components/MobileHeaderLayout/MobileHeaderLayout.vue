<script setup lang="ts">
  import s from './MobileHeaderLayout.module.scss'
  import HamburgerMenuIcon from '@/assets/icons/HamburgerMenuIcon.vue'
  import { ref } from 'vue'
  import CloseIcon from '@/assets/icons/CloseIcon.vue'
  import { HeaderMobileData } from '@/constants/layouts.data'
  import { watch } from '@vue/runtime-core'
  import { useRoute } from 'vue-router'

  const isActive = ref(false)

  const route = useRoute()

  const toggleOpenModal = () => {
    isActive.value = !isActive.value
  }


  watch(() => route.path, () => {
    isActive.value = false
  })

</script>

<template>
  <div :class="s.mobileHeaderLayout">
    <div :class="s.mobileHeaderLayout_content">
      <div :class="s.mobileHeaderLayout_content_left">
        wrfwerr
      </div>
      <div :class="s.mobileHeaderLayout_content_right">
        <component @click="toggleOpenModal" :is="isActive ? CloseIcon : HamburgerMenuIcon" />
      </div>
    </div>
  </div>
  <div v-if="isActive" :class="s.mobileHeaderLayout_modal">
    <RouterLink
      v-for="(item, index) in HeaderMobileData"
      :key="index"
      :to="item.link"
      :class="[
          s.mobileHeaderLayout_modal_item,
          index === 0 ? s.redItem : s.whiteItem,
          !item.link && s.disabledLink
        ]"
    >
      <span>{{ item.name }}</span>
    </RouterLink>
  </div>
</template>

