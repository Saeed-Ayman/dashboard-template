<script setup>
const model = defineModel({ type: Boolean });
</script>

<template>
  <div
    @click="model = !model"
    class="w-20 h-8 transition duration-300 rounded-full relative cursor-pointer"
    :class="{ 'bg-blue-500': model, 'bg-gray-300': !model }"
  >
    <icon
      class="absolute transition duration-300 top-1 left-1 w-6 h-6 text-white rounded-full"
      :class="{ 'translate-x-12': model }"
      :icon="model ? 'circle-check' : 'circle-xmark'"
    />
  </div>
</template>
