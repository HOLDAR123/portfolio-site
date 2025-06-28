<script setup lang="ts">
 import s from './CodeSnippet.module.scss'

 import Prism from 'prismjs'
 import 'prismjs/components/prism-javascript'
 import 'prismjs/themes/prism-tomorrow.css'
 import {onMounted, ref, watch} from "@vue/runtime-core";

 const props = defineProps<{
   code: string,
   language?: string,
 }>()

 const highlightedCode = ref('')

 const highlight = () => {
   const lang = Prism.languages[props.language || 'javascript']
   highlightedCode.value = Prism.highlight(props.code, lang, props.language || 'javascript')
 }

 onMounted(highlight)
 watch(() => props.code, highlight)
</script>

<template>
  <pre :class="s.codeSnippet">
    <code v-html="highlightedCode"/>
  </pre>
</template>
