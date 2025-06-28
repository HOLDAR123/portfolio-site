<script setup lang="ts">
import s from './LayoutItem.module.scss'
import type { HeaderDataItemType } from "@/types/header.type.ts";
import { useRoute } from "vue-router";
import { computed } from "vue";

const props = defineProps<HeaderDataItemType>()
const route = useRoute()

const isActive = computed(() =>
  props.link === route.path && !props.isStatic && props.isIndicator
)

const shouldShowIndicator = computed(() =>
  props.isIndicator && props.link === route.path
)

const isExternalLink = computed(() =>
  /^https?:\/\//.test(props.link ?? '')
)


</script>

<template>
  <component
    :is="isExternalLink ? 'a' : (props.link && !props.isStatic ? 'router-link' : 'div')"
    v-bind="isExternalLink
      ? { href: props.link, target: '_blank', rel: 'noopener noreferrer' }
      : (props.link && !props.isStatic ? { to: props.link } : {})"
    :key="props.id"
  >
    <div :class="[s.layoutItem, {
      [s.layoutItem_static]: props.isStatic,
      [s.layoutItem_icon]: props.icon && !props.name,
      [s.layoutItem_last]: props.isLast
    }]">
      <div class="content-wrapper">
        <component v-if="props.icon" :is="props.icon" class="icon" />
        <span
          v-if="props.name"
          :class="[s.layoutItem_text, { [s.layoutItem_text_active]: isActive }]"
        >
          {{ props.name }}
        </span>
      </div>

      <Transition
        :enter-active-class="s.fadeEnter"
        :leave-active-class="s.fadeLeave"
        :enter-from-class="s.enterFrom"
        :enter-to-class="s.enterTo"
        :leave-to-class="s.leaveTo"
        :leave-from-class="s.leaveFrom"
      >
        <div
          v-if="shouldShowIndicator"
          :class="s.layoutItem_indicator"
        />
      </Transition>
    </div>
  </component>
</template>
