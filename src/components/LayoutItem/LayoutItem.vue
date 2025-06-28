<script setup lang="ts">
import s from './LayoutItem.module.scss'
import HeaderDataItemType from "@/types/header.type.ts";
import {useRoute} from "vue-router";
import {computed} from "vue";

const props = defineProps<HeaderDataItemType>()
const route = useRoute()

const isActive = computed(() => props.link === route.path && !props.isStatic)

</script>

<template>
  <component
    :is="props.link && !props.isStatic ? 'router-link' : 'div'"
    v-bind="props.link && !props.isStatic ? { to: props.link } : {}"
    :key="props.id"
  >
    <div :class="[s.layoutItem, {
      [s.layoutItem_static]: props.isStatic ,
      [s.layoutItem_last]: props.isLast
    }]">
        <span :class="[s.layoutItem_text, { [s.layoutItem_text_active]: isActive }]">
          {{ props.name }}
        </span>
      <Transition
        :enter-active-class="s.fadeEnter"
        :leave-active-class="s.fadeLeave"
        :enter-from-class="s.enterFrom"
        :enter-to-class="s.enterTo"
        :leave-to-class="s.leaveTo"
        :leave-from-class="s.leaveFrom"
      >
        <div
          v-if="isActive"
          :class="s.layoutItem_indicator"
        />
      </Transition>
    </div>
  </component>
</template>
