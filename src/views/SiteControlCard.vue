<script setup>
import { ref } from "vue";
import CardLayout from "../components/CardLayout.vue";
import SwitchButton from "../components/SwitchButton.vue";

const close_website = ref();
</script>

<template>
  <CardLayout
    title="Site Control"
    description="Control The Website If There Is Maintenance"
  >
    <div class="flex justify-between my-6">
      <div>
        <div>Website Control</div>
        <div class="text-xs font-medium text-gray-500 mt-1">
          Open/Close Website And Type The Reason
        </div>
      </div>

      <SwitchButton v-model="close_website" />
    </div>

    <textarea
      rows="8"
      class="border border-stone-300 w-full text-xs p-2 rounded resize-none"
      placeholder="Close Message Content"
    ></textarea>
  </CardLayout>
</template>
