<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <g clip-path="url(#clip0_26505_1085)">
      <path
        d="M12 16L6 10H18L12 16Z"
        :fill="color"
      />
    </g>
    <defs>
      <clipPath id="clip0_26505_1085">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
</template>

<script setup>
defineProps({
  width: {
    type: [Number, String],
    default: 24,
  },
  height: {
    type: [Number, String],
    default: 24,
  },
  color: {
    type: String,
    default: '#62748E',
  },
})
</script>
