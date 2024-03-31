<script setup>
const props = defineProps(["title"]);
const model = defineModel();

model.value = props.title;

const filesStatistics = [
  {
    title: "PDF Files",
    count: 130,
    size: "6.5GB",
    bgColor: "bg-blue-200",
    color: "text-blue-600",
    icon: "fa-regular fa-file-pdf",
  },
  {
    title: "Images",
    count: 115,
    size: "3.5GB",
    bgColor: "bg-green-200",
    color: "text-green-600",
    icon: "fa-regular fa-images",
  },
  {
    title: "Word Files",
    count: 110,
    size: "3.2GB",
    bgColor: "bg-red-200",
    color: "text-red-600",
    icon: "fa-regular fa-file-word",
  },
  {
    title: "CSV Files",
    count: 99,
    size: "2.9GB",
    bgColor: "bg-orange-200",
    color: "text-orange-600",
    icon: "fa-file-csv",
  },
];

const files = [
  {
    title: "my-file.pdf",
    type: "pdf",
    user: "Elzero",
    date: "20/06/2020",
    size: "5.5MB",
  },
  {
    title: "my-file.avi",
    type: "avi",
    user: "Admin",
    date: "16/5/2021",
    size: "12.5MB",
  },
  {
    title: "my-file.eps",
    type: "eps",
    user: "Uploader",
    date: "16/5/2021",
    size: "2.7MB",
  },
  {
    title: "my-file.psd",
    type: "psd",
    user: "Osama",
    date: "16/5/2021",
    size: "15.1MB",
  },
  {
    title: "my-file.dll",
    type: "dll",
    user: "Coder",
    date: "16/5/2021",
    size: "2.2MB",
  },
  {
    title: "my-file.png",
    type: "png",
    user: "Designer",
    date: "16/5/2021",
    size: "1.1MB",
  },
  {
    title: "my-file.dll",
    type: "dll",
    user: "Coder",
    date: "16/5/2021",
    size: "2.2MB",
  },
  {
    title: "my-file.png",
    type: "png",
    user: "Designer",
    date: "16/5/2021",
    size: "1.1MB",
  },
  {
    title: "my-file.psd",
    type: "psd",
    user: "Osama",
    date: "16/5/2021",
    size: "15.1MB",
  },
  {
    title: "my-file.pdf",
    type: "pdf",
    user: "Elzero",
    date: "16/5/2021",
    size: "5.5MB",
  },
  {
    title: "my-file.avi",
    type: "avi",
    user: "Admin",
    date: "16/5/2021",
    size: "12.5MB",
  },
  {
    title: "my-file.eps",
    type: "eps",
    user: "Uploader",
    date: "16/5/2021",
    size: "2.7MB",
  },
  {
    title: "my-file.pdf",
    type: "pdf",
    user: "Elzero",
    date: "16/5/2021",
    size: "5.5MB",
  },
  {
    title: "my-file.avi",
    type: "avi",
    user: "Admin",
    date: "16/5/2021",
    size: "12.5MB",
  },
  {
    title: "my-file.eps",
    type: "eps",
    user: "Uploader",
    date: "16/5/2021",
    size: "2.7MB",
  },
  {
    title: "my-file.psd",
    type: "psd",
    user: "Osama",
    date: "16/5/2021",
    size: "15.1MB",
  },
  {
    title: "my-file.dll",
    type: "dll",
    user: "Coder",
    date: "16/5/2021",
    size: "2.2MB",
  },
  {
    title: "my-file.png",
    type: "png",
    user: "Designer",
    date: "16/5/2021",
    size: "1.1MB",
  },
  {
    title: "my-file.dll",
    type: "dll",
    user: "Coder",
    date: "16/5/2021",
    size: "2.2MB",
  },
  {
    title: "my-file.png",
    type: "png",
    user: "Designer",
    date: "16/5/2021",
    size: "1.1MB",
  },
  {
    title: "my-file.psd",
    type: "psd",
    user: "Osama",
    date: "16/5/2021",
    size: "15.1MB",
  },
  {
    title: "my-file.pdf",
    type: "pdf",
    user: "Elzero",
    date: "16/5/2021",
    size: "5.5MB",
  },
  {
    title: "my-file.avi",
    type: "avi",
    user: "Admin",
    date: "16/5/2021",
    size: "12.5MB",
  },
  {
    title: "my-file.eps",
    type: "eps",
    user: "Uploader",
    date: "16/5/2021",
    size: "2.7MB",
  },
];
</script>

<template>
  <div class="grid sm:grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
    <div
      class="bg-white overflow-hidden rounded-lg px-6 py-4 col-span-full md:col-span-1 2xl:col-span-2 md:row-span-2"
    >
      <div class="text-2xl font-bold text-center my-2">Files Statistics</div>

      <div class="space-y-4 my-4">
        <div
          v-for="{
            title,
            count,
            size,
            color,
            bgColor,
            icon,
          } in filesStatistics"
          class="border p-2.5 rounded-lg flex justify-between items-center gap-2 flex-wrap"
        >
          <div class="flex flex-wrap gap-2">
            <div
              class="w-11 h-11 flex justify-center items-center rounded-md"
              :class="[color, bgColor]"
            >
              <icon :icon="icon" />
            </div>

            <div class="font-medium flex flex-col justify-between">
              <div class="text-sm">{{ title }}</div>
              <div class="text-xs text-gray-500">{{ count }} Files</div>
            </div>
          </div>

          <div class="text-sm text-gray-500 font-medium">{{ size }}</div>
        </div>
      </div>

      <button
        class="group block mx-auto bg-blue-500 text-white text-sm font-medium px-3 py-2 rounded-md"
      >
        <icon
          icon="fa-solid fa-angles-up"
          class="mr-1 group-hover:animate-bounce ease-linear"
        />
        Upload
      </button>
    </div>

    <div
      v-for="{ title, type, user, date, size } in files"
      class="group relative bg-white rounded-lg p-3"
    >
      <div class="border-b py-3">
        <icon icon="fa-download" class="absolute top-2 left-2 text-gray-500" />
        <img
          class="h-20 mx-auto group-hover:rotate-6 transition"
          :src="importImg(`${type}.svg`)"
          :alt="`${type}_img`"
        />
        <div class="text-sm font-medium text-center mt-4 mb-2">{{ title }}</div>
        <div class="text-xs font-medium text-gray-500">{{ user }}</div>
      </div>
      <div class="flex justify-between text-xs text-gray-500 font-medium mt-3">
        <div>{{ date }}</div>
        <div>{{ size }}</div>
      </div>
    </div>
  </div>
</template>
