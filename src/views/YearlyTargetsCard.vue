<template>
  <CardLayout title="Yearly Targets" description="Targets Of The Year">
    <div class="mt-5 space-y-5">
      <YearlyTargetItem v-for="target in targets" v-bind="target" />
    </div>
  </CardLayout>
</template>

<script setup>
import CardLayout from "../components/CardLayout.vue";
import YearlyTargetItem from "../components/YearlyTargetItem.vue";

const targets = [
  {
    targetColor: "blue",
    targetIcon: "fa-dollar-sign",
    targetName: "Money",
    targetValue: "$20.000",
    targetRatio: 80,
  },
  {
    targetColor: "orange",
    targetIcon: "fa-code",
    targetName: "Projects",
    targetValue: "24",
    targetRatio: 55,
  },
  {
    targetColor: "green",
    targetIcon: "fa-user",
    targetName: "Team",
    targetValue: "12",
    targetRatio: 75,
  },
];
</script>
