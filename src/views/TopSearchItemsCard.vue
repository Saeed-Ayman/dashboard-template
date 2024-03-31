<template>
  <CardLayout title="Top Search Items">
    <div class="space-y-6 my-6">
      <div class="flex justify-between text-gray-500 font-medium">
        <div>Keyword</div>
        <div>Search Count</div>
      </div>

      <div
        v-for="{ searchTitle, searchTimes } in searchItems"
        class="flex justify-between"
      >
        <div class="font-medium">{{ searchTitle }}</div>
        <div class="text-xs font-medium bg-gray-200 px-2.5 py-1 rounded-lg">
          {{ searchTimes }}
        </div>
      </div>
    </div>
  </CardLayout>
</template>

<script setup>
import CardLayout from "../components/CardLayout.vue";

const searchItems = [
  { searchTitle: "Programming", searchTimes: 220 },
  { searchTitle: "JavaScript", searchTimes: 180 },
  { searchTitle: "PHP", searchTimes: 160 },
  { searchTitle: "Code", searchTimes: 145 },
  { searchTitle: "Design", searchTimes: 110 },
  { searchTitle: "Logic", searchTimes: 95 },
];
</script>
