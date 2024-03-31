<script setup>
const props = defineProps(["title"]);
const model = defineModel();

model.value = props.title;

const services = [
  "Access All Text Lessons",
  "Access All Videos Lessons",
  "Appear On Leaderboard",
  "Browse Content Without Ads",
  "Access All Assignments",
  "Get Daily Prizes",
  "Earn Certificate",
  "1 GB Space For Hosting Files",
  "Access Badge System",
];

const plans = [
  {
    title: "Free",
    cost: "0.00",
    includedServices: [1, 2, 3],
    bgColor: "bg-green-500",
    ringColor: "ring-green-500",
  },
  {
    title: "Basic",
    cost: "7.99",
    includedServices: [1, 2, 3, 4, 5, 6, 7],
    bgColor: "bg-blue-500",
    ringColor: "ring-blue-500",
  },
  {
    title: "Premium",
    cost: "19.99",
    includedServices: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    bgColor: "bg-yellow-500",
    ringColor: "ring-yellow-500",
  },
];

const currentPlan = "Premium";
</script>

<template>
  <div
    class="grid md:grid-cols-[repeat(auto-fit,minmax(450px,1fr))] 3xl:grid-cols-[repeat(auto-fit,450px)] gap-4"
  >
    <div
      v-for="{ title, cost, includedServices, bgColor, ringColor } in plans"
      class="bg-white rounded-lg p-4"
    >
      <div
        class="border-2 border-white ring-4 h-32 text-white flex justify-center items-center flex-col rounded"
        :class="[bgColor, ringColor]"
      >
        <div class="font-bold text-2xl">{{ title }}</div>
        <div class="font-medium text-4xl">
          <icon class="text-xl align-top" icon="fa-dollar-sign" />
          {{ cost }}
        </div>
      </div>

      <ul class="mt-4">
        <li
          class="border-b py-4 flex justify-between items-center gap-2"
          v-for="(service, i) in services"
        >
          <div class="flex gap-2 items-center">
            <icon
              v-if="includedServices.includes(i + 1)"
              icon="fa-check"
              class="text-green-500"
            />
            <icon v-else icon="fa-xmark" class="text-red-500" />

            <div class="text-sm font-medium">{{ service }}</div>
          </div>

          <icon icon="fa-circle-info" class="text-gray-400 cursor-pointer" />
        </li>
      </ul>

      <button
        v-if="currentPlan != title"
        class="mt-4 text-white text-sm font-semibold px-2.5 py-1 rounded-md"
        :class="bgColor"
      >
        Join
      </button>
      <div v-else class="mt-4 font-semibold text-center text-gray-400">
        This Is Your Current Plan
      </div>
    </div>
  </div>
</template>
