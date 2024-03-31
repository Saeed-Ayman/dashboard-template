<template>
  <CardLayout title="Latest Uploads">
    <div class="divide-y-2">
      <div
        v-for="{ filename, fileType, uploadsUser, fileSize } in uploads"
        class="flex justify-between items-center py-2"
      >
        <div class="flex gap-2 items-center">
          <img
            class="h-10"
            :src="importImg(`${fileType}.svg`)"
            :alt="`${fileType}_img`"
          />
          <div>
            <div class="font-semibold">{{ filename }}</div>
            <div class="text-gray-500 font-medium">{{ uploadsUser }}</div>
          </div>
        </div>
        <div class="text-xs font-medium bg-gray-200 px-2.5 py-1 rounded-lg">
          {{ fileSize }}
        </div>
      </div>
    </div>
  </CardLayout>
</template>

<script setup>
import CardLayout from "../components/CardLayout.vue";

const uploads = [
  {
    filename: "My-pdf-file.pdf",
    uploadsUser: "Elzero",
    fileSize: "2.9mb",
    fileType: "pdf",
  },
  {
    filename: "My-Video-File.avi",
    uploadsUser: "Admin",
    fileSize: "4.9mb",
    fileType: "avi",
  },
  {
    filename: "My-Psd-File.psd",
    uploadsUser: "Osama",
    fileSize: "4.5mb",
    fileType: "psd",
  },
  {
    filename: "My-Zip-File.zip",
    uploadsUser: "User",
    fileSize: "8.9mb",
    fileType: "zip",
  },
  {
    filename: "My-DLL-File.dll",
    uploadsUser: "Admin",
    fileSize: "4.9mb",
    fileType: "dll",
  },
  {
    filename: "My-Eps-File.eps",
    uploadsUser: "Designer",
    fileSize: "22mb",
    fileType: "eps",
  },
];
</script>
