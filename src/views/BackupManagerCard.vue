<script setup>
import { ref } from "vue";
import CardLayout from "../components/CardLayout.vue";
import {
  title,
  description,
  plansTimes,
  plansNames,
} from "../contexts/BackupManagerContext.json";

const activePlanName = ref(0);
const activePlanTime = ref(0);
</script>

<template>
  <CardLayout :title="title" :description="description">
    <div class="flex flex-col gap-3">
      <div class="flex gap-3 items-center" v-for="(planTime, i) in plansTimes">
        <input
          class="w-5 h-5"
          type="radio"
          name="backupTime"
          :id="planTime"
          :checked="i == activePlanTime"
          @click="activePlanTime = i"
        />
        <label class="font-medium cursor-pointer" :for="planTime">
          {{ planTime }}
        </label>
      </div>
    </div>

    <hr class="my-6" />

    <div class="flex flex-col md:flex-row gap-4">
      <div
        v-for="(planeName, i) in plansNames"
        class="w-full border-2 flex flex-col items-center py-4 rounded-lg cursor-pointer gap-2"
        :class="{
          'border-gray-200': activePlanName != i,
          'border-blue-500 text-blue-500': activePlanName == i,
        }"
        @click="activePlanName = i"
      >
        <icon icon="fa-server" />
        <div>{{ planeName }}</div>
      </div>
    </div>
  </CardLayout>
</template>
