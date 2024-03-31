<template>
  <CardLayout
    title="Tickets Statistics"
    description="Everything About Support Tickets"
  >
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div
        v-for="{
          ticketKey,
          ticketValue,
          ticketIcon,
          ticketIconColor,
        } in tickets"
        class="border border-gray-400 rounded-lg flex flex-col items-center gap-1 p-6"
      >
        <icon
          :icon="ticketIcon"
          class="w-7 h-7"
          :style="{ color: useColorsPalette().getDark(ticketIconColor) }"
        />
        <div class="font-bold text-2xl">{{ ticketValue }}</div>
        <div class="text-sm text-gray-500">{{ ticketKey }}</div>
      </div>
    </div>
  </CardLayout>
</template>

<script setup>
import CardLayout from "../components/CardLayout.vue";
import { useColorsPalette } from "../composables/useColorsPalette";

const tickets = [
  {
    ticketKey: "Total",
    ticketValue: 2500,
    ticketIcon: "far fa-rectangle-list",
    ticketIconColor: "orange",
  },
  {
    ticketKey: "Pending",
    ticketValue: 500,
    ticketIcon: "fa-spinner",
    ticketIconColor: "blue",
  },
  {
    ticketKey: "Closed",
    ticketValue: 1900,
    ticketIcon: "far fa-circle-check",
    ticketIconColor: "green",
  },
  {
    ticketKey: "Deleted",
    ticketValue: 100,
    ticketIcon: "far fa-rectangle-xmark",
    ticketIconColor: "red",
  },
];
</script>
