<script setup>
import CardLayout from "../components/CardLayout.vue";

const activities = [
  {
    action: "Store",
    description: "Bought The Mastering Python Course",
    time: "18:10",
    date: "Yesterday",
    image: "activity-01.png",
    image_alt: "activity_img",
  },

  {
    action: "Academy",
    description: "Got The PHP Certificate",
    time: "16:05",
    date: "Yesterday",
    image: "activity-02.png",
    image_alt: "activity_img",
  },

  {
    action: "Badges",
    description: "Unlocked The 10 Skills Badge",
    time: "18:05",
    date: "Yesterday",
    image: "activity-03.png",
    image_alt: "activity_img",
  },

  {
    action: "Store",
    description: "Bought The Typescript Course",
    time: "12:05",
    date: "Yesterday",
    image: "activity-01.png",
    image_alt: "activity_img",
  },
];
</script>

<template>
  <CardLayout
    title="Latest Activities"
    description="Latest Activities Done By The User"
  >
    <div
      v-for="{
        action,
        description,
        time,
        date,
        image,
        image_alt,
      } in activities"
      class="py-3 border-b last:border-b-0 flex flex-col md:flex-row items-center gap-2 text-center"
    >
      <img
        class="w-16 aspect-square"
        :src="importImg(image)"
        :alt="image_alt"
      />

      <div class="md:flex-1 flex flex-col md:text-left">
        <div>{{ action }}</div>
        <div class="text-gray-400 font-medium">{{ description }}</div>
      </div>

      <div class="flex flex-col md:text-right">
        <div>{{ time }}</div>
        <div class="text-gray-400">{{ date }}</div>
      </div>
    </div>
  </CardLayout>
</template>
