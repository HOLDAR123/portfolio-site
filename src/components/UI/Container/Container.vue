<script setup lang="ts">
import { computed } from 'vue'
import s from './Container.module.scss'

const props = defineProps<{
  class?: string
}>()

const classes = computed(() => [s.container, props.class])
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>
