<template>
  <div class="bg-white overflow-hidden rounded-lg px-6 py-4">
    <div class="mb-4">
      <MainTitle>{{ title }}</MainTitle>
      <LightText v-if="description">{{ description }}</LightText>
    </div>
    <slot />
  </div>
</template>

<script setup>
import LightText from "./LightText.vue";
import MainTitle from "./MainTitle.vue";

defineProps({ title: String, description: String });
</script>
