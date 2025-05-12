<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <g clip-path="url(#clip0_26505_1091)">
      <path
        d="M9.99999 15.172L19.192 5.979L20.607 7.393L9.99999 18L3.63599 11.636L5.04999 10.222L9.99999 15.172Z"
        :fill="color"
      />
    </g>
    <defs>
      <clipPath id="clip0_26505_1091">
        <rect width="24" height="24" fill="white"/>
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
