<script setup>
const props = defineProps(["title"]);
const model = defineModel();

model.value = props.title;

const projects = [
  {
    title: "Elzero Dashboard",
    description: "Elzero Dashboard Project Design And Programming And Hosting",
    team: [
      "team-01.png",
      "team-02.png",
      "team-03.png",
      "team-04.png",
      "team-05.png",
    ],
    categories: ["Programming", "Design", "Hosting", "Marketing"],
    progress: 0.5,
    cost: 2500,
    date: "15/10/2021",
  },
  {
    title: "Academy Portal",
    description: "Academy Portal Project Design And Programming",
    team: ["team-01.png", "team-02.png", "team-03.png"],
    categories: ["Programming", "Design"],
    progress: 0.75,
    cost: 1800,
    date: "15/6/2022",
  },
  {
    title: "Chatting Application",
    description: "Chatting Application Project Design",
    team: ["team-01.png", "team-02.png", "team-03.png"],
    categories: ["Design"],
    progress: 1,
    cost: 950,
    date: "15/6/2022",
  },
  {
    title: "Ahmed Dashboard",
    description: "Ahmed Dashboard Project Design And Programming And Hosting",
    team: ["team-01.png", "team-02.png", "team-03.png", "team-04.png"],
    categories: ["Programming", "Design", "Hosting", "Marketing"],
    progress: 0.6,
    cost: 1700,
    date: "15/6/2022",
  },
  {
    title: "Ahmed Portal",
    description: "Ahmed Portal Project Design And Programming",
    team: ["team-01.png", "team-02.png", "team-03.png"],
    categories: ["Programming", "Design"],
    progress: 0.7,
    cost: 850,
    date: "15/6/2022",
  },
  {
    title: "Mohamed Application",
    description: "Mohamed Application Project Design",
    team: ["team-01.png", "team-02.png", "team-03.png"],
    categories: ["Design"],
    progress: 0.4,
    cost: 950,
    date: "15/6/2022",
  },
  {
    title: "Mohamed Dashboard",
    description: "Mohamed Dashboard Project Design And Programming And Hosting",
    team: ["team-01.png", "team-02.png", "team-03.png", "team-04.png"],
    categories: ["Programming", "Design", "Hosting", "Marketing"],
    progress: 0.65,
    cost: 1950,
    date: "15/6/2022",
  },
  {
    title: "Mohamed Portal",
    description: "Mohamed Portal Project Design And Programming",
    team: ["team-01.png", "team-02.png", "team-03.png"],
    categories: ["Programming", "Design"],
    progress: 0.6,
    cost: 1650,
    date: "15/6/2022",
  },
  {
    title: "Ahmed Application",
    description: "Ahmed Application Project Design",
    team: ["team-01.png", "team-02.png", "team-03.png"],
    categories: ["Design"],
    progress: 0.9,
    cost: 950,
    date: "15/6/2022",
  },
];
</script>

<template>
  <div class="grid md:grid-cols-[repeat(auto-fit,minmax(450px,1fr))] gap-4">
    <div
      v-for="{
        title,
        description,
        team,
        categories,
        progress,
        cost,
        date,
      } in projects"
      class="relative bg-white overflow-hidden rounded-lg px-6 py-4"
    >
      <div class="absolute top-2 right-2 text-xs text-gray-400">{{ date }}</div>
      <div class="text-sm">{{ title }}</div>
      <div class="text-xs text-gray-400 font-medium py-1">
        {{ description }}
      </div>

      <div class="flex -space-x-2 pt-6 pb-2">
        <a
          href="#"
          v-for="img in team"
          class="border-2 border-white rounded-full aspect-square w-8 hover:relative hover:z-20 overflow-hidden"
        >
          <img :src="importImg(img)" :alt="img" />
        </a>
      </div>

      <div class="border-y flex flex-wrap md:justify-end md:gap-2 gap-3 py-3">
        <div
          class="text-xs bg-gray-100 w-fit px-2.5 py-1 rounded-md"
          v-for="category in categories"
        >
          {{ category }}
        </div>
      </div>

      <div
        class="flex flex-col items-center py-3 gap-3 md:flex-row justify-between"
      >
        <div class="relative mx-2 max-w-60 w-full bg-gray-100 h-2 rounded-full">
          <div
            class="text-[8px] md:text-xs absolute top-1/2 -translate-y-1/2 md:-right-2 md:translate-x-full right-1/2 translate-x-1/2 md:text-gray-400"
          >
            {{ 100 * progress }}%
          </div>

          <div
            class="h-full rounded-full"
            :class="{
              'bg-blue-500': progress == 1,
              'bg-green-500': progress > 0.5 && progress < 1,
              'bg-red-500': progress <= 0.5,
            }"
            :style="{ width: `${progress * 100}%` }"
          ></div>
        </div>

        <div class="text-xs text-gray-400 font-semibold">
          <icon icon="fa-dollar-sign" />
          {{ cost }}
        </div>
      </div>
    </div>
  </div>
</template>
