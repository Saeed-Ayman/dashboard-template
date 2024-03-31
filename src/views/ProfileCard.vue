<template>
  <div class="bg-white rounded-lg overflow-hidden">
    <div class="px-4 pt-6 pb-4 h-40 bg-gray-200 flex justify-between">
      <div class="w-fit text-center md:text-left">
        <MainTitle>Welcome</MainTitle>
        <div class="text-gray-500">
          {{ user.username.substring(0, user.username.indexOf(" ")) }}
        </div>
      </div>
      <img
        class="hidden sm:block"
        :src="importImg('welcome.png')"
        alt="welcome"
      />
    </div>

    <div class="h-14 border-t">
      <img
        class="relative z-10 mx-auto md:ml-6 -mt-7 w-14 h-14 rounded-full ring-4 ring-white shadow-lg"
        :src="importImg(user.userAvatar)"
        alt="avatar"
      />
    </div>

    <div
      class="border-y text-center py-4 flex flex-col md:flex-row md:justify-around gap-5"
    >
      <div v-for="[op1, op2] in profileBar">
        <div>{{ op1 }}</div>
        <div class="mt-1 text-sm text-gray-500">{{ op2 }}</div>
      </div>
    </div>

    <div class="p-4">
      <a
        class="block w-fit ml-auto text-white bg-blue-500 text-sm font-bold px-3 py-1.5 rounded-lg hover:bg-blue-600"
      >
        Profile
      </a>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import MainTitle from "../components/MainTitle.vue";

const user = {
  username: "Steve Jobs",
  userAvatar: "avatar.png",
  userJob: "Developer",
  userProjectsNumber: 80,
  userEarnedNumber: 8500,
};

const profileBar = computed(() => [
  [user.username, user.userJob],
  [user.userProjectsNumber, "Projects"],
  [`$${user.userEarnedNumber}`, "Earned"],
]);
</script>
