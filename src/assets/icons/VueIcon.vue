<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <g clip-path="url(#clip0)">
      <path
        d="M1 3H5L12 15L19 3H23L12 22L1 3ZM9.667 3L12 7L14.333 3H18.368L12 14L5.632 3H9.667Z"
        :fill="color"
      />
    </g>
    <defs>
      <clipPath id="clip0">
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
