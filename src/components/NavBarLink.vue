<template>
  <router-link
    :class="{
      'bg-gray-50 rounded-lg md:rounded-md': $route.name == urlName,
      'hover:bg-gray-50 hover:rounded-lg hover:md:rounded-md':
        $route.name != urlName,
    }"
    class="py-2 px-3"
    :to="{ name: urlName }"
  >
    <icon :icon="linkIcon" />
    <span class="hidden md:inline-block text-sm font-medium px-2">
      {{ label }}
    </span>
  </router-link>
</template>

<script setup>
defineProps({
  linkIcon: String,
  label: String,
  urlName: String,
});
</script>
