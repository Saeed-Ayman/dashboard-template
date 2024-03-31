<template>
  <CardLayout class="relative" title="Last Project Progress">
    <div class="relative">
      <div class="relative z-10 mt-6 space-y-6">
        <div
          v-for="{ stepTitle, stepStatus } in steps"
          class="flex gap-3 items-center"
        >
          <div class="w-7 h-7 border-2 rounded-full border-blue-500 bg-white">
            <div
              :class="{
                hidden: status.Pending == stepStatus,
                'animate-pulse': status.InProgress == stepStatus,
              }"
              class="w-5 h-5 m-0.5 bg-blue-500 rounded-full"
            ></div>
          </div>
          <div class="font-semibold">{{ stepTitle }}</div>
        </div>
      </div>

      <div
        class="absolute h-full w-0.5 bg-blue-500 top-0 left-3 translate-x-1/2 z-0"
      ></div>
    </div>

    <img
      class="hidden md:block absolute right-0 bottom-0 w-40 opacity-25"
      :src="importImg('project.png')"
      alt="project_img"
    />
  </CardLayout>
</template>

<script setup>
import CardLayout from "../components/CardLayout.vue";

const status = {
  InProgress: 0,
  Completed: 1,
  Pending: 2,
};

const steps = [
  { stepTitle: "Got The Project", stepStatus: status.Completed },
  { stepTitle: "Started The Project", stepStatus: status.Completed },
  { stepTitle: "The Project About To Finish", stepStatus: status.Completed },
  { stepTitle: "Test The Project", stepStatus: status.InProgress },
  { stepTitle: "Finish The Project & Get Money", stepStatus: status.Pending },
];
</script>
