<script setup lang="ts">
import s from './HeaderLayout.module.scss';
import {leftHeaderData, rightHeaderData} from "@/constants/layouts.data.ts";
import LayoutItem from "@/components/LayoutItem/LayoutItem.vue";
</script>

<template>
  <div :class="s.container">
    <div :class="s.container__left">
      <LayoutItem
        v-for="item in leftHeaderData"
        :id="item.id"
        :name="item.name"
        :is-indicator="item.isIndicator"
        :is-static="item.isStatic"
        :link="item.link"
      />
    </div>
    <div :class="s.container__right">
      <LayoutItem
        v-for="(item, index) in rightHeaderData"
        :id="item.id"
        :name="item.name"
        :is-indicator="item.isIndicator"
        :is-static="item.isStatic"
        :link="item.link"
        :is-last="index === rightHeaderData.length - 1 "
      />
    </div>
  </div>
</template>
