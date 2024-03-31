<script setup>
const props = defineProps(["title"]);
const model = defineModel();

model.value = props.title;

const friends = [
  {
    avatarImg: "friend-01.jpg",
    fullName: "Ahmed Nasser",
    job: "JavaScript Developer",
    friendsNumber: 99,
    projectsNumber: 15,
    articlesNumber: 25,
    vip: true,
    joinDate: "02/10/2021",
  },

  {
    avatarImg: "friend-02.jpg",
    fullName: "Omar Fathy",
    job: "Cloud Developer",
    friendsNumber: 30,
    projectsNumber: 11,
    articlesNumber: 12,
    joinDate: "02/08/2020",
  },

  {
    avatarImg: "friend-03.jpg",
    fullName: "Omar Ahmed",
    job: "Mobile Developer",
    friendsNumber: 80,
    projectsNumber: 20,
    articlesNumber: 18,
    joinDate: "02/06/2020",
  },

  {
    avatarImg: "friend-04.jpg",
    fullName: "Shady Nabil",
    job: "Back-End Developer",
    friendsNumber: 70,
    projectsNumber: 30,
    articlesNumber: 18,
    joinDate: "28/06/2020",
  },

  {
    avatarImg: "friend-05.jpg",
    fullName: "Mohamed Ibrahim",
    job: "Algorithm Developer",
    friendsNumber: 80,
    projectsNumber: 30,
    articlesNumber: 18,
    joinDate: "28/08/2020",
  },

  {
    avatarImg: "friend-04.jpg",
    fullName: "Amr Hendawy",
    job: "Back-End Developer",
    friendsNumber: 70,
    projectsNumber: 30,
    articlesNumber: 18,
    joinDate: "28/06/2020",
  },

  {
    avatarImg: "friend-02.jpg",
    fullName: "Mahmoud Adel",
    job: "Cloud Developer",
    friendsNumber: 30,
    projectsNumber: 11,
    articlesNumber: 12,
    joinDate: "02/08/2020",
  },

  {
    avatarImg: "friend-05.jpg",
    fullName: "Ahmed Abuzaid",
    job: "Content Creator",
    friendsNumber: 80,
    projectsNumber: 30,
    articlesNumber: 18,
    vip: true,
    joinDate: "28/08/2020",
  },

  {
    avatarImg: "friend-01.jpg",
    fullName: "Gareeb Elshiekh",
    job: "JavaScript Developer",
    friendsNumber: 90,
    projectsNumber: 15,
    articlesNumber: 25,
    vip: true,
    joinDate: "02/10/2020",
  },

  {
    avatarImg: "friend-03.jpg",
    fullName: "Hamza",
    job: "Front-End Developer",
    friendsNumber: 80,
    projectsNumber: 20,
    articlesNumber: 18,
    joinDate: "02/06/2020",
  },
];
</script>

<template>
  <div class="grid md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
    <div
      v-for="{
        avatarImg,
        fullName,
        job,
        friendsNumber,
        articlesNumber,
        projectsNumber,
        joinDate,
        vip,
      } in friends"
      class="bg-white rounded-lg p-3"
    >
      <div>
        <div class="flex gap-2">
          <a
            href="#"
            class="transition duration-300 bg-gray-100 p-2 aspect-square rounded-full text-gray-600 hover:text-white hover:bg-blue-500"
          >
            <icon class="block w-3.5 h-3.5" icon="fa-phone" />
          </a>
          <a
            href="#"
            class="transition duration-300 bg-gray-100 p-2 aspect-square rounded-full text-gray-600 hover:text-white hover:bg-blue-500"
          >
            <icon class="block w-3.5 h-3.5" icon="fa-regular fa-envelope" />
          </a>
        </div>

        <div class="w-28 mx-auto rounded-full overflow-hidden">
          <img :src="importImg(avatarImg)" alt="avatar_img" />
        </div>

        <div class="py-4 text-center space-y-1">
          <div class="font-bold">{{ fullName }}</div>
          <div class="text-sm text-gray-500">{{ job }}</div>
        </div>
      </div>

      <div class="relative border-y space-y-1.5 py-4">
        <div class="text-sm font-medium">
          <icon class="mx-2 w-3.5 h-3.5" icon="fa-regular fa-face-smile" />
          <span>{{ friendsNumber }} Friends</span>
        </div>
        <div class="text-sm font-medium">
          <icon class="mx-2 w-3.5 h-3.5" icon="fa-code-commit" />
          <span>{{ projectsNumber }} Projects</span>
        </div>
        <div class="text-sm font-medium">
          <icon class="mx-2 w-3.5 h-3.5" icon="fa-regular fa-newspaper" />
          <span>{{ articlesNumber }} Articles</span>
        </div>

        <div
          v-if="vip"
          class="absolute text-5xl font-semibold text-red-500/25 top-1/2 right-0 -translate-y-1/2"
        >
          VIP
        </div>
      </div>

      <div
        class="flex flex-wrap gap-1 justify-between items-center pt-2 text-xs font-medium"
      >
        <div class="text-gray-500">Joined {{ joinDate }}</div>
        <div class="flex gap-1 text-white">
          <a href="#" class="bg-blue-500 px-2 py-1 rounded-md">Profile</a>
          <button class="text-xs bg-red-500 px-2 py-1 rounded-md">
            Remove
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
