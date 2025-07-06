<script setup lang="ts">
import s from './SelectorFilter.module.scss'
import AngularIcon from "../../assets/icons/AngularIcon.vue";
import ReactIcon from "../../assets/icons/ReactIcon.vue";
import CSSIcon from "../../assets/icons/CSSIcon.vue";
import VueIcon from "../../assets/icons/VueIcon.vue";
import FlutterIcon from "../../assets/icons/FlutterIcon.vue";
import Html5Icon from "../../assets/icons/Html5Icon.vue";
import { ref } from 'vue'

interface FilterOption {
  id: string
  name: string
  icon: any
  checked: boolean
}

const filters = ref<FilterOption[]>([
  { id: 'angular', name: 'Angular', icon: AngularIcon, checked: false },
  { id: 'react', name: 'React', icon: ReactIcon, checked: false },
  { id: 'css', name: 'CSS', icon: CSSIcon, checked: false },
  { id: 'vue', name: 'Vue', icon: VueIcon, checked: false },
  { id: 'flutter', name: 'Flutter', icon: FlutterIcon, checked: false },
  { id: 'html', name: 'HTML', icon: Html5Icon, checked: false }
])

const emit = defineEmits<{
  filterChange: [selectedFilters: string[]]
}>()

const toggleFilter = (filterId: string) => {
  const filter = filters.value.find(f => f.id === filterId)
  if (filter) {
    filter.checked = !filter.checked
    const selectedFilters = filters.value
      .filter(f => f.checked)
      .map(f => f.id)
    emit('filterChange', selectedFilters)
  }
}
</script>

<template>
  <div :class="s.selectorFilter">
    <div :class="s.filtersList">
      <div
        v-for="filter in filters"
        :key="filter.id"
        :class="[s.filterItem, { [s.filterItemActive]: filter.checked }]"
        @click="toggleFilter(filter.id)"
      >
        <input
          type="checkbox"
          :checked="filter.checked"
          :class="s.checkbox"
          @change="toggleFilter(filter.id)"
        />
        <component :is="filter.icon" :class="s.icon" />
        <span :class="s.filterName">{{ filter.name }}</span>
      </div>
    </div>
  </div>
</template>
