<template>
  <div class="flex gap-4">
    <div
      class="w-20 aspect-square grid place-content-center rounded"
      :style="{ backgroundColor: color.light }"
    >
      <icon class="w-5 h-5" :style="{ color: color.dark }" :icon="targetIcon" />
    </div>
    <div class="flex-grow flex flex-col justify-evenly">
      <div class="text-sm font-medium text-gray-500">{{ targetName }}</div>
      <div class="font-bold">{{ targetValue }}</div>
      <div
        class="w-full h-1 rounded-full"
        :style="{ backgroundColor: color.light }"
      >
        <div
          class="relative h-full rounded-full"
          :style="{
            width: `${targetRatio}%`,
            backgroundColor: color.dark,
          }"
        >
          <div
            class="absolute right-0 translate-x-1/2 -top-10 text-xs text-white px-2 py-1 rounded-md"
            :style="{ backgroundColor: color.dark }"
          >
            {{ targetRatio }}%
          </div>
          <div
            class="absolute border-8 border-transparent -top-4 right-0 translate-x-1/2 -translate-y-0.5"
            :style="{ borderTopColor: color.dark }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useColorsPalette } from "../composables/useColorsPalette";

const props = defineProps({
  targetName: String,
  targetValue: String,
  targetRatio: Number,
  targetIcon: String,
  targetColor: String,
});

const color = useColorsPalette().get(props.targetColor);
</script>
