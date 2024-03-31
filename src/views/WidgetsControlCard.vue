<script setup>
import CardLayout from "../components/CardLayout.vue";
</script>

<template>
  <CardLayout title="Widgets Control" description="Show/Hide Widgets">
    <div class="flex flex-col gap-3">
      <div
        v-for="(text, i) in [
          'Quick Draft',
          'Yearly Targets',
          'Tickets Statistics',
          'Latest News',
          'Latest Tasks',
          'Top Search Items',
        ]"
        class="group flex gap-2 items-center"
      >
        <input class="w-4 h-4" type="checkbox" :id="`ch${i}`" />
        <label class="font-medium cursor-pointer" :for="`ch${i}`">
          {{ text }}
        </label>
      </div>
    </div>
  </CardLayout>
</template>
