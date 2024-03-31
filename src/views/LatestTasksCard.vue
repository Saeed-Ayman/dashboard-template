<template>
  <CardLayout title="Latest Tasks">
    <div class="divide-y-2 pt-2">
      <div
        v-for="{ taskTitle, taskDescription, deleted } in tasks"
        class="py-4 flex justify-between"
      >
        <div>
          <div
            :class="{
              'text-gray-400 line-through': deleted,
              'font-bold': true,
            }"
          >
            {{ taskTitle }}
          </div>
          <div
            class="font-medium"
            :class="{
              'text-gray-300 line-through': deleted,
              'text-gray-500': !deleted,
            }"
          >
            {{ taskDescription }}
          </div>
        </div>

        <button
          :class="{ 'text-gray-400': deleted, 'hover:text-red-500': !deleted }"
          :disabled="deleted"
        >
          <icon icon="far fa-trash-can" />
        </button>
      </div>
    </div>
  </CardLayout>
</template>

<script setup>
import CardLayout from "../components/CardLayout.vue";

const tasks = [
  {
    taskTitle: "Record One New Video",
    taskDescription: "Record Python Create Exe Project",
    deleted: false,
  },
  {
    taskTitle: "Write Article",
    taskDescription: "Write Low Level vs High Level Languages",
    deleted: false,
  },
  {
    taskTitle: "Finish Project",
    taskDescription: "Publish Academy Programming Project",
    deleted: false,
  },
  {
    taskTitle: "Attend The Meeting",
    taskDescription: "Attend The Project Business Analysis Meeting",
    deleted: true,
  },
  {
    taskTitle: "Finish Lesson",
    taskDescription: "Finish Teaching Flex Box",
    deleted: false,
  },
];
</script>
