<template>
  <div class="bg-white flex justify-between items-center p-4">
    <div class="relative">
      <input
        class="transition-all duration-300 text-sm border pl-8 py-2 rounded-xl w-40 outline-none focus:w-48 focus:placeholder-white"
        placeholder="Type A Keyword"
      />
      <icon icon="fa-search" class="text-gray-400 absolute left-2.5 top-2.5" />
    </div>

    <div class="flex justify-center items-center gap-4">
      <div class="relative">
        <icon class="w-5 h-5" icon="far fa-bell" />
        <div
          class="absolute w-2.5 h-2.5 bg-red-500 rounded-full -top-1.5 -right-1"
        ></div>
      </div>
      <img
        class="w-8 aspect-square"
        src="../assets/images/avatar.png"
        alt="avatar"
      />
    </div>
  </div>
</template>
