<script setup lang="ts">
import s from './FooterLayout.module.scss'
import {
  leftFooterData,
  rightFooterData,
} from "@/constants/layouts.data.ts";
import LayoutItem from "@/components/LayoutItem/LayoutItem.vue";
</script>

<template>
  <div :class="s.footer">
    <div :class="s.footer__left">
      <LayoutItem
        v-for="item in leftFooterData"
        :id="item.id"
        :icon="item.icon"
        :name="item.name"
        :is-static="item.isStatic"
        :link="item.link"
      />
    </div>
    <div :class="s.footer__right">
      <LayoutItem
        v-for="(item, index) in rightFooterData"
        :id="item.id"
        :name="item.name"
        :is-static="item.isStatic"
        :link="item.link"
        :is-last="index === rightFooterData.length - 1 "
      />
    </div>
  </div>
</template>
