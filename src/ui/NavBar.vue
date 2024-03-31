<template>
  <div class="p-2 relative z-10 shadow-lg">
    <h1 class="font-bold text-xs md:text-lg md:text-center md:px-12 md:py-4">
      Template
    </h1>

    <div
      class="hidden md:block relative mx-auto border border-t-1 w-28 border-black"
    >
      <span
        class="absolute left-14 -top-1.5 -translate-x-1/2 w-3 h-3 bg-black rounded-full ring-4 ring-white border-white"
      ></span>
    </div>

    <div class="px-2 py-4 md:py-6 flex flex-col gap-1 text-center md:text-left">
      <NavBarLink
        v-for="(link, i) of links"
        v-bind="link"
        :key="`Nav-Link${i}`"
      />
    </div>
  </div>
</template>

<script setup>
import NavBarLink from "../components/NavBarLink.vue";

const links = [
  {
    linkIcon: "far fa-chart-bar",
    label: "Dashboard",
    urlName: "admin.dashboard",
  },
  {
    linkIcon: "fa-gear",
    label: "Settings",
    urlName: "admin.settings",
  },
  {
    linkIcon: "far fa-user",
    label: "Profile",
    urlName: "admin.profile",
  },
  {
    linkIcon: "fa-diagram-project",
    label: "Projects",
    urlName: "admin.projects",
  },
  {
    linkIcon: "fa-graduation-cap",
    label: "Courses",
    urlName: "admin.courses",
  },
  {
    linkIcon: "far fa-circle-user",
    label: "Friends",
    urlName: "admin.friends",
  },
  {
    linkIcon: "far fa-file",
    label: "Files",
    urlName: "admin.files",
  },
  {
    linkIcon: "far fa-credit-card",
    label: "Plans",
    urlName: "admin.plans",
  },
];
</script>
