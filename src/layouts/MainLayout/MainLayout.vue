<script setup lang="ts">
  import s from './MainLayout.module.scss'
  import FooterLayout from "@/layouts/FooterLayout/FooterLayout.vue";
  import HeaderLayout from "@/layouts/HeaderLayout/HeaderLayout.vue";
</script>

<template>
    <div :class="s.layout">
      <HeaderLayout/>
      <div :class="s.layout_content">
        <slot/>
      </div>
      <FooterLayout/>
    </div>
</template>
