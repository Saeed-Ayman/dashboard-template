<script setup>
import CardLayout from "../components/CardLayout.vue";
</script>

<template>
  <CardLayout title="Social Info" description="Social Media Information">
    <div class="space-y-4">
      <div
        v-for="{ icon, name, placeholder } in [
          {
            icon: 'fa-twitter',
            name: 'twitter',
            placeholder: 'Twitter Username',
          },
          {
            icon: 'fa-facebook-f',
            name: 'facebook',
            placeholder: 'Facebook Username',
          },
          {
            icon: 'fa-linkedin',
            name: 'linkedin',
            placeholder: 'Linkedin Username',
          },
          {
            icon: 'fa-youtube',
            name: 'youtube',
            placeholder: 'Youtube Username',
          },
        ]"
        class="group border rounded-md flex bg-gray-50"
      >
        <label
          :for="name"
          class="border-r w-10 h-9 transition duration-500 text-gray-400 group-focus-within:text-gray-600 flex justify-center items-center"
        >
          <icon :icon="['fa-brands', icon]" />
        </label>
        <input
          type="text"
          :id="name"
          class="w-full bg-transparent text-xs font-semibold px-3 outline-none"
          :placeholder="placeholder"
        />
      </div>
    </div>
  </CardLayout>
</template>
