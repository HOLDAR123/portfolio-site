<script setup lang="ts">
  import s from './SideBarLayout.module.scss'
</script>

<template>
  <aside :class="s.sideBarLayout">
    <slot/>
  </aside>
</template>
