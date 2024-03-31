<template>
  <CardLayout title="Reminders">
    <div class="space-y-4 mt-6">
      <div
        v-for="{
          reminderTitle,
          reminderDate,
          reminderColor,
        } in remindersWithTrueColors"
        class="flex gap-3 items-center"
      >
        <div
          class="w-4 h-4 rounded-full"
          :style="{ backgroundColor: reminderColor }"
        ></div>
        <div class="border-l-2 px-4" :style="{ borderColor: reminderColor }">
          <div class="font-bold text-sm">{{ reminderTitle }}</div>
          <div class="text-gray-500 text-xs mt-2">{{ reminderDate }}</div>
        </div>
      </div>
    </div>
  </CardLayout>
</template>

<script setup>
import { computed } from "vue";
import CardLayout from "../components/CardLayout.vue";
import { useColorsPalette } from "../composables/useColorsPalette";

const reminders = [
  {
    reminderTitle: "Check My Tasks List",
    reminderDate: "28/09/2022 - 12:33am",
    reminderColor: "blue",
  },
  {
    reminderTitle: "Check My Projects",
    reminderDate: "26/10/2022 - 07:45am",
    reminderColor: "green",
  },
  {
    reminderTitle: "Call All My Clients",
    reminderDate: "05/11/2022 - 04:27am",
    reminderColor: "orange",
  },
  {
    reminderTitle: "Finish The Development Workshop",
    reminderDate: "20/12/2022 - 11:18am",
    reminderColor: "red",
  },
];

const colorsPalette = useColorsPalette();

const remindersWithTrueColors = computed(() =>
  reminders.map((reminder) => {
    reminder.reminderColor = colorsPalette.getDark(reminder.reminderColor);

    return reminder;
  })
);
</script>
