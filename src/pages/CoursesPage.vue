<script setup>
const props = defineProps(["title"]);
const model = defineModel();

model.value = props.title;

const courses = [
  {
    creator: "team-01.png",
    cover: "course-01.jpg",
    title: "Mastering Web Design",
    description:
      "Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design Architecture",
    nOfMembers: 950,
    cost: 165,
  },
  {
    creator: "team-02.png",
    cover: "course-02.jpg",
    title: "Data Structure And Algorithms",
    description:
      "Master The Art Of Data Structure And Famous Algorithms Like Sorting, Dividing And Conquering",
    nOfMembers: 1150,
    cost: 210,
  },
  {
    creator: "team-01.png",
    cover: "course-03.jpg",
    title: "Responsive Web Design",
    description:
      "Mastering Responsive Web Design And Media Queries And Know Everything About Breakpoints",
    nOfMembers: 650,
    cost: 90,
  },
  {
    creator: "team-03.png",
    cover: "course-04.jpg",
    title: "Mastering Python",
    description:
      "Mastering Python To Prepare For Data Science And AI And Automating Things in Your Life",
    nOfMembers: 950,
    cost: 250,
  },
  {
    creator: "team-03.png",
    cover: "course-05.jpg",
    title: "PHP Examples",
    description:
      "PHP Tutorials And Examples And Practice On Web Application And Connecting With Databases",
    nOfMembers: 850,
    cost: 150,
  },
  {
    creator: "team-02.png",
    cover: "course-02.jpg",
    title: "Data Structure And Algorithms",
    description:
      "Master The Art Of Data Structure And Famous Algorithms Like Sorting, Dividing And Conquering",
    nOfMembers: 1150,
    cost: 210,
  },
  {
    creator: "team-01.png",
    cover: "course-03.jpg",
    title: "Responsive Web Design",
    description:
      "Mastering Responsive Web Design And Media Queries And Know Everything About Breakpoints",
    nOfMembers: 650,
    cost: 90,
  },
  {
    creator: "team-01.png",
    cover: "course-01.jpg",
    title: "Mastering Web Design",
    description:
      "Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design Architecture",
    nOfMembers: 950,
    cost: 165,
  },
  {
    creator: "team-03.png",
    cover: "course-05.jpg",
    title: "PHP Examples",
    description:
      "PHP Tutorials And Examples And Practice On Web Application And Connecting With Databases",
    nOfMembers: 850,
    cost: 150,
  },
  {
    creator: "team-03.png",
    cover: "course-04.jpg",
    title: "Mastering Python",
    description:
      "Mastering Python To Prepare For Data Science And AI And Automating Things in Your Life",
    nOfMembers: 950,
    cost: 250,
  },
];
</script>
<template>
  <div class="grid md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
    <div
      v-for="{
        creator,
        cover,
        title,
        description,
        nOfMembers,
        cost,
      } in courses"
      class="group relative bg-white rounded-lg overflow-hidden"
    >
      <div class="overflow-hidden">
        <img
          class="transition-all duration-500 block w-full max-h-80 object-cover group-hover:scale-125 group-hover:rotate-3 group-hover:brightness-50"
          :src="importImg(cover)"
          :alt="cover"
        />
      </div>

      <img
        class="absolute top-5 left-5 w-16 aspect-square rounded-full border-2 shadow-lg"
        :src="importImg(creator)"
        alt="avatar"
      />

      <div class="p-5 space-y-3">
        <div class="font-bold w-fit text-lg">{{ title }}</div>
        <div class="text-sm font-medium text-gray-400">{{ description }}</div>
      </div>

      <div class="relative border-t mt-4">
        <div
          class="absolute top-0 -translate-y-1/2 left-1/2 text-nowrap -translate-x-1/2 bg-blue-500 text-white font-semibold px-2.5 py-1 text-sm rounded-lg"
        >
          Course Info
        </div>

        <div class="flex justify-between p-5 text-sm text-gray-400 font-medium">
          <div>
            <icon icon="fa-regular fa-user" />
            {{ nOfMembers }}
          </div>
          <div>
            <icon icon="fa-dollar-sign" />
            {{ cost }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
