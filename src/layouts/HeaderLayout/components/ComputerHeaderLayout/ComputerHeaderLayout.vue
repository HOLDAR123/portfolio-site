<script setup lang="ts">
import s from './ComputerHeaderLayout.module.scss';
import {leftHeaderData} from "@/constants/layouts.data.ts";
import LayoutItem from "@/components/LayoutItem/LayoutItem.vue";
</script>

<template>
  <div :class="s.container">
    <div :class="s.container__left">
      <LayoutItem
        v-for="(item, index) in leftHeaderData"
        :key="index"
        :id="item.id"
        :name="item.name"
        :is-indicator="item.isIndicator"
        :is-static="item.isStatic"
        :link="item.link"
      />
    </div>
  </div>
</template>
