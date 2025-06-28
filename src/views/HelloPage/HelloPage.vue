<script setup lang="ts">
import s from './HelloPage.module.scss'
import Container from "@/components/UI/Container/Container.vue"
import CodeSnippet from "@/components/CodeSnippet/CodeSnippet.vue"

const snippets = Array.from({ length: 4 }, (_, i) => `console.log('Snippet ${i + 1}')`)
</script>

<template>
  <Container :class="s.table">
    <div :class="s.leftPart">
      <div :class="s.leftPart_info">
        <span>Hi all. I am</span>
        <span>Timur Yesmagambetov</span>
        <span>> Full-stack developer</span>
      </div>
      <div :class="s.leftPart_github">
        <span>// find my profile on Github:</span>
        <span>
          <span>const</span>
          <span>githubLink</span>
          <span>=</span>
          <span>"https://github.com/HOLDAR123"</span>
        </span>
      </div>
    </div>
    <div :class="s.green"/>
    <div :class="s.purple"/>
    <div :class="s.rightPart">
      <div class="marquee-inner">
        <div
          class="marquee-item"
          v-for="(code, index) in [...snippets, ...snippets]"
          :key="index"
        >
          <CodeSnippet :code="code" />
        </div>
      </div>

    </div>
  </Container>
</template>

<style scoped>

.marquee-inner {
  height: 800px;
  display: flex;
  flex-direction: column;
  animation: scroll-up 6s linear infinite;
}

.marquee-item {
  margin-bottom: 16px;
}

@keyframes scroll-up {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-50%);
  }
}
</style>
