<script setup lang="ts">
  import s from './MainLayout.module.scss'
  import FooterLayout from "@/layouts/FooterLayout/FooterLayout.vue";
  import HeaderLayout from "@/layouts/HeaderLayout/HeaderLayout.vue";
</script>

<template>
    <div :class="s.layout">
      <HeaderLayout/>
      <div :class="s.layout_content">
        <RouterView class="router-view" v-slot="{ Component }">
          <Transition name="page-slide" mode="out-in">
            <component :is="Component"/>
          </Transition>
        </RouterView>
      </div>
      <FooterLayout/>
    </div>
</template>

<style scoped>
.page-slide-leave-active,
.page-slide-enter-active {
  transition: 0.3s ease all;
}

.page-slide-enter-from,
.page-slide-leave-to {
  opacity: 0;
  transform: translateY(50px);
}


</style>
