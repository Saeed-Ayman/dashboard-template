<script setup>
import CardLayout from "../components/CardLayout.vue";

const skills = [
  ["HTML", "Pugjs", "HAML"],
  ["CSS", "SASS", "Stylus"],
  ["JavaScript", "TypeScript"],
  ["Vuejs", "Reactjs"],
  ["Jest", "Jasmine"],
  ["PHP", "Laravel"],
  ["Python", "Django"],
];
</script>

<template>
  <CardLayout title="My Skills" description="Complete Skills List">
    <div
      v-for="skillsList in skills"
      class="py-3 border-b last:border-b-0 flex flex-wrap justify-center md:justify-start gap-2"
    >
      <span
        class="text-sm font-semibold bg-gray-100 px-2.5 py-1 rounded-md"
        v-for="skill in skillsList"
      >
        {{ skill }}
      </span>
    </div>
  </CardLayout>
</template>
