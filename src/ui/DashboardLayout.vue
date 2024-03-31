<script setup>
import { ref } from "vue";
import HeaderBar from "./HeaderBar.vue";
import NavBar from "./NavBar.vue";

const title = ref("");
</script>

<template>
  <div class="max-w-full min-h-screen flex">
    <NavBar />

    <div class="flex-grow flex flex-col overflow-hidden">
      <HeaderBar />

      <div class="flex-grow bg-blue-50 px-4 pb-4">
        <div class="py-6">
          <div class="text-4xl font-bold">{{ title }}</div>
          <div class="-mt-2">
            <span class="inline-block bg-black w-10 h-[3px]"></span>
            <span class="inline-block bg-white w-24 h-[3px]"></span>
          </div>
        </div>

        <!-- cards -->
        <router-view v-model="title"></router-view>
      </div>
    </div>
  </div>
</template>
